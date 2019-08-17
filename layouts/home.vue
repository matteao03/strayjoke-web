<template>
  <el-container class="layout-default">
    <el-header class="header-container" height="auto">
      <my-header/>
    </el-header>
    <el-main class="main-container">
        <nuxt />
    </el-main>
    <el-footer class="footer-container" height="auto">
      <my-footer/>
    </el-footer>
  </el-container>
</template>

<script>
import MyHeader from '@/components/header/home.vue'
import MyFooter from '@/components/footer/index.vue'

export default {
  components:{
    MyHeader,
    MyFooter
  }
}
</script>

<style lang="scss">
@import "~/assets/scss/common.scss";

.layout-default{
  background: #f8f8f8;
  .header-container, 
  .footer-container, 
  .main-container{
    padding:0;
    overflow: unset;
  }
  .footer-container{
    margin-top: 40px;
    
  }
}
</style>


