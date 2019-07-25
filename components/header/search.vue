<template>
    <div class="header-search">
        <div class="logo">
            <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt="美团">
        </div>
        <div class="search">
            <el-input class="search-input" placeholder="搜索律师或服务"></el-input>
            <el-button class="search-btn" icon="el-icon-search">搜索</el-button>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
.header-search{
    .logo{
        float: left;
        padding-top: 28px;
        padding-right: 60px;
        padding-bottom: 40px;
        font-size: 16px;
        min-width: 220px;
        height: 54px;
        img{
            width: 126px;
            height: 46px;
            border: 0;
        }
    }
    .search {
        float: left;
        padding-top: 28px;
        position: relative;
        width: 550px;
        height: 40px;
        background: #fff;
        border-radius: 4px;

        .search-input{
            border: none;
            line-height: 100%;
            box-sizing: border-box;
            display: inline-block!important;
            font-size: 15px;
            height: 100%;
            width: 84%;
            
            .el-input__inner{
                border: 1px solid #13D1BE;
                border-top-right-radius: 0;
                border-bottom-right-radius: 0;
                padding-left:15px;
            }
        }
        .search-btn{
            outline: 0;
            width: 16%;
            box-sizing: border-box;
            line-height: 100%;
            height: 100%;
            background: #13D1BE;
            border: none;
            float: right;
            color: #fff;
            cursor: pointer;
            border-bottom-left-radius: 0;
            border-top-left-radius: 0;
        }
    }
}
</style>
