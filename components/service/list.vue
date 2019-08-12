<template>
    <div class="sj-list">
        <div class="tags">
            <span><a href="/service">默认</a></span>
            <span><a href="/service">销量</a></span>
            <span><a href="/service">价格</a></span>
            <span><a href="/service">好评最多</a></span>
        </div>
        <ul class="list">
            <li v-for="item in listData" :key="item.id" class="item clearfix">
                <div class="img">
                    <a :href="'/detail/'+item.id">
                        <img src="http://p1.meituan.net/600.600/deal/cd85d78a3d6def81c6e7957283bdb27a291498.jpg@220w_125h_1e_1c" />
                    </a>
                </div>
                <div class="info">
                    <a :href="'/detail/'+item.id">
                        <h4>{{item.lawyer.data.name}}</h4>
                        <div class="source">
                             <el-rate
                                :colors="colors">
                            </el-rate>
                            <span>{{item.review || 100}}条评论</span>
                        </div>
                        <div class="address">
                            {{item.lawyer.data.address}}
                        </div>
                    </a>
                </div>
            </li> 
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
        }
    },
    props:{
        listData:{
            type:Array,
            default:[]
        }
    }
}
</script>

<style lang="scss">
.sj-list{
    padding: 15px 20px 21px;
    background: #fff;
    border-radius: 4px;
    border: 1px solid #e5e5e5;
    color: #666;
    .tags{
        padding-bottom: 13px;
        font-size: 14px;
        line-height: 20px;
        border-bottom:1px solid #e5e5e5;
        span{
            display: inline-block;
            min-width: 96px;
            a {
                color:#222;
                padding: 0 10px;
            }
        }
    }
    .list {
        .item{
            margin-top:20px;
            position: relative;
            border-bottom: 1px solid #e5e5e5;
            padding-bottom: 18px;
            &:last-child{
                border:0;
            }
            a{
                color:#222;
            }
            .img{
                float:left;
                height: 125px;
                width: 220px;
                
                img{
                    width:100%;
                    height:100%;
                }
            }
            .info{
                float:left;
                padding: 4px 0 0 20px;
                max-width: 666px;
            }
        }
    }
}
</style>
