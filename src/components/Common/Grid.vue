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
    thead {
        height: 60px;
        line-height: 60px;
    }
    tbody {
        td {
            height: 40px;
            line-height: 40px;
            b {
                color: #090909;
            }
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
                {{ th.lbl }}
            </th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="tr in datalists">
            <td v-for="th in theads">
                {{tr[th.key]}}
            </td>
        </tr>
    </tbody>
</table>

</template>

<script>

export default {
    props: ['datalists', 'theads'],
    data: () => {
        return {}
    }
}

</script>
