<template>
  <div class="index-container">
    <my-menu></my-menu>
  </div>
</template>

<script>
import MyMenu from '@/components/index/index.vue'
export default {
  layout: "default",
  components:{
    MyMenu
  }
}
</script>

.<style lang="scss">
.index-container{
    margin: 0 auto;
    width: 1190px;
}
</style>

