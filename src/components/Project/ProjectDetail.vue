<style lang="scss">

.topbar{
  margin-bottom: 20px;
  a{
    color:#575757;
  }
  i{
    font-size: 24px;
    vertical-align: middle;
    margin-right: 8px;
  }
  span{
    font-size: 18px;
    vertical-align: middle;
  }
}

.project-detail {
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
      <h2>基础信息</h2>
      <div class="main">
        dsjakdalkjd
      </div>
    </div>
    <div class="board">
      <h2>项目金额</h2>
      <div class="main">
        dsjakdalkjd
      </div>
    </div>
    <div class="board">
      <h2>项目人数</h2>
      <div class="main">
        dsjakdalkjd
      </div>
    </div>
</div>

</template>

<script>

import axios from 'axios'

export default {
    data: function() {
        return {}
    },
    created() {
        axios.get('dashBoard/orderAmount.htm', {
            params: {
                proId: this.$route.params.id
            }
        }).then((response) => {
            document.title = this.$route.params.id
            this.amountObj = response.data.data
            console.info(this.amountObj)

        })
    }
}

</script>
