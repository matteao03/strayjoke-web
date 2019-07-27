<template>
    <div class="page-service">
        <div class="service-content">
            <div class="breadcrumb-container">
                <breadcrumb />
            </div>
            <div class="left">
                <div class="filter-container">
                    <my-filter />
                </div>
                <div class="list-container">
                    <my-list />
                </div>
            </div>
            <div class="right">1122</div>
        </div>
    </div>
</template>

<script>
import Breadcrumb from '@/components/service/breadcrumb.vue'
import MyFilter from '@/components/service/filter.vue'
import MyList from '@/components/service/list.vue'

export default {
    components:{
        Breadcrumb,
        MyFilter,
        MyList
    }
}
</script>

<style lang="scss">
.header-index .search-bar{
    padding-bottom: 0px;
}

.page-service{
    .service-content{
        margin: 0 auto;
        width: 1190px;
        .left{
            float: left;
            width: 950px;
        }
        .breadcrumb-container{
            padding:15px 0 25px;
            color:#222;
        }
        .right{
            float:right;
            width:230px;
            border:1px solid #222;
        }
    }
}
</style>
