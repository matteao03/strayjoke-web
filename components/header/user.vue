<template>
    <div class="header-user">
        <span v-if="!!user">
            你好！<span class="name">{{user}}</span>
            <nuxt-link to="/login">[退出]</nuxt-link>
        </span>
        <span v-else>
            <nuxt-link to="/auth/login" class="login">立即登录</nuxt-link>
            <nuxt-link to="/auth/signup" class="signup">注册</nuxt-link>
        </span>
    </div>
</template>

<script>
export default {
    data(){
        return {
        }
    },
    computed:{
        user(){
            return this.$store.state.user 
        }
    }
}
</script>

<style lang="scss">
.header-user{
    line-height:40px;
    a{
        color:#999;
    }
    .name{
        padding:0 5px;
    }
    .login{
        padding:0 10px;
        color:#66b1ff;
    }
}
</style>
