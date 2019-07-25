<template>
    <ul class="header-nav">
        <li class="item">
            <nuxt-link to="/">个人中心</nuxt-link>
            <ul class="second-nav">
                <li><nuxt-link to="/">我的订单</nuxt-link></li>
                <li><nuxt-link to="/">我的收藏</nuxt-link></li>
                <li><nuxt-link to="/">抵用券</nuxt-link></li>
                <li><nuxt-link to="/">账户设置</nuxt-link></li>
            </ul>
        </li>
        <li class="item">
            <nuxt-link to="/">手机APP</nuxt-link>
        </li>
        <li class="item">
            <nuxt-link to="/">律师中心</nuxt-link>
            <ul class="second-nav-law second-nav">
                <li><nuxt-link to="/">登录律师中心</nuxt-link></li>
                <li><nuxt-link to="/">律师入驻</nuxt-link></li>
            </ul>
        </li>
        <li class="item">
            <nuxt-link to="/">投诉意见</nuxt-link>
        </li>
    </ul>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
.header-nav{
    float:right;
    a{
         color: #999;
        &:hover{
            color: #66b1ff;
        } 
    }
    .item{
        float:left;
        position: relative;
        height: 40px;
        line-height: 40px;
        padding:0 15px;
        position: relative;
        box-sizing: border-box;
	    border-left: 1px solid transparent;
	    border-right: 1px solid transparent;
        &:hover{
	        background-color: #fff;
	        border-color: #E5E5E5;
	        box-shadow: 0 3px 5px 0 rgba(0,0,0,.1);
            .second-nav{
                display: block;
            }
        }
        .second-nav{
            width:100%;
            border: 1px solid #E5E5E5;
            box-shadow: 0 3px 5px 0 rgba(0,0,0,.1);
	        border-bottom-left-radius: 4px;
	        border-bottom-right-radius: 4px;
            border-top:none;
            background: #fff;
            position:absolute;
            box-sizing: content-box;
            text-align:center;
            right:-1px;
            z-index: 1000;
            top:95%;
            display:none;
        }
        .second-nav-law{
            width:140%;
        }
    }
}
</style>


