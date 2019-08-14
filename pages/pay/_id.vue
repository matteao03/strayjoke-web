<template>
    <div class="page-pay">
        <div class="clock">
            <el-icon class="el-icon-time logo-color"></el-icon>
            请在<span class="logo-color">23：00：03</span>内完成支付，超时订单会自动取消
        </div>
        <div class="order">
            <span class="title">项目：一个月法律顾问</span>
            <span class="price">应付金额￥：<span class="number">200</span></span>
        </div>
        <div class="pay-container">
            <div class="pay">
                <el-tabs v-model="activePay" type="card">
                    <el-tab-pane label="微信" name="wx" class="type-list">
                        <div>
                            <img src="https://p1.meituan.net/pay/pc_wxqrpay.png" />
                        </div>
                        <div class="submit-area">
                           <div>支付￥ <span class="number">200</span></div>
                            <el-button type="warning" round>去付款</el-button>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="支付宝" name="ali" class="type-list">
                        <div>
                             <img src="https://p0.meituan.net/pay/alipaypcnew.png" />
                        </div>
                        <div class="submit-area">
                            <div>支付￥ <span class="number">200</span></div>
                            <a href="http://api.strayjoke.test/payment/20/alipay">去支付</a>
                        </div>
                    </el-tab-pane>
                </el-tabs>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            activePay:'wx'
        }
    },
    method:{
        alipay(){
            console.log(12345)
            location.href="http://api.strayjoke.test/payment/20/alipay"
        },
        wxpay(){

        }
    }
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
        .logo-color{
            color:red;
            font-size:18px;
        }
    }
    .order{
        line-height: 24px;
        padding: 20px;
        background: #fff;
        border: 1px solid #e5e5e5;
        border-radius: 4px;
        margin-bottom: 10px;
        .title{
            font-size:18px;
        }
        .price{
            float:right;
        }
        .number{
            font-size:18px;
            color:red;
        }
    }
    .pay-container{
        background: #fff;
        border: 1px solid #e5e5e5;
        border-radius: 4px;
        padding: 0 20px 50px;
        .pay{
            padding-top:15px;
        }
        .type-list{
            margin-top:30px;
        }
        .submit-area{
            margin-top:50px;
            text-align:right;

            .number{
                font-size: 24px;
                color:red;
            }
        }
    }
}
</style>
