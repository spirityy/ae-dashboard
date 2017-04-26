<style lang="scss" scoped>

@import "../../assets/sass/functions";
.column {
    ul {
        @include clearfix();
        li {
            text-align: left;
            float: left;
            padding: 0 2%;
            .lbl {
                color: #C1C1C1;
                font-size: 0.9vw;
            }
            .val {
                color: #323232;
                font-size: 1.2vw;
                font-weight: bold;
            }
        }
    }
}

.col4-tc {
    ul li {
      display: inline-block;
      width: 21%;
      text-align: center;
    }
}

.project-top,
.project-user {
    li {
        &:last-child {
            float: right;
            .lbl{
              font-size: 1.1vw;
            }
            .val{
              font-size: 1.3vw;
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
    props: ['cols'],
    data: function() {
        return {}
    },
    created: function(props) {
    }
}

</script>
