<template>
    <div class="birthday">
        <label>出生日期：</label>
        <el-select v-model="year" placeholder="--" @change="changeYear">
            <el-option
            v-for="item in yearData"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            >
            </el-option>
        </el-select> 年
        <el-select v-model="month" placeholder="--" @change="changeMonth">
            <el-option
            v-for="item in monthData"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled"
            >
            </el-option>
        </el-select> 月
        <el-select v-model="day" placeholder="--" @change="changeDay">
            <el-option
            v-for="item in dayData"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled"
            >
            </el-option>
        </el-select> 日
    </div>
</template>

<script>
export default {
    props:{
        birthday:{
            default:'',
            type:String
        }
    },
    data(){
        return {
            yearData:[],
            monthData:[],
            dayData:[],
            year:this.birthday ? this.birthday.split('-')[0] : '',
            month:this.birthday ? this.birthday.split('-')[1] : '',
            day:this.birthday ? this.birthday.split('-')[2] : ''
        }
    },
    mounted:function(){
        this.createYearData()
        if(this.year){
            this.changeYear(this.year)
        }
        if (this.month){
            this.changeMonth(this.month)
        }
    },
    methods:{
        createYearData(){
            let yearNow = new Date().getFullYear()
            for(var i = yearNow; i>= 1900; i--){
                this.yearData.push({value:i, label:i})
            }
        },
        createDayData(flagDay = 32){
            let temp = []
            if (this.year == '' || this.month == ''){
                this.dayData = []
            } else {
                let year = parseInt(this.year)
                let month = parseInt(this.month)
                let dayCount = 0
                this.dayData = []
                switch (month) {
                    case 1:
                    case 3:
                    case 5:
                    case 7:
                    case 8:
                    case 10:
                    case 12:
                        dayCount = 31;
                        break;
                    case 4:
                    case 6:
                    case 9:
                    case 11:
                        dayCount = 30;
                        break;
                    case 2:
                        dayCount = 28;
                        if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
                            dayCount = 29;
                        }
                        break;
                    default:
                        break;
                }

                for (var i = 1; i <= dayCount; i++) {
                    temp.push({value:i, label:i, disabled: flagDay <=i})
                }
                return temp
            }
        },
        changeYear(data){
            let temp = []
            if (parseInt(data) == new Date().getFullYear())
            {
                for (var i = 1; i <= 12; i++) {
                    if (i > new Date().getMonth() + 1)
                    {
                        temp.push({value:i, label:i, disabled:true })
                    } else {
                        temp.push({value:i, label:i})
                    }
                    
                }
            } else {
                for (var i = 1; i <= 12; i++) {
                    temp.push({value:i, label:i})
                }
            }
            this.monthData = temp
        },
        changeMonth(data){
            if (this.year == new Date().getFullYear() && parseInt(data) == new Date().getMonth()+ 1)
            {
                this.dayData = this.createDayData(new Date().getDate())
            } else {
                this.dayData = this.createDayData()
            }
        },
        changeDay(data){
            this.$emit('change', `${this.year}-${this.month}-${data}`)
        }
    }
}
</script>

<style lang="scss">
.birthday{
    .el-select{
        width:80px;
    }
}
</style>