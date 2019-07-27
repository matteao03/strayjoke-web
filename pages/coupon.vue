<template>
    <div class="page-info">
        <div class="left">
            <my-menu />
        </div>
        <div class="right">
            <div class="info">
                <el-menu mode="horizontal" class="header">
                    <el-menu-item index="1">可用券</el-menu-item>
                    <el-menu-item index="2">过期券</el-menu-item>
                </el-menu>
                <div class="body">
                    用户信息
                </div>
            </div>
        </div>
    </div>    
</template>

<script>
import MyMenu from '@/components/public/menu.vue'

export default {
    components:{
        MyMenu
    }
}
</script>

<style lang="scss">
.header-index .search-bar{
    padding-bottom: 0px;
}

.page-info{
    margin: 15px auto 0;
    width: 1190px;
    .right{
        width: 908px;
        background: #FFF;
        border: 1px solid #E5E5E5;
        border-radius: 4px;
        padding: 20px 20px 0;
        float: right;
        position: relative;

        .info{
            .header{
            }
        }

    }
}
</style>
