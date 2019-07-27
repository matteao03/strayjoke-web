<template>
    <div class="sj-filter">
        <div class="condition clearfix">
            <div class="type">区域</div>  
            <el-button size="mini" class="all" round>全部</el-button> 
            <ul class="more clearfix">
                <li><a href="/service">浦东新区</a></li>
                <li><a href="/service">长宁区</a></li>
                <li><a href="/service">徐汇区</a></li>
                <li><a href="/service">黄浦区</a></li>
                <li><a href="/service">静安区</a></li>
                <li><a href="/service">闵行区</a></li>
                <li><a href="/service">杨浦区</a></li>
                <li><a href="/service">普陀区</a></li>
                <li><a href="/service">闵行区</a></li>
                <li><a href="/service">杨浦区</a></li>
                <li><a href="/service">普陀区</a></li>
                <li><a href="/service">闵行区</a></li>
                <li><a href="/service">杨浦区</a></li>
                <li><a href="/service">普陀区</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
.sj-filter{
    position: relative;
    border: 1px solid #e5e5e5;
    background: #fff;
    border-radius: 4px;
    margin-bottom: 14px;
    .condition{
        padding:10px 0 0 20px;
         
        .type{
            width: 65px;
            color: #333;
            font-size: 14px;
            float: left;
        }
        .all{
             float:left;
             padding:5px;
             background: #13D1BE;
             color:#fff;
             width:50px;
             margin:0 15px; 
        }
        .more {
            float:left;
            width:780px;

            li{
                float: left;
                height: 28px;
                font-size: 14px;
                cursor: pointer;
                min-width: 125px;
                a{
                    padding:0 10px;
                    color:#333;
                }
            }
        }
    }
}
</style>