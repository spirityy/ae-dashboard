<style lang="scss" scoped>

@import "../../assets/sass/functions";

.index-wrapper {
    @include clearfix();
}

.board {
    text-align: center;
    margin-bottom: 2%;
}

canvas {
    float: left;
}

.index-col{
  width: 50%;
}

</style>

<template>

<div class="index-wrapper">
    <div class="board">
      <h2>募集项目</h2>
      <div class="main">
        <column :class="colClass"></column>
        <canvas id="pie1" width="400" height="300"></canvas>
      </div>
    </div>
    <div class="board">
      <h2>募集金额</h2>
      <div class="main">
        <column :class="colClass"></column>
        <canvas id="pie2" width="400" height="300"></canvas>
      </div>
    </div>
    <div class="board">
      <h2>复投率</h2>
      <div class="main">
        <column :class="colClass"></column>
        <canvas id="pie3" width="400" height="300"></canvas>
      </div>
    </div>
</div>

</template>

<script>

import column from '@/components/Common/Column.vue'

export default {
    name: 'name',
    data: () => {
        return {
            meta: {
                title: 'Index'
            },
            cols1: [{
                lbl: '年度计划总募集项目量12',
                val: '22'
            }, {
                lbl: '当前募集成功项目量',
                val: '22'
            }, {
                lbl: '年度募集项目量达成率',
                val: '22%'
            }],
            colClass:'index-col'
        }
    },
    components:{
      column
    },
    mounted: () => {
        //chart1
        const pie1 = document.getElementById("pie1");
        const myPie1Chart = new Chart(pie1, {
            type: 'pie',
            data: {
                labels: [
                    "Red",
                    "Blue",
                    "Yellow"
                ],
                datasets: [{
                    data: [300, 50, 100],
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }]
            },
            options: {
                responsive: false
            }
        });
        //pie1
        const pie2 = document.getElementById("pie2");
        const myPie2Chart = new Chart(pie2, {
            type: 'pie',
            data: {
                labels: [
                    "Red",
                    "Blue",
                    "Yellow"
                ],
                datasets: [{
                    data: [300, 50, 100],
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }]
            },
            options: {
                responsive: false
            }
        });
        const pie3 = document.getElementById("pie3");
        const myPie3Chart = new Chart(pie3, {
            type: 'pie',
            data: {
                labels: [
                    "Red",
                    "Blue",
                    "Yellow"
                ],
                datasets: [{
                    data: [300, 50, 100],
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }]
            },
            options: {
                responsive: false
            }
        });
    }
}

</script>
