<style lang="scss">

@import "./assets/sass/reset";
@import "./assets/sass/functions";
body {
    background-color: #F3F7F9;
    color: #C1C1C1;
}

#app {
    width: 100%;
    margin: 60px auto;
    font-weight: 500;
}

.bd {
    @include clearfix();
    width: 85%;
    margin: 0 auto;
    .content {
        float: left;
        @include calc('width', '85% - 31px');
        padding: 30px 0 30px 30px;
    }
}

//transtion
.fade-enter-active,
.fade-leave-active {
    transition: opacity .3s
}

.fade-enter,
.fade-leave-to
/* .fade-leave-active in <2.1.8 */

{
    opacity: 0
}

//board common style
.board {
    background-color: #fff;
    margin-bottom: 2%;
    h2 {
        font-size: 0.8vw;
        height: 80px;
        line-height: 80px;
        border-bottom: 1px solid #E8EDEF;
        padding-left: 25px;
        text-align: left;
    }
    .main {
        @include clearfix();
        padding: 4%;
    }
}

</style>

<template>

<div id="app">
    <common-nav></common-nav>
    <div class="bd">
        <common-sidebar></common-sidebar>
        <div class="content">
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</div>

</template>

<script>

import router from 'vue-router'
import commonNav from '@/components/Common/Nav.vue'
import commonSidebar from '@/components/Common/Sidebar.vue'

export default {
    name: 'app',
    components: {
        'common-nav': commonNav,
        'common-sidebar': commonSidebar
    }
}

</script>
