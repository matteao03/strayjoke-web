<template>
    <div class="page-pay">
        <div class="clock">
            <span>倒计时</span>
        </div>
        <div class="order">
            <span>一个月法律顾问</span>
            <span>200</span>
        </div>
        <div class="pay-container">
            <div class="pay">
                <div class="">微信/支付宝</div>
                <ul class="type-list">
                    <li>微信</li>
                    <li>支付宝</li>
                </ul>
                <div class="submit-area">
                    <div>支付200</div>
                    <el-button>去付款</el-button>
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
.page-pay{
    width: 1190px;
    margin:15px auto 0;

    .clock{
        height: 40px;
        line-height: 40px;
        margin-bottom: 20px;
        background-color: #fff;
        box-shadow: 0 3px 5px 0 rgba(0,0,0,.1);
        border-radius: 4px;
        text-align: center;
        font-size: 14px;
        color: #666;
    }
    .order{
        line-height: 24px;
        padding: 20px;
        background: #fff;
        border: 1px solid #e5e5e5;
        border-radius: 4px;
        margin-bottom: 10px;
    }
    .pay-container{
        background: #fff;
        border: 1px solid #e5e5e5;
        border-radius: 4px;
        padding: 0 20px 50px;
        .type-list{
            margin-top:30px;
        }
        .submit-area{
            margin-top:50px;
            text-align:right;
        }
    }
}
</style>
