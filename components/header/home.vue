<template>
    <div class="header-home">
        <div class="header-bar">
            <el-row :gutter="0" class="header-content">
                <el-col :span="8">
                    <user/>
                </el-col>
                <el-col :span="16">
                    <my-nav/>
                </el-col>
            </el-row>
        </div>
        <div class="search-bar">
            <div class="header-content clearfix">
                <search/>
            </div>
        </div>
    </div>
</template>

<script>
import MyNav from './nav.vue'
import User from './user.vue'
import Search from './search.vue'

export default {
    components:{
        MyNav,
        User,
        Search
    }
}
</script>

<style lang="scss">
.header-home{
    background: #fff;
    box-shadow: 0 2px 27px 0 rgba(0,0,0,.1);
    .header-bar{
        background: #F8F8F8;
        width: 100%;
        color: #999;
        height: 40px;
    }
    .header-content{
        width: 1190px;
        margin: 0 auto;
    }
    @media screen and (max-width:1200px) {
        .header-content{
            width: 960px;
        }
    }
    .search-bar{
        padding-bottom: 35px;
    }
}
</style>

