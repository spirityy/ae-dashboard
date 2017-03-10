<style lang="scss" scoped>
@import "../../assets/sass/functions";

.column{
  float: left;
  ul{
    @include clearfix();
    li{
      float: left;
      margin: 0 3%;
      padding: 0 2%;
      .lbl{
        color:#C1C1C1;
        font-size: 14px;
      }
      .val{
        margin-top: 20px;
        color: #323232;
        font-size: 28px;
      }
    }
  }
}
</style>

<template lang="html">

<div class="column">
    <ul>
      <li v-for="col in cols">
        <div class="lbl">
          {{ col.lbl }}
        </div>
        <div class="val">
          {{ col.val }}
        </div>
      </li>
    </ul>
</div>

</template>

<script>

export default {
    name: 'column',
    data: () => {
        return {
            cols: [{
                lbl: '年度计划总募集项目量1',
                val: '22'
            }, {
                lbl: '当前募集成功项目量',
                val: '22'
            }, {
                lbl: '年度募集项目量达成率',
                val: '22%'
            }]
        }
    },
    created () {
        //console.info(this.data)
    },
    mounted: () => {
        //console.info(this.data)
    }
}

</script>
