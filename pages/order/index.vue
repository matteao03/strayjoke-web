<template>
    <div class="page-info">
        <div class="left">
            <my-menu />
        </div>
        <div class="right">
            <div class="info">
                <el-tabs v-model="activeTab" @tab-click="handleClick">
                    <el-tab-pane label="全部订单" name="all">
                        <div class="body">
                            <ul class="order-list">
                                <li class="item clearfix" v-for="item in allOrders" :key="item.id">
                                    <div class="order-img">
                                        <img src="http://p1.meituan.net/600.600/deal/cd85d78a3d6def81c6e7957283bdb27a291498.jpg@220w_125h_1e_1c" />
                                    </div>
                                    <div class="order-info">
                                        <a :href="`/order/${item.id}`">
                                            <p class="title">个人法律顾问</p>
                                        </a>
                                        <p class="number">数量：1</p>
                                    </div>
                                    <div class="order-price">总价：200</div>
                                    <div class="order-status">已退款</div>
                                </li>
                            </ul>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="待付款" name="nopay">
                        <div class="body">
                            <ul class="order-list">
                                <li class="item clearfix" v-for="item in nopayOrders" :key="item.id">
                                    <div class="order-img">
                                        <img src="http://p1.meituan.net/600.600/deal/cd85d78a3d6def81c6e7957283bdb27a291498.jpg@220w_125h_1e_1c" />
                                    </div>
                                    <div class="order-info">
                                        <a :href="`/order/${item.id}`">
                                            <p class="title">个人法律顾问</p>
                                        </a>
                                        <p class="number">数量：1</p>
                                    </div>
                                    <div class="order-price">总价：200</div>
                                    <div class="order-status">已退款</div>
                                </li>
                            </ul>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="使用中" name="paid">
                        <div class="body">
                            <ul class="order-list">
                                <li class="item clearfix" v-for="item in paidOrders" :key="item.id">
                                    <div class="order-img">
                                        <img src="http://p1.meituan.net/600.600/deal/cd85d78a3d6def81c6e7957283bdb27a291498.jpg@220w_125h_1e_1c" />
                                    </div>
                                    <div class="order-info">
                                        <a :href="`/order/${item.id}`">
                                            <p class="title">个人法律顾问</p>
                                        </a>
                                        <p class="number">数量：1</p>
                                    </div>
                                    <div class="order-price">总价：200</div>
                                    <div class="order-status">已退款</div>
                                </li>
                            </ul>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="待评价" name="nocomment">
                        <div class="body">
                            <ul class="order-list">
                                <li class="item clearfix" v-for="item in nocommentOrders" :key="item.id">
                                    <div class="order-img">
                                        <img src="http://p1.meituan.net/600.600/deal/cd85d78a3d6def81c6e7957283bdb27a291498.jpg@220w_125h_1e_1c" />
                                    </div>
                                    <div class="order-info">
                                        <a :href="`/order/${item.id}`">
                                            <p class="title">个人法律顾问</p>
                                        </a>
                                        <p class="number">数量：1</p>
                                    </div>
                                    <div class="order-price">总价：200</div>
                                    <div class="order-status">已退款</div>
                                </li>
                            </ul>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="退款/售后" name="refund">
                        <div class="body">
                            <ul class="order-list">
                                <li class="item clearfix" v-for="item in refundOrders" :key="item.id">
                                    <div class="order-img">
                                        <img src="http://p1.meituan.net/600.600/deal/cd85d78a3d6def81c6e7957283bdb27a291498.jpg@220w_125h_1e_1c" />
                                    </div>
                                    <div class="order-info">
                                        <a :href="`/order/${item.id}`">
                                            <p class="title">个人法律顾问</p>
                                        </a>
                                        <p class="number">数量：1</p>
                                    </div>
                                    <div class="order-price">总价：200</div>
                                    <div class="order-status">已退款</div>
                                </li>
                            </ul>
                        </div>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </div>
    </div>    
</template>

<script>
import MyMenu from '@/components/public/menu.vue'
import { getOrders } from '@/api/order'

export default {
    components:{
        MyMenu
    },
    data(){
        return {
            activeTab: 'all',
            allOrders:[],
            nopayOrders:[],
            nocommentOrders:[],
            paidOrders:[],
            refundOrders:[],
        }
    },
    methods:{
        handleClick(tab) {
            getOrders({status:tab.name}).then(res=>{
                this[`${tab.name}Orders`] = res.data.data
            })
        }
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
            }
        }
        .order-list{
            .item{
                border-top: 1px solid #E5E5E5;
                padding: 20px 0;
                &:first-child{
                    border-top:0;
                }
                .order-img{
                    float:left;
                    img{
                        width: 90px;
                        height: 90px;
                        border-radius: 4px;
                    }
                }
                .order-info{
                    float: left;
                    height: 90px;
                    width: 325px;
                    position: relative;
                    .title{
                        font-size: 16px;
                        color: #222222;
                        margin: 10px 0 10px 15px;
                        font-weight: 500;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        max-width: 300px;
                    }
                    .number{
                        font-size: 12px;
                        color: #666666;
                        margin-left: 15px;
                        height: 18px;
                    }
                }
                .order-price{
                    float: left;
                    font-size: 12px;
                    color: #666666;
                    line-height: 90px;
                    text-align: center;
                    width: 200px;
                }
                .order-status{
                    float: left;
                    font-size: 12px;
                    color: #333;
                    line-height: 90px;
                    text-align: center;
                    width: 100px;
                }
            }
        }
    }
}
</style>
