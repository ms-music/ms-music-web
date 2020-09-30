export default {
    path: '/haolj',
    name: 'Haolj',
    meta: {requiresAuth: false},
    component: () => import('../views/Index'),
    children: [{
        //主页
        path: 'home',
        name: 'Home',
        meta: {requiresAuth: false},
        component: () => import('../views/home/Home')
    }, {
        //音乐上传
        path: 'music-upload',
        name: 'MusicUpload',
        meta: {requiresAuth: false},
        component: () => import('../views/music_manage/music_upload')
    }, {
        //音乐管理
        path: 'music-manage-list',
        name: 'MusicManageList',
        meta: {requiresAuth: false},
        component: () => import('../views/music_manage/music_manage_list')
    }, {
        //在线音乐搜索
        path: 'search-list',
        name: 'SearchList',
        meta: {requiresAuth: false},
        component: () => import('../views/search/search-list')
    }]
};
