<template>
    <div>
        <el-button size="small" 
            type="info" 
            :disabled="btnDisabled ? true : false "
        >
            {{countDown ? '重新获取('+ countDown +')': text}}
        </el-button>
        <span v-if="msg && btnDisabled">{{msg}}</span>
    </div>
</template>

<script>
export default {
    props:{
        text:{
            type:String,
            default:'免费获取短信验证码'
        },
        msg:{
            type:String,
            default:''
        },
        second:{
            type:Number,
            default:60
        },
        start:{
            type:Boolean,
            default:false
        },
        flagDisabled:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return {
           countDown:0,
           btnDisabled:false
        }
    },
    watch:{
        start:function(val){
            if (val){
                this.countDown = this.second
                this.countDownMethod()
            } else {
                this.countDown = this.second
            }
        },
        flagDisabled:function(val){
            if (val){
                this.btnDisabled = true
            } else {
                this.btnDisabled = false
            }
        },
    },
    methods:{
        countDownMethod(){ //倒计时
            if (this.countDown > 0) {
                setTimeout(() => {
                    this.countDown -= 1;
                    this.countDownMethod()
                }, 1000)
            } else {
                this.btnDisabled = false
            }
        },
    }
}
</script>

<style lang="scss">

</style>


