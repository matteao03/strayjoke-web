<template>
    <div class="sj-public-menu">
        <div class="menu">
            <div class="link-group">
                <p class="title">我的订单</p>
                <ul>
                    <li>
                        <a href="/order">全部订单</a>
                        <i class="el-icon-arrow-right"></i>
                    </li>
                    <li>
                        <a href="/order">待付款</a>
                        <i class="el-icon-arrow-right"></i>
                    </li>
                    <li>
                        <a href="/order">使用中</a>
                        <i class="el-icon-arrow-right"></i>
                    </li>
                    <li>
                        <a href="/order">待评价</a>
                        <i class="el-icon-arrow-right"></i>
                    </li>
                    <li>
                        <a href="/order">退款/售后</a>
                        <i class="el-icon-arrow-right"></i>
                    </li>
                </ul>
            </div>
            <div class="link-group">
                <p class="title">我的收藏</p>
                <ul>
                    <li>
                        <a href="/collect">收藏的律师</a>
                        <i class="el-icon-arrow-right"></i>
                    </li>
                    <li>
                        <a href="/collect">收藏的服务</a>
                        <i class="el-icon-arrow-right"></i>
                    </li>
                </ul>
            </div>
            <div class="link-group">
                <p class="title">抵用券</p>
                <ul>
                    <li>
                        <a href="/coupon">可用券</a>
                        <i class="el-icon-arrow-right"></i>
                    </li>
                    <li>
                        <a href="/coupon">过期券</a>
                        <i class="el-icon-arrow-right"></i>
                    </li>
                </ul>
            </div>
            <div class="link-group">
                <p class="title">个人信息</p>
                <ul>
                    <li>
                        <a href="/info">账户设置</a>
                        <i class="el-icon-arrow-right"></i>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
.sj-public-menu{
    float:left;
    .menu{
        background: #FFF;
        border: 1px solid #E5E5E5;
        border-radius: 4px;
        width: 230px;
        padding-bottom: 20px;
        .link-group{
            font-size: 16px;
            color: #222;
            margin: 30px 20px 0 30px;
            .title{
                margin: 12px 0;
                font-size: 16px;
                color: #222;
                font-weight: bold;
            }
            li{
                margin: 15px 0;
                a{
                    color:#222;
                }
                i{
                    float:right;
                }
            }
        }
    }
}
</style>
