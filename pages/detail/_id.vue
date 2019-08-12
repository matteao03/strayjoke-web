<template>
    <div class="page-detail">
        <div class="top">
            <div class="detail">
                <div class="left">
                    <h4 class="name">赵飞亚</h4>
                    <div class="score">
                        <el-rate class="star"
                            :colors="colors">
                        </el-rate>
                        <span>3633条评论</span>
                    </div>
                    <div class="address">南翔镇</div>
                </div>
                <div class="right">
                    <div class="img-container">
                        <img src="http://p1.meituan.net/deal/e16449e3cc2a1e09ec21ab2644b468a9273884.jpg@380w_214h_1e_1c" />
                    </div>
                </div>
            </div>
        </div>
        <div class="service">
            <h4>服务及优惠</h4>
            <div class="group">
                <ul>
                    <li v-for="item in skus" :key="item.id" class="item clearfix">
                        <div class="img-container">
                            <img src="http://p1.meituan.net/208.126/deal/81d988a26ec9fdf21e41e6812a10dcb5108017.jpg@100w_100h_1e_1c" />
                        </div>
                        <div class="info">
                            <div class="buy-it">
                                <el-button type="warning" round @click="buyIt(item.id)">立即购买</el-button>
                            </div>
                            <div class="title">服务周期：{{item.period}}</div>
                            <div class="title">一个月法律顾问</div>
                            <div class="title">￥{{item.price}}</div>
                        </div>
                    </li>
                </ul>
                <div class="comment">
                    <h4>网友点评</h4>
                    <ul>
                        <li>
                            <div class="avatar">
                                <img src="/bs/file/?f=meis/meishi.web:assets/bee61f5f04046d07.png@03d195d" />
                            </div>
                            <div>
                                <div class="name">wert</div>
                                <el-rate class="star"
                                    :colors="colors">
                                </el-rate>
                                <div>是第三方的归还借款归还的风格和都会附带大使馆反对和飓风过后价格浮动上的犯得上广泛的</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="right">2345</div>
        </div>
    </div>
</template>

<script>
import { getSkuList } from '@/api/product'

export default {
    data(){
        return {
            colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
            skus:[]
        }
    },
    async asyncData ({params}) {
       let {data} =  await getSkuList({product:params.id})
       return {
        skus:data.data
       }
    },
    methods:{
        buyIt(id){
            this.$router.push(`/cert/${id}`)
        }
    }
}
</script>

<style lang="scss">
.header-index .search-bar{
    padding-bottom: 0px;
}
.page-detail{
    width: 1190px;
    margin: auto;
    .top{
        margin-top:20px;
        .detail{
            color: #666;
            background-color: #fff;
            border-radius: 10px;
            padding: 20px 20px 33px;
            border: 1px solid #e5e5e5;
            box-shadow: 0 5px 14px 0 rgba(0,0,0,.1);

            .left{
                float: left;
                width: 748px;
                padding-right: 20px;
            }
        }
    }
    .service{
        .group{
            width: 950px;
            float: left;
            ul{
                margin-bottom: 40px;
                background: #fff;
                border: 1px solid #e5e5e5;
                border-radius: 4px;
                padding: 16px 20px 20px;

                li{
                    padding-bottom: 15px;
                    margin-top: 15px;
                    border-bottom:1px solid #e5e5e5;
                    &:last-child{
                        border:0;
                    }
                    .img-container{
                        width: 100px;
                        height: 100px;
                        float: left;
                        cursor: pointer;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .info{
                        float: left;
                        padding: 1px 0 0 20px;
                        width: 788px;

                        .buy-it{
                            float: right;
                            margin-top: 30px;
                        }
                    }
                }
            }
        .comment{
            .avatar{
                width: 60px;
                height: 60px;
                border-radius: 50%;
                float: left;
            }
        }
        }
    }
}
</style>
