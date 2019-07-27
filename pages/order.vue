<template>
    <div class="page-info">
        <div class="left">
            <my-menu />
        </div>
        <div class="right">
            <div class="info">
                <el-menu mode="horizontal" class="header">
                    <el-menu-item index="1">全部订单</el-menu-item>
                    <el-menu-item index="2">待付款</el-menu-item>
                    <el-menu-item index="3">使用中</el-menu-item>
                    <el-menu-item index="4">待评价</el-menu-item>
                    <el-menu-item index="5">退款/售后</el-menu-item>
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
