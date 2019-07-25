<template>
    <div class="footer-index clearfix">
        <div class="help item">
            <dl>
                <dt>用户帮助</dt>
                <dd>申请退款</dd>
                <dd>常见问题</dd>
                <dd>用户协议</dd>
                <dd>隐私政策</dd>
                <dd>消费者权益保障</dd>
            </dl>
        </div>
        <div class="join item">
            <dl>
                <dt>律师入驻</dt>
                <dd>律师入驻平台</dd>
                <dd>律师入驻咨询</dd>
            </dl>
        </div>
        <div class="about item">
            <dl>
                <dt>公司信息</dt>
                <dd>关于我们</dd>
                <dd>投资者关系</dd>
                <dd>加入我们</dd>
            </dl>
        </div>
        <div class="call item">
            <dl>
                <dt>投诉举报热线</dt>
                <dd>举报邮箱</dd>
                <dd>举报电话</dd>
            </dl>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
.footer-index{
    background: #f8f8f8;
    width: 1190px;
    margin: 0 auto;
    color: #333;
    font-size: 12px;
    line-height: 2;
    box-sizing: border-box;
    text-align: left;
    padding:40px 45px;
    border-top:1px solid #e5e5e5;
    border-bottom:1px solid #e5e5e5;
    .item{
        width:25%;
        float:left;
        dt{
            font-size:16px;
        }
        dd{
            margin:0;
        }
    }
}
</style>
