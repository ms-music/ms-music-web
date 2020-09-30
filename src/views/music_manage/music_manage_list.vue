<template>
    <div>
        <!--        <video width="320" height="240" controls>-->
        <!--            <source :src="videoSrc" type="video/mp4">-->
        <!--            &lt;!&ndash;            <source src="movie.ogg"  type="video/ogg">&ndash;&gt;-->
        <!--            您的浏览器不支持 HTML5 video 标签。-->
        <!--        </video>-->

        <video-player class="video-player vjs-custom-skin"
                      ref="videoPlayer"
                      :playsinline="true"
                      :options="videoSrc"></video-player>

        <!--                <audio :src="videoSrc" autoplay></audio>-->

        <!--        <audio src="E:\file\20200925\mp3\47db2f60-acb4-41e9-b59f-02f075ba64f4.mp3" autoplay controls="controls">-->
        <!--            Your browser does not support the audio element.-->
        <!--        </audio>-->

        <!--        <el-image style="width: 200px;height: 150px;"-->
        <!--                  src="http://127.0.0.1:9010/mystyle-musice-fileserver/download/3a116b47-c56b-44ec-9955-339892d74fd0"></el-image>-->
    </div>
</template>

<script>
    export default {
        name: "music_manage_list",
        data() {
            return {
                // 视频播放
                playerOptions: {
                    playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
                    autoplay: false, //如果true,浏览器准备好时开始回放。
                    muted: false, // 默认情况下将会消除任何音频。
                    loop: false, // 导致视频一结束就重新开始。
                    preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                    language: 'zh-CN',
                    aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                    fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                    sources: [{
                        type: "",
                        src: ''//url地址
                        // src: "" //url地址
                    }],
                    poster: "", //你的封面地址
                    // width: document.documentElement.clientWidth,
                    notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                    controlBar: {
                        timeDivider: true,
                        durationDisplay: true,
                        remainingTimeDisplay: false,
                        fullscreenToggle: true  //全屏按钮
                    }
                },
                videoSrc: '',
                videoImg: '',
                playStatus: '',
                muteStatus: '',
                isMute: true,
                isPlay: false,
                width: '820', // 设置视频播放器的显示宽度（以像素为单位）
                height: '500', // 设置视频播放器的显示高度（以像素为单位）
                preload: 'auto', //  建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
                controls: true, // 确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
                autoplay: ''
            }
        },
        mounted() {
            this.getVideoUrl();
            // this.playerOptions['sources'][0]['src'] = ' file:///E:/file/20200926/video/617b13e2-ca42-460f-856a-6c8e7a9499cf.mp4';
            // console.log(this.playerOptions['sources'][0]['src'])

        },
        methods: {
            getVideoUrl() {
                this.$http.get('getVideoUrl/89d37861-6600-44c3-97b0-b8330371c834').then(res => {
                    // this.playerOptions['sources'][0]['src'] = res.data;
                    console.log(res.data);
                    // console.log(this.playerOptions['sources'][0]['src'])
                    this.videoSrc = " E:/file/" + res.data.path
                })
            }
        }
    }
</script>

<style scoped>

</style>
