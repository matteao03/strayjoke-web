<template>
    <div class="birthday">
        <label>出生日期：</label>
            <input type="hidden" :value="birth" id="birth"/>
            <select id="sel_year" rel="2000"></select>年
            <select id="sel_month" rel="2"></select>月
            <select id="sel_day" rel="1"></select>日
    </div>
</template>

<script>
require("@/utils/birthday.js")

export default {
    data:{
        birth:'2000-2-1'
    },
    mounted:function(){
        $(function () {
            $.ms_DatePicker({
                    YearSelector: "#sel_year",
                    MonthSelector: "#sel_month",
                    DaySelector: "#sel_day",
                    Birth:'#birth'
            });
            $.ms_DatePicker();
        }); 
    }
}
</script>

<style lang="scss">

</style>