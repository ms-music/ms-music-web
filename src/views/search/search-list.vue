<template>
    <div>
        <div style="width: calc(50%);margin: auto;">
            <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
                <el-select v-model="select" slot="prepend" placeholder="请选择" style="width: 100px;">
                    <el-option v-for="(item,index) in musicSource" :key="index" :label="item.value"
                               :value="key"></el-option>
                </el-select>
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
        </div>
    </div>
</template>

<script>
    export default {
        name: "search_list",
        data() {
            return {
                musicSource: [
                    {key: 0, value: 'QQ', url: 'http://www.musictool.top/'},
                    {key: 1, value: '网易', url: ''},
                    {key: 2, value: '酷狗', url: ''},
                    {key: 3, value: '酷我', url: ''},
                    {key: 4, value: '虾米', url: ''},
                    {key: 5, value: '百度', url: ''},
                    {key: 6, value: '咪咕', url: ''},
                    {key: 7, value: '荔枝', url: ''},
                    {key: 8, value: '蜻蜓', url: ''},
                    {key: 9, value: '喜马拉雅', url: ''},
                    {key: 10, value: '5Sing原创', url: ''},
                    {key: 11, value: '5Sing翻唱', url: ''},
                    {key: 12, value: '一听', url: ''}
                ],
                input1: '',
                input2: '',
                input3: '',
                select: 'QQ'
            }
        }
    }
</script>

<style scoped>

</style>
