<template>
  <div class="index-container">
    <div class="index-menu clearfix">
        <div class="left-menu">
            <left-menu />
        </div>
        <div class="right-menu">
            <right-menu />
        </div>
    </div>
  </div>
</template>

<script>
import LeftMenu from '@/components/index/left.vue'
import RightMenu from '@/components/index/right.vue'
export default {
  layout: "home",
  components:{
    LeftMenu,
    RightMenu
  }
}
</script>

.<style lang="scss">
.index-container{
    margin: 0 auto;
    width: 1190px;

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
}
</style>

