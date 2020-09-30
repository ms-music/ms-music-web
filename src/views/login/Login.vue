<template>
    <div class="login_main">
        <div class="login_item">
            <div style="font-size: 24px;font-weight: bold;letter-spacing: 4px;padding-bottom: 20px;color: #ffffff;">登录
            </div>
            <div style="padding: 10px 20px;">
                <el-input v-model="user_name" placeholder="请输入用户名"></el-input>
            </div>
            <div style="padding: 10px 20px;">
                <el-input placeholder="请输入密码" v-model="user_password" show-password></el-input>
            </div>
            <div style="padding: 30px 0;">
                <el-button type="success" @click="login()" style="margin-right: 20px;">登录</el-button>
                <el-button @click="goNav()">取消</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                user_name: '',
                user_password: ''
            }
        },
        methods: {
            goNav() {
                localStorage.access_token = "1111111111";
                this.$router.push({path: 'haolj/home'})
            },
            login() {
                if (!this.isNotNull(this.user_name)) {
                    this.$message.warning("请输入用户名");
                    return;
                }
                if (!this.isNotNull(this.user_password)) {
                    this.$message.warning("请输入密码");
                    return;
                }
                this.$http.get('userInfo/login', {
                    params: {
                        user_name: this.user_name,
                        user_password: this.user_password
                    }
                }).then(res => {
                    if (res.data.msg === '登录成功') {
                        this.$router.push({path: 'haolj/home'})
                    } else {
                        this.$message.error(res.data.msg)
                    }
                })
            },
            isNotNull(param) {
                if (param !== undefined && param != null && param !== '' && param !== 'null') {
                    return true;
                }
                return false;
            }
        }
    }
</script>

<style scoped>

    .login_main {
        background-image: url("../../assets/images/bg/login_bg.jpg");
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        min-width: 1000px;
        z-index: -10;
        zoom: 1;
        background-color: #fff;
        background-repeat: no-repeat;
        background-size: cover;
        -webkit-background-size: cover;
        -o-background-size: cover;
        background-position: center 0;
    }

    .login_item {
        background-color: rgba(0, 0, 0, 0.2);
        width: 300px;
        height: 250px;
        text-align: center;
        position: relative;
        top: 45%;
        left: 80%;
        transform: translate(-80%, -45%);
        padding: 20px 10px;
        border-radius: 10px;
    }


</style>
