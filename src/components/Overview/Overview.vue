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

.board1,.board2,.board3 {
    .main {
        padding: 5% 15%;
    }
}

</style>

<template>

<div class="index-wrapper">
    <div class="row">
        <div class="board">
            <h2>总览</h2>
            <div class="main">
                <column :cols="statisticst"></column>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="board board1">
            <h2>募集项目</h2>
            <div class="main">
                <!--<column :cols="collectProject"></column>-->
                <canvas id="pie-collecatproject"></canvas>
            </div>
        </div>
        <div class="board board2">
            <h2>募集金额</h2>
            <div class="main">
                <!--<column :cols="collectAmount"></column>-->
                <canvas id="pie-collectamount"></canvas>
            </div>
        </div>
        <div class="board board3 recast-board">
            <h2>复投率</h2>
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
            collectProject: [],
            collectAmount: [],
            statisticst: []
        }
    },
    components: {
        column
    },
    created: function() {

        axios.get('dashBoard/collectProject.htm').then((response) => {
            const piecp = document.getElementById("pie-collecatproject");
            new Chart(piecp, {
                type: 'pie',
                data: {
                    labels: [
                        '当前成功项目量(' + response.data.data.count+'个)',
                        '年度计划总项目量(' + response.data.data.targetCount+'个)'
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
            this.collectProject = [{
                lbl: '年度项目量达成率',
                val: response.data.data.rate
            }]
        })

        axios.get('dashBoard/collectAmount.htm').then((response) => {
            const pieca = document.getElementById("pie-collectamount");
            new Chart(pieca, {
                type: 'pie',
                data: {
                    labels: [
                        '当前成功融资金额(' + response.data.data.AMOUNT+'万元)',
                        '年度计划总募集金额(' + response.data.data.targetAmount+'万元)'
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

            this.collectAmount = [{
                lbl: '年度项目金额达成率',
                val: response.data.data.rate
            }]
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
                        '当前复投率(' + this.reCast.rate + '%)',
                        '目标复投率(' + this.reCast.targetRate + '%)'
                    ],
                    datasets: [{
                        data: [this.reCast.rate, this.reCast.targetRate],
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
            this.statisticst = [{
                lbl: '平台总众筹金额',
                val: response.data.data.amount+'万元'
            }, {
                lbl: '年度计划总募集项目量',
                val: response.data.data.projectCount
            }, {
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
    mounted: function() {
        //console.info(this.data)
    }
}

</script>
