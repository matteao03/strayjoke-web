<template>
    <div class="sj-right">
        <div class="menu-nav">
            <a href="/service" class="nav-link">法律顾问</a>
            <a href="/service" class="nav-link">公司法务</a>
            <nuxt-link to="/" class="nav-link">维权</nuxt-link>
            <nuxt-link to="/" class="nav-link">论坛</nuxt-link>
            <nuxt-link to="/" class="nav-link">招聘/求职</nuxt-link>
            <nuxt-link to="/" class="nav-link">律师入驻</nuxt-link>
        </div>
        <div class="carousel-container clearfix">
            <el-carousel class="carousel" height="415px">
                <el-carousel-item v-for="item in 4" :key="item">
                    <img src="http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg" />
                </el-carousel-item>
            </el-carousel>
            <div class="login-card">
               <div class="login-dom">
                   <a href="/auth/login" class="btn-login">注册</a>
                   <a href="/auth/signup" class="btn-login">登录</a>
                </div> 
               <div class="qrcode">
                  二维码
                </div> 
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
.sj-right{
    float: left;
    .menu-nav{
        position: absolute;
        top: -45px;
        left: 20px;
        .nav-link{
            color: #222;
            font-weight: 700;
            font-size: 16px;
            margin: 0 20px;
            cursor: pointer;
            position: relative;
            &:hover{
                color:#ccff40;
            }
        }
    }
    .carousel-container{
        width:950px;
        box-sizing:border-box;
        .carousel{
            width:730px;
            float:left;
        }
        .login-card{
            float:left;
            .login-dom, .qrcode{
                border:1px solid #ddd;
                height:200px;
                width:200px;
                margin-left:10px;
                .btn-login{
                    width:50px;
                    margin:0 auto;
                    display: block;
                }
            }
            .qrcode{
                margin-top:10px;
            }
        }
    }
    @media screen and (max-width:1200px) {
    .carousel-container{
        width:720px;
        box-sizing:border-box;
        .carousel{
            width:500px;
            float:left;
        }
    }
}
}
</style>