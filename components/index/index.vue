<template>
    <div class="index-menu clearfix">
        <div class="left-menu">
            <left-menu />
        </div>
        <div class="right-menu">
            <right-menu />
        </div>
    </div>
</template>

<script>
import LeftMenu from './left.vue'
import RightMenu from './right.vue'
export default {
    components:{
        LeftMenu,
        RightMenu
    }
}
</script>

<style lang="scss">
.index-menu{
    width: 1190px;
    margin: 0 auto;
    position: relative;
    .left-menu{
        float: left;
    }
    .right-menu{
        float: left;
        margin-left: 10px;
        margin-top: 10px;
        position: relative;
    }
}

@media screen and (max-width:1200px) {
    .index-menu{
        width: 960px;
    }
}
</style>
