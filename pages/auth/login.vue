<template>
    <div class="page-login">
        <header class="header">
            <a href="/" class="site-logo">风了</a>
        </header>
        <section class="content-wrapper">
            <div class="site-body cf">
                <div class="banner-section">
                    <img
                    src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg"
                    width="480"
                    height="370"
                    alt="美团网"
                    />
                </div>
                <div class="login-section">
                    <el-form ref="normalForm" :model="normalForm" v-if="isNormal">
                        <div class="login-type">
                            <p class="phone-link" @click="isNormal = false">
                                手机动态码登录
                                <i class="el-icon-mobile-phone" />
                            </p>
                            账号登录
                        </div>
                        <el-form-item prop="phone" class="phone-item">
                            <el-input
                            v-model="normalForm.countryCode"
                            type="hidden"
                            name="countryCode"
                            style="display:none;"
                            />
                            <el-input v-model="normalForm.phone" class="form-text phone-field" placeholder="手机号" />
                            <span class="country-area">
                            <i class="el-icon-plus" />
                            <span>86</span>
                            <i class="el-icon-arrow-right" />
                            </span>
                        </el-form-item>
                        <el-form-item class="forget-password-item">
                            <a href="#" class="forget-password-link">忘记密码？</a>
                        </el-form-item>
                        <el-form-item prop="password">
                            <el-input
                            v-model="normalForm.password"
                            type="password"
                            class="form-text"
                            prefix-icon="el-icon-lock"
                            placeholder="密码"
                            />
                        </el-form-item>
                        <el-form-item class="login-button">
                            <el-button type="primary">
                            登录
                            </el-button>
                        </el-form-item>
                        <p class="signup-guide">
                            还没有账号？
                            <a href="/auth/signup">免费注册</a>
                        </p>
                    </el-form>
                    <el-form v-else ref="phoneForm" :model="phoneForm">
                        <div class="login-type">
                            <p class="normal-link" @click="isNormal = true">
                                普通方式登录
                                <i class="el-icon-user-solid" />
                            </p>
                            账号登录
                        </div>
                        <el-form-item prop="phone" class="phone-item">
                            <el-input
                            v-model="phoneForm.countryCode"
                            type="hidden"
                            name="countryCode"
                            style="display:none;"
                            />
                            <el-input v-model="phoneForm.phone" class="form-text phone-field" placeholder="手机号" />
                            <span class="country-area">
                                <i class="el-icon-plus"></i>
                                <span>86</span>
                                <i class="el-icon-arrow-right"></i>
                            </span>
                        </el-form-item>
                        <el-form-item class="forget-password-item">
                            <a href="#" class="forget-password-link">忘记密码？</a>
                        </el-form-item>
                        <el-form-item prop="verifyCode" class="verify-code-item">
                            <el-input
                            v-model="phoneForm.verifyCode"
                            class="form-text"
                            prefix-icon="el-icon-lock"
                            placeholder="验证码"
                            />
                            <p class="verify-code-tip">获取短信验证码</p>
                        </el-form-item>
                        <el-form-item class="login-button">
                            <el-button type="primary">
                            登录
                            </el-button>
                        </el-form-item>
                        <p class="treaty-block">
                            提示：未注册风了账号的手机号，登录时将自动注册风了账号，且代表您已同意《风了网用户协议》
                        </p>
                    </el-form>
                    <div class="oauth-wrapper">
                        <h3 class="title-wrapper">
                            <span class="title">用合作网站账号登录</span>
                        </h3>
                        <div class="oauth">
                            <i class="el-icon-chat-dot-round" />
                            <i class="el-icon-basketball" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <footer class="footer">
            <div class="site-info-nav cf">
                <ul>
                    <li class="first">
                    <a href="#">关于风了</a>
                    </li>
                    <li>
                    <a href="#">加入我们</a>
                    </li>
                    <li>
                    <a href="#">律师入驻</a>
                    </li>
                    <li>
                    <a href="#">帮助中心</a>
                    </li>
                    <li><a href="#">风了手机版</a></li>
                </ul>
            </div>
            <div class="copyright">
                <a class="f1" href="www.strayjoke.com">strayjoke.com</a>
                <a class="f1" href="www.strayjoke.com">风了</a>
                <span class="f1">备案号</span>
            </div>
        </footer>
    </div>
</template>
<script>
export default {
  layout: "blank",
  data() {
    return {
        isNormal:true,
        normalForm: {
            phone: "",
            countryCode: "86",
            password: ""
        },
        phoneForm: {
            phone: "",
            countryCode: "86",
            verifyCode: ""
        },
    }
  },
  methods: {
    login() {
      console.log("submit!")
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/common.scss";
.page-login {
    ul {
        margin: 0;
        padding: 0;
    }
    .header {
        width: 980px;
        height: auto;
        margin: 40px auto 30px;

        .site-logo {
        font-weight: bold;
        color: #66b1ff;
        font-size: 28px;
        }
    }
    .content-wrapper {
        .site-body {
            margin: 0 auto 70px;
            width: 980px;

            .banner-section {
                float: left;
                height: 370px;
                margin: 0 115px 0 0;
                width: 480px;
            }

            .login-section {
                float: left;
                padding-top: 0;
                margin: 0 auto;
                width: 270px;
                background: #fff;

                .login-type {
                    font-weight: 400;
                    color: #666;
                    margin-bottom: 10px;
                }
                .phone-link, .normal-link{
                    position: relative;
                    float: right;
                    padding-right: 16px;
                    font-size: 12px;
                    color: #666;
                    &:hover{
                        text-decoration: underline;
                        cursor: pointer;
                    }
                }

                .treaty-block {
                    padding: 0;
                    color: #999;
                    font-size: 12px;
                }
                .phone-item{
                    position: relative;
                    .country-area {
                        position:absolute;
                        top: 0px;
                        left:5px;
                    }
                }

                .forget-password-link{
                    float:right;
                    &:hover{
                        text-decoration: underline;
                    }
                }
                .verify-code-item{
                    position: relative;
                    .verify-code-tip{
                        padding: 1px 8px 0;
                        font-size: 12px;
                        user-select: none;
                        cursor: pointer;
                        letter-spacing: 0;
                        color: #666;
                        position:absolute;
                        right:0;
                        top:0px;
                    }
                }
                .oauth-wrapper {
                    margin-top: 30px;
                    .title-wrapper{
                        position: relative;
                        margin-bottom: 30px;
                        border-bottom: 1px solid #CCC;
                        width: 100%;
                        height: 0;
                        overflow: visible;
                        .title {
                            position: absolute;
                            top: -10px;
                            left: 50%;
                            margin-left: -75px;
                            width: 150px;
                            text-align: center;
                            font-size: 14px;
                            font-weight: 400;
                            color: #666;
                            background: #FFF;
                        }
                    }
                    .oauth{
                        text-align: center;
                    }
                }

                .signup-guide{
                    font-size:14px;
                }
            }
        }
    }
    .footer {
        margin: 0 auto 30px;
        clear: both;
        width: 980px;
        font-size: 12px;
        color: #999;
        .site-info-nav {
        margin-bottom: 20px;
        padding: 12px 0;
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;

        ul {
            float: left;
            width: 594px;
            color: #eee;
            .first {
            padding-left: 0;
            }

            li {
            float: left;
            margin: 5px 0;
            padding: 0 16px;
            line-height: 14px;
            border-right: 1px solid #eee;
            a {
                color: #999;
            }
            }
        }
        }
    }
    .cf:after {
        display: block;
        clear: both;
        height: 0;
        overflow: hidden;
        visibility: hidden;
        content: "";
    }
}
</style>

<style lang="scss">
.page-login{
  .phone-field {
    .el-input__inner{
      padding-left:60px;
    }
  }
  .el-button{
    width:100%;
  }
  .forget-password-item{
    margin-bottom: 10px;
    .el-form-item__content{
      line-height: 15px;
    }
  }
  .login-button{
    margin-bottom: 10px;
  }
}
</style>

