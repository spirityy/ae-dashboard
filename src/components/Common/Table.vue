<style lang="scss" scoped>

.table {
    width: 100%;
    border-collapse: collapse;
    th,
    td {
        text-align: center;
        font-size: 14px;
    }
    th {
        color: #575757;
    }
    td {
        text-align: center;
        color: #7D7D7D;
    }
    thead{
        height: 60px;
        line-height: 60px;
    }
    tbody{
      td{
        height: 40px;
        line-height: 40px;
      }
      tr:nth-child(odd) {
          background-color: #F6F6F6;
      }
    }
}

</style>

<template lang="html">

<table class="table">
    <thead>
        <tr>
            <th v-for="th in theads">
                {{ th }}
            </th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="tr in datalists">
            <td v-for="(key , index) in theads">
                {{tr[index]}}
            </td>
        </tr>
    </tbody>
</table>

</template>

<script>

export default {
    data: () => {
        return {
            theads: ['当月众筹项目', '众筹项目状态', '融资目标', '已募集天数', '项目完成比'],
            datalists: [
                [1, 2, 3, 4, 5],
                [6, 7, 8, 9, 10]
            ]
        }
    }
}

</script>
