<template>
    <div style="height: 100%; width: 100%;position: absolute;">
        <el-container style="height: 100%;">
            <el-header style="display: flex;height: 60px;">
                <div style="width: calc(100% - 200px);font-size: 24px;font-weight: bold;color: #ffffff;letter-spacing: 2px;">
                    我的音乐后台管理系统
                </div>
                <div style="width: 200px;text-align: right;">
                    <el-dropdown>
                        <i class="el-icon-setting" style="margin-right: 15px"></i>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>查看</el-dropdown-item>
                            <el-dropdown-item>新增</el-dropdown-item>
                            <el-dropdown-item>删除</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <span>郭海飞</span>
                </div>
            </el-header>
            <el-container style="height: calc(100% - 60px);">
                <el-aside width="200px" class="aside-left">
                    <el-menu style="height: 100%;">
                        <el-menu-item index="1" class="active" @click="goNav('/haolj/home')"><i
                                class="el-icon-s-home"></i>主页
                        </el-menu-item>
                        <el-submenu index="2">
                            <template slot="title"><i class="el-icon-files"></i>文件管理</template>
                            <el-menu-item index="2-1" @click="goNav('/haolj/music-upload')">文件上传</el-menu-item>
                            <el-menu-item index="2-2" @click="goNav('/haolj/music-manage-list')">文件下载</el-menu-item>
                        </el-submenu>
                        <el-submenu index="3">
                            <template slot="title"><i class="el-icon-box"></i>音乐库</template>
                            <el-menu-item index="3-1" @click="goNav('/haolj/search-list')">在线音乐</el-menu-item>
                        </el-submenu>
                    </el-menu>
                </el-aside>
                <el-main>
                    <router-view/>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "Index",
        data() {
            return {}
        },
        mounted() {
        },
        methods: {
            goNav(url) {
                this.$router.push(url)
            }
        }
    }
</script>

<style scoped>

    .el-header {
        background-color: #67C23A;
        color: #333;
        line-height: 60px;
    }

    .el-aside {
        background-color: #D3DCE6;
        color: #333;
    }

    .el-main {
        background-color: #ffffff;
        color: #333;
    }

    body > .el-container {
        margin-bottom: 40px;
    }

    .aside-left {
        overflow: hidden;
        overflow-y: auto;
    }

    .aside-left::-webkit-scrollbar {
        display: none;
    }

    /*.el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }*/
</style>
