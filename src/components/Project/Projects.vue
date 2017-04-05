<style lang="scss" scoped>

.projects-wrapper {
    padding: 30px;
    background-color: #fff;
}

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
            a {
                color: #314D64;
                text-decoration: underline;
            }
        }
        tr:nth-child(odd) {
            background-color: #F6F6F6;
        }
    }
}

</style>

<template>

<div class="projects-wrapper">
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
                <td>
                    <router-link :to="{ name: 'project_detail', params: { id:tr.id }}">
                        {{ tr.proName }}
                    </router-link>
                </td>
                <td>{{tr.status}}</td>
                <td>{{tr.proFinancieAmount}}万元</td>
                <td>{{tr.rate}}</td>
            </tr>
        </tbody>
    </table>
</div>

</template>

<script>

import axios from 'axios'
import Chart from 'chart.js'

import store from '../store.js'
import bus from '../bus.js'

import $ from 'jquery'

export default {
    name: 'index',
    data: () => {
        return {
            theads: [{
                lbl: '当月众筹项目'
            }, {
                lbl: '众筹项目状态'
            }, {
                lbl: '融资目标（￥）'
            }, {
                lbl: '项目完成比'
            }],
            datalists: []
        }
    },
    created() {
        axios.get('dashBoard/proList.htm').then((response) => {
            this.datalists = response.data.data
            response.data.data.forEach((item) => {
              if(!store.state.autoplayList.includes('#/projects/'+item.id)) store.state.autoplayList.push('#/projects/'+item.id)
            })
        })
    },
    mounted() { }
}

</script>
