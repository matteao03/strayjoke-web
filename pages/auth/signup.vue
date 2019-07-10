<template>
  <div class="page-signup">
    <header class="header-mini">
      <div class="header-wrapper cf">
        <a href="/" class="site-logo">风了</a>
        <div class="login-block">
          <span class="tip">已有风了账号?</span>
          <a href="/auth/login">
            <el-button type="primary" size="small">登录</el-button>
          </a>
        </div>
      </div>
    </header>

    <section class="content">
      <el-form
        ref="ruleForm"
        :model="ruleForm"
        label-width="100px"
        :rules="rules"
      >
        <el-form-item label="手机号" prop="phone">
          <el-input v-model="ruleForm.phone" class="form-text" />
        </el-form-item>
        <el-form-item class="code-item">
          <el-button type="info" size="small">
            免费获取短信验证码
          </el-button>
        </el-form-item>
        <el-form-item label="短信验证码" prop="verifyCode">
          <el-input v-model="ruleForm.verifyCode" class="form-text" />
        </el-form-item>
        <el-form-item label="创建密码" prop="password">
          <el-input
            v-model="ruleForm.password"
            type="password"
            class="form-text"
          />
        </el-form-item>
        <el-form-item label="确认密码" prop="password2">
          <el-input
            v-model="ruleForm.password2"
            type="checkPass"
            class="form-text"
          />
        </el-form-item>
        <el-form-item class="signup">
          <el-button type="primary" @click="signup">
            同意以下协议并注册
          </el-button>
        </el-form-item>
        <el-form-item>
          <a href="#">《风了网用户协议》</a>
        </el-form-item>
      </el-form>
    </section>
    <footer class="footer-mini">
      <p class="copyright">
        <a class="f1" href="www.strayjoke.com">strayjoke.com</a>
        <a class="f1" href="www.strayjoke.com">风了</a>
        <span class="f1">备案号</span>
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  layout: "blank",
  data() {
    var checkMobile = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入手机号码"))
      } else if (/^[1][0-9]{10}$/.test(value)) {
        callback()
      } else {
        callback(new Error("手机号码格式不正确"))
      }
    }
    var checkCode = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入短信验证码"))
      } else if (/^[\d]{6}$/.test(value)) {
        callback()
      } else {
        callback(new Error("短信验证码格式不正确"))
      }
    }
    var checkPassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"))
      } else {
        if (this.ruleForm.password2 !== "") {
          this.$refs.ruleForm.validateField("password2")
        }
        callback()
      }
    }
    var checkPassword2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"))
      } else if (value !== this.ruleForm.password) {
        callback(new Error("两次输入密码不一致!"))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        phone: "",
        verifyCode: "",
        password: "",
        password2: ""
      },
      rules: {
        phone: [{ validator: checkMobile, trigger: "blur" }],
        password: [{ validator: checkPassword, trigger: "blur" }],
        password2: [{ validator: checkPassword2, trigger: "blur" }],
        verifyCode: [{ validator: checkCode, trigger: "blur" }]
      }
    }
  },
  methods: {
    signup() {
      console.log("submit!")
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/common.scss";
.page-signup {
  .header-mini {
    border-bottom: 2px solid #66b1ff;
    min-width: 980px;
    color: #666;

    .header-wrapper {
      margin: 0 auto;
      padding: 10px 0;
      width: 980px;

      .site-logo {
        font-weight: bold;
        color: #66b1ff;
        font-size: 28px;
      }
      .login-block {
        float: right;
        line-height: 36px;

        .tip {
          margin-right: 10px;
          vertical-align: sub;
        }
      }
    }
    .cf:after {
      content: "";
      display: block;
      clear: both;
      height: 0;
      overflow: hidden;
      visibility: hidden;
    }
  }
  .content {
    margin: 0 auto 30px;
    padding-top: 30px;
    width: 980px;
    min-height: 300px;

    .code-item,
    .signup {
      margin-bottom: 10px;
    }
    .form-text {
      width: 250px;
    }
  }

  .footer-mini {
    border-top: 1px solid #eee;
    padding-top: 20px;
    text-align: center;

    .f1 {
      color: #999;
      font-size: 14px;
    }
  }

  @media (max-width: 600px) {
    .header-mini {
      min-width: 100%;
      .header-wrapper {
        width: 90%;
        .tip {
          display: none;
        }
      }
      .content {
        width: 100%;
      }
      .form-text {
        padding-left: 50px;
      }
    }
  }
}
</style>
