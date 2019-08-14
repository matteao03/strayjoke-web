<template>
    <div class="page-info">
        <div class="left">
            <my-menu />
        </div>
        <div class="right">
            <div class="info">
                <el-menu mode="horizontal" class="header">
                    <el-menu-item index="1">收藏的律师</el-menu-item>
                    <el-menu-item index="2">收藏的服务</el-menu-item>
                </el-menu>
                <div class="body">
                    <ul class="collect-list">
                       <li class="item clearfix">
                            <div class="collect-img">
                                <img src="http://p1.meituan.net/600.600/deal/cd85d78a3d6def81c6e7957283bdb27a291498.jpg@220w_125h_1e_1c" />
                            </div>
                            <div class="collect-info">
                                <p class="title">个人法律顾问</p>
                                <p>4.7分</p>
                                <p class="address">普陀区</p>
                            </div>
                            <div class="btn-container">
                                <a href="" class="detail-link">详情</a>
                                <el-icon class="el-icon-delete btn-del" ></el-icon>
                            </div>
                        </li>
                       <li class="item clearfix">
                            <div class="collect-img">
                                <img src="http://p1.meituan.net/600.600/deal/cd85d78a3d6def81c6e7957283bdb27a291498.jpg@220w_125h_1e_1c" />
                            </div>
                            <div class="collect-info">
                                <p class="title">个人法律顾问</p>
                                <p>4.7分</p>
                                <p class="address">普陀区</p>
                            </div>
                            <div class="btn-container">
                                <a href="" class="detail-link">详情</a>
                                <el-icon class="el-icon-delete btn-del" ></el-icon>
                            </div>
                        </li>
                    </ul>
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
        }

        .body{
            .collect-list{
                .item{
                    padding: 20px 0;
                    border-top: 1px solid #E5E5E5;
                    &:first-child{
                        border-top:0;
                    }
                    .collect-img{
                        float:left;
                        img{
                            width: 160px;
                            height: 90px;
                        }
                    }
                    .collect-info{
                        float: left;
                        padding: 13px 20px;
                        p{
                            padding:0;
                            margin:0;
                        }
                        .title{
                            white-space: nowrap;
                            width: 530px;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            font-size: 16px;
                            color: #222222;
                            font-weight: 500;
                        }
                    }
                    .btn-container{
                        float: right;
                        .detail-link{
                            font-size: 14px;
                            color: #666666;
                            font-weight: 500;
                            border: 1px solid #E5E5E5;
                            border-radius: 130px;
                            padding: 10px 25px;
                            position: relative;
                            top: 35px;
                        }
                        .btn-del{
                            width: 24px;
                            height: 24px;
                            float: right;
                            position: relative;
                            top: 37px;
                            margin-left: 21px;
                            cursor: pointer;
                        }
                    }
                }
            }
        }

    }
}
</style>
