<style lang="scss" scoped>

.projects-wrapper {
    padding: 30px;
    background-color: #fff;
}

</style>

<template>

<div class="projects-wrapper">
    <grid :theads="theads" :datalists="datalists"></grid>
</div>

</template>

<script>

import axios from 'axios'
import Chart from 'chart.js'
import grid from '@/components/Common/Grid.vue'

export default {
    name: 'index',
    data: () => {
        return {
            theads: [{
                key: 'proName',
                lbl: '当月众筹项目'
            }, {
                key: 'status',
                lbl: '众筹项目状态'
            }, {
                key: 'proFinancieAmount',
                lbl: '融资目标（万元）'
            }, {
                key: 'rate',
                lbl: '项目完成比'
            }],
            datalists: []
        }
    },
    components: {
        grid
    },
    created() {
        axios.get('dashBoard/proList.htm').then((response) => {
            this.datalists = response.data.data
        })
    }
}

</script>
