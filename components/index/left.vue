<template>
    <div class="sj-left">
        <div class="title">
            <span class="title-text">全部分类</span>
        </div>
        <ul>
            <li>
               <i class="el-icon-office-building"></i> 
               <span class="item-text">财产</span>
               <i class="el-icon-arrow-right arrow"></i>
            </li>
            <li>
               <i class="el-icon-office-building"></i> 
               <span class="item-text">婚姻</span>
               <i class="el-icon-arrow-right arrow"></i>
            </li>
            <li>
               <i class="el-icon-office-building"></i> 
               <span class="item-text">刑事</span>
               <i class="el-icon-arrow-right arrow"></i>
            </li>
            <li>
               <i class="el-icon-office-building"></i> 
               <span class="item-text">财产</span>
               <i class="el-icon-arrow-right arrow"></i>
            </li>
            <li>
               <i class="el-icon-office-building"></i> 
               <span class="item-text">婚姻</span>
               <i class="el-icon-arrow-right arrow"></i>
            </li>
            <li>
               <i class="el-icon-office-building"></i> 
               <span class="item-text">刑事</span>
               <i class="el-icon-arrow-right arrow"></i>
            </li>
            <li>
               <i class="el-icon-office-building"></i> 
               <span class="item-text">财产</span>
               <i class="el-icon-arrow-right arrow"></i>
            </li>
            <li>
               <i class="el-icon-office-building"></i> 
               <span class="item-text">婚姻</span>
               <i class="el-icon-arrow-right arrow"></i>
            </li>
            <li>
               <i class="el-icon-office-building"></i> 
               <span class="item-text">刑事</span>
               <i class="el-icon-arrow-right arrow"></i>
            </li>
            <li>
               <i class="el-icon-office-building"></i> 
               <span class="item-text">财产</span>
               <i class="el-icon-arrow-right arrow"></i>
            </li>
            <li>
               <i class="el-icon-office-building"></i> 
               <span class="item-text">婚姻</span>
               <i class="el-icon-arrow-right arrow"></i>
            </li>
            <li>
               <i class="el-icon-office-building"></i> 
               <span class="item-text">刑事</span>
               <i class="el-icon-arrow-right arrow"></i>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
.sj-left{
    width: 230px;
    height: 475px;
    position: relative;
    text-align: left;
    box-sizing: border-box;
    float: left;
    margin-top: -50px;
    color: #FFF;
    background: rgba(2,181,157,.85);
    background: -webkit-linear-gradient(-90deg,rgba(2,181,157,.85) 2%,rgba(22,146,183,.85) 100%);

    .title{
        height: 50px;
        padding-top: 15px;
        box-sizing: border-box;
        .title-text{
            font-size: 16px;
            font-weight: 400;
            margin-left: 15px;
        }
    }
    ul{
        padding: 10px 0 8px;
        li{
            position: relative;
            box-sizing: border-box;
            padding: 2px 12px;
            height: 32px;

            .item-text{
                margin-left:10px;
            }
            .arrow{
                position:absolute;
                right:15px;
                top:6px;
            }

        }
    }
}
</style>

