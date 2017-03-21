<style lang="scss">

.topbar {
    margin-bottom: 20px;
    a {
        color: #575757;
    }
    i {
        font-size: 24px;
        vertical-align: middle;
        margin-right: 8px;
    }
    span {
        font-size: 18px;
        vertical-align: middle;
    }
}

.project-detail {
    .pro-name {
        font-size: 1vw;
        font-weight: bold;
    }
    h2 > span {
        margin-left: 10px;
        font-size: 14px;
        color: #7f8c8d;
        font-weight: normal;
    }
    .board {
      .main{
        padding: 2% 4%;
      }
    }
}

</style>

<template lang="html">

<div class="project-detail">
    <div class="topbar">
        <router-link to="/projects">
            <i class="icon ion-arrow-left-c"></i>
            <span>Projects</span>
        </router-link>
    </div>
    <div class="board">
        <h2 class="pro-name">{{proName}}<span>No.{{id}}</span></h2>
        <div class="main">
            <column :cols="ProjectBase"></column>
        </div>
    </div>
    <div class="board">
        <h2>项目金额</h2>
        <div class="main">
            <column :cols="ProjectAmount"></column>
        </div>
    </div>
    <div class="board">
        <h2>项目人数</h2>
        <div class="main">
            <column :cols="ProjectPeople"></column>
        </div>
    </div>
</div>

</template>

<script>

import axios from 'axios'
import column from '@/components/Common/Column.vue'

export default {
    data: function() {
        return {
            proName: '',
            id:1 ,
            ProjectBase: [],
            ProjectAmount: [],
            ProjectPeople: []
        }
    },
    components: {
        column
    },
    created() {
        axios.get('dashBoard/proDetail.htm', {
            params: {
                proId: this.$route.params.id
            }
        }).then((response) => {
            //set Title
            this.proName = document.title= response.data.data.proName
            this.id = response.data.data.id

            this.ProjectBase = [{
                lbl: '项目状态',
                val: response.data.data.status
            }, {
                lbl: '融资目标',
                val: response.data.data.proFinancieAmount+'万元'
            }, {
                lbl: '募集完成比',
                val: response.data.data.fundRate
            }]

            this.ProjectAmount = [{
                lbl: '支付成功总金额',
                val: response.data.data.amount
            }, {
                lbl: '已退款金额',
                val: response.data.data.refund
            }]

            this.ProjectPeople = [{
                lbl: '支付成功总人数',
                val: response.data.data.successCount
            }, {
                lbl: '下单未支付人数',
                val: response.data.data.unpayCount
            }, {
                lbl: '订单取消人数',
                val: response.data.data.cancleCount
            }, {
                lbl: '已退款人数',
                val: response.data.data.refundCount
            }, {
                lbl: '下单成功比例',
                val: response.data.data.OrderRate
            }]

        })
    }
}

</script>
