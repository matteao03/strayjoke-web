<template>
    <div class="page-cert">
        <div class="cert-container">
            <el-table
                :data="sku"
                style="width: 100%"
                :header-cell-style="{background:'#EFF3F8'}">
                <el-table-column
                    prop="title"
                    label="服务"
                    width="500">
                </el-table-column>
                <el-table-column
                    prop="price"
                    label="单价"
                    width="180">
                </el-table-column> 
                <el-table-column
                    prop="period"
                    label="周期">
                </el-table-column>
                <el-table-column
                    prop="price"
                    label="总价">
                </el-table-column>
            </el-table>
            <div class="discount">优惠: 0</div>
            <div class="amount">
                应付金额: {{amount}}
            </div>
            <div class="service-time item">
                <el-row>
                    <el-col :span="4" :offset="2" class="title">选择服务时间：</el-col>
                    <el-col :span="18">
                        <el-date-picker
                            v-model="start_at"
                            type="datetime"
                            placeholder="选择服务开始时间"
                            @change="setEndTime"
                            >
                        </el-date-picker>
                        <template v-if="start_at">
                            <span>-</span>
                            <el-date-picker
                                v-model="end_at"
                                type="datetime"
                                placeholder="服务结束时间"
                                disabled>
                            </el-date-picker>
                        </template>
                    </el-col>
                </el-row>
            </div>
            <div class="remark item">
                <el-row>
                    <el-col :span="4" :offset="2" class="title">备注：</el-col>
                    <el-col :span="18">
                        <el-input
                            type="textarea"
                            :autosize="{ minRows: 3, maxRows: 4}"
                            placeholder="请输入内容"
                            v-model="remark">
                        </el-input>
                    </el-col>
                </el-row>
            </div>
            <div class="create-order">
                <el-button type="primary" @click="createOrder">提交订单</el-button>
            </div>
        </div>
    </div>
</template>

<script>
import { getSku } from '@/api/product'
import moment from 'moment'

export default {
    data(){
        return {
            sku:[],
            price:0,
            perion:0,
            start_at:'',
            end_at:'',
            remark:'',
            defaultTime:''
        }
    },
    computed:{
        amount:function(){
            return this.price
        }
    },
    async asyncData ({params}) {
        let {data} =  await getSku(params.id)
        let {title, period, price, id} = data.data
        return {
            sku:[{title, period, price, id}],
            price:price,
            period:period
        }
    },
    methods:{
        setEndTime(){
            const date = new Date()
            this.end_at = moment(this.start_at).add(this.period, 'days')
        },
        createOrder(){

        }
    }
}
</script>

<style lang="scss">
.header-index .search-bar{
    padding-bottom: 0px;
}
.layout-default .footer-container{
    margin-top:0;
}

.page-cert{
    background: #fff;
    padding-bottom:35px;

    .cert-container{
        width: 1190px;
        margin:20px auto 0;
        .discount{
            border-bottom: 1px solid #e5e5e5;
            text-align:right;
            padding:20px 0;
        }
        .amount{
            border-bottom: 1px solid #e5e5e5;
            text-align:right;
            padding:20px 0;
        }
        .create-order{
            text-align: right;
            padding:15px;
        }
        .item{
            padding:15px 0;
            width:1000px;
            .title{
                font-weight:bold;
            }
        }
    }

}
</style>
