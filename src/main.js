import Vue from 'vue'
import App from './App.vue'
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import http from './http'
import VideoPlayer from 'vue-video-player'

require('video.js/dist/video-js.css');
require('vue-video-player/src/custom-theme.css');


Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(VideoPlayer);

Vue.prototype.$http = http;

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
