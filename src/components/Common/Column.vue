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
                font-size: 0.7vw;
            }
            .val {
                color: #323232;
                font-size: 1vw;
                font-weight: bold;
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
