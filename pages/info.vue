<template>
    <div class="page-info">
        <div class="left">
            <my-menu />
        </div>
        <div class="right">
            <div class="info">
                <div class="header">
                    <h2>个人信息</h2>
                </div>
                <div class="content">
                    <div class="item clearfix">
                        <div class="field-name">头像</div>
                        <div class="field-value"></div>
                        <div class="update">
                             <el-button round>修改</el-button>
                        </div>
                    </div>
                    <div class="item clearfix">
                        <div class="field-name">昵称</div>
                        <div class="field-value"></div>
                        <div class="update">
                             <el-button round>修改</el-button>
                        </div>
                    </div>
                    <div class="item clearfix">
                        <div class="field-name">生日</div>
                        <div class="field-value"></div>
                        <div class="update">
                             <el-button round>修改</el-button>
                        </div>
                    </div>
                    <div class="item clearfix">
                        <div class="field-name">换绑手机</div>
                        <div class="field-value"></div>
                        <div class="update">
                             <el-button round>修改</el-button>
                        </div>
                    </div>
                    <div class="item clearfix">
                        <div class="field-name">登录密码</div>
                        <div class="field-value"></div>
                        <div class="update">
                             <el-button round>修改</el-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>    
</template>

<script>
import MyMenu from '@/components/public/menu.vue'

export default {
    components:{
        MyMenu
    }
}
</script>

<style lang="scss">
.header-index .search-bar{
    padding-bottom: 0px;
}

.page-info{
    margin: 15px auto 0;
    width: 1190px;
    .right{
        width: 908px;
        background: #FFF;
        border: 1px solid #E5E5E5;
        border-radius: 4px;
        padding: 20px 20px 0;
        float: right;
        position: relative;

        .info{
            .header{
                margin:10px 0 ;
            }
            .content{
                .item{
                    border-top: 1px solid #E5E5E5;
                    padding: 30px 0;
                    .field-name{
                        font-size: 18px;
                        color: #333;
                        line-height: 34px;
                        width: 95px;
                        border-right: 1px solid #e5e5e5;
                        text-align: right;
                        padding-right: 30px;
                        float: left;
                    }
                    .field-value{
                        float: left;
                        text-align: right;
                        padding-left: 30px;
                        height: 40px;
                    }
                    .update{
                        margin: 0 15px;
                        line-height: 40px;
                        float:right;
                    }
                }
            }
        }

    }
}
</style>
