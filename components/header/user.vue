<template>
    <div class="header-user">
        <template v-if="user">
            你好！<span class="user">{{user}}</span>
            <nuxt-link>[退出]</nuxt-link>
        </template>
        <template v-else>
            <nuxt-link to="/auth/login" class="login">立即登录</nuxt-link>
            <nuxt-link to="/auth/signup" class="signup">注册</nuxt-link>
        </template>
    </div>
</template>

<script>
export default {
    data(){
        return {
            user:''
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
    .user{
        padding:0 15px;
    }
    .login{
        padding:0 10px;
        color:#66b1ff;
    }
}
</style>
