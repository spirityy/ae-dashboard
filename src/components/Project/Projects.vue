<style lang="scss" scoped>

.projects-wrapper {
    padding: 30px;
    background-color: #fff;
}

</style>

<template>

<div class="projects-wrapper">
  <tablec></tablec>
</div>

</template>

<script>

import Chart from 'chart.js'

import tablec from '@/components/Common/Table.vue'

export default {
    name: 'index',
    data: () => {
      return {
          theads: ['当月众筹项目（包含募集失败）','众筹项目状态','融资目标','已募集天数','项目完成比'],
          datalists:[[1,2,3,4,5],[6,7,8,9,10]]
      }
    },
    components:{
      tablec
    },
    mounted: () => {


    }
}

</script>
