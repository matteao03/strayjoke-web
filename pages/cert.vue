<template>
    <div class="page-cert">
        <div class="cert-container">
            <el-table
                :data="tableData"
                style="width: 100%"
                :header-cell-style="{background:'#EFF3F8'}">
                <el-table-column
                prop="service"
                label="项目"
                width="500">
                </el-table-column>
                <el-table-column
                prop="price"
                label="单价"
                width="180">
                </el-table-column>
                <el-table-column
                prop="num"
                label="数量">
                </el-table-column>
                <el-table-column
                prop="acount"
                label="总价">
                </el-table-column>
            </el-table>
            <div class="discount">优惠</div>
            <div class="amount">
                应付金额
            </div>
            <div class="create-order">
                <el-button type="primary">提交订单</el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            tableData:[
                {
                    service:'一个月法律顾问',
                    num:1,
                    price:200,
                    acount:200
                }
            ]
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
    }
}
</style>
