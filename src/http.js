import axios from "axios/index";
import router from './router'

const http = axios.create({
    baseURL: process.env.VUE_APP_BASE_API_URL,
    timeout: 30000
});

http.interceptors.request.use(
    config => {
        if (localStorage.access_token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
            config.headers.Authorization = `${localStorage.access_token}`;
        } else {//退出到登录页面，或者发起微信授权，根据业务决定
            router.push({
                name: '/'
            });
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);

http.interceptors.response.use((response) => {
    return response;
}, (error) => {
    if (error.response.status === 401) {
        localStorage.removeItem('token');
        sessionStorage.removeItem('token');
        this.$http.defaults.headers.common['Authorization'] = "";
        router.push({
            path: '/',
            query: {redirect: router.app._route.path}
        });
        error.message = '请重新登录';
    }
    return Promise.reject(error);
});

export default http;
