<style lang="scss" scoped>

@import "../../assets/sass/functions";
.index-wrapper {
    @include clearfix();
}

.fl {
    float: left;
    width: 30%;
    margin-right: 2%;
}

.row {
    @include clearfix;
}

.board1,
.board2 {
    width: 32%;
    margin-right: 2%;
    float: left;
}

.board3 {
    float: left;
    width: 32%;
}

.board1,
.board2,
.board3 {
    .main {
        padding: 5% 15%;
    }
}

.overview-top {
    float: left;
    width: 39%;
    text-align: center;
    padding: 2% 5%;
    .lbl {
        font-size: 16px;
        margin-bottom: 6px;
    }
    .val {
        font-size: 28px;
        font-weight: bold;
        color: #4A4544;
    }
    &:first-child {
        margin-right: 2%;
    }
}

h2 > .rate {
    float: right;
    color: #BA6A5D;
    font-size: 18px;
    font-weight: bold;
}

</style>

<template>

<div class="index-wrapper">
    <div class="row">
        <div class="board overview-top">
            <div class="lbl">
                平台总众筹金额(万元)
            </div>
            <div class="val">
                {{total_amount}}
            </div>
        </div>
        <div class="board overview-top">
            <div class="lbl">
                平台总众筹项目数
            </div>
            <div class="val">
                {{projects_num}}
            </div>
        </div>
    </div>
    <div class="row">
        <div class="board">
            <h2>平台用户统计</h2>
            <div class="main">
                <column class="col4-tc" :cols="statisticst"></column>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="board board1">
            <h2>本年度募集项目完成比<span class="rate">{{ collectProjectRate }}</span></h2>
            <div class="main">
                <canvas id="pie-collecatproject"></canvas>
            </div>
        </div>
        <div class="board board2">
            <h2>本年度募集金额完成比<span class="rate">{{ collectAmountRate }}</span></h2>
            <div class="main">
                <canvas id="pie-collectamount"></canvas>
            </div>
        </div>
        <div class="board board3 recast-board">
            <h2>本年度复投率完成比<span class="rate">{{ reCast.rate }}%</span></h2>
            <div class="main">
                <canvas id="pie-recast"></canvas>
            </div>
        </div>
    </div>
</div>

</template>

<script>

import axios from 'axios'
import column from '@/components/Common/Column.vue'

export default {
    name: 'index',
    data: () => {
        return {
            reCast: {},
            person_statisticst: [],
            total_amount: '',
            projects_num: '',
            collectProjectRate: '',
            collectAmountRate: ''
        }
    },
    components: {
        column
    },
    created: function() {

        axios.get('dashBoard/collectProject.htm').then((response) => {
            const piecp = document.getElementById("pie-collecatproject");
            this.collectProjectRate = response.data.data.rate
            new Chart(piecp, {
                type: 'pie',
                data: {
                    labels: [
                        '当前成功项目量(' + response.data.data.count + '个)',
                        '年度计划总项目量(' + response.data.data.targetCount + '个)'
                    ],
                    datasets: [{
                        data: [response.data.data.count, response.data.data.targetCount],
                        backgroundColor: [
                            "#FF6384",
                            "#36A2EB"
                        ],
                        hoverBackgroundColor: [
                            "#FF6384",
                            "#36A2EB"
                        ]
                    }]
                },
                options: {
                    responsive: true
                }
            })
        })

        axios.get('dashBoard/collectAmount.htm').then((response) => {
            const pieca = document.getElementById("pie-collectamount")
            this.collectAmountRate = response.data.data.rate
            new Chart(pieca, {
                type: 'pie',
                data: {
                    labels: [
                        '当前成功融资金额(' + response.data.data.AMOUNT + '万元)',
                        '年度计划总募集金额(' + response.data.data.targetAmount + '万元)'
                    ],
                    datasets: [{
                        data: [response.data.data.AMOUNT, response.data.data.targetAmount],
                        backgroundColor: [
                            "#FF6384",
                            "#36A2EB"
                        ],
                        hoverBackgroundColor: [
                            "#FF6384",
                            "#36A2EB"
                        ]
                    }]
                },
                options: {
                    responsive: true
                }
            })

        })

        axios.get('dashBoard/reCast.htm').then((response) => {
            const {
                rate, targetRate
            } = response.data.data
            this.reCast = {
                rate: parseInt(rate, 10),
                targetRate: targetRate
            }
            const pieRecast = document.getElementById("pie-recast");
            new Chart(pieRecast, {
                type: 'doughnut',
                data: {
                    labels: [
                        '当前复投率(' + this.reCast.targetRate * this.reCast.rate / 100 + '%)',
                        '目标复投率(' + this.reCast.targetRate + '%)'
                    ],
                    datasets: [{
                        data: [this.reCast.targetRate * this.reCast.rate / 100, this.reCast.targetRate],
                        backgroundColor: [
                            "#FF6384",
                            "#36A2EB"
                        ],
                        hoverBackgroundColor: [
                            "#FF6384",
                            "#36A2EB"
                        ]
                    }]
                },
                options: {
                    responsive: true
                }
            })
        })

        axios.get('dashBoard/statistics.htm').then((response) => {
            this.total_amount = response.data.data.amount
            this.projects_num = response.data.data.projectCount
            this.statisticst = [{
                lbl: '平台总投资人数',
                val: response.data.data.investCount
            }, {
                lbl: '平台合格投资人数',
                val: response.data.data.investAuthCount
            }, {
                lbl: '平台总实名人数',
                val: response.data.data.realCount
            }, {
                lbl: '平台总注册人数',
                val: response.data.data.signCount
            }]
        })
    },
    mounted: function() {}
}

</script>
