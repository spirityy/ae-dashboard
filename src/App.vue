<style lang="scss">

@import "./assets/sass/functions";
@import "./assets/sass/reset";
body {
    background-color: #F3F7F9;
    color: #C1C1C1;
}

#app {
    width: 100%;
    margin: 60px auto;
    font-weight: 500;
}

header {
    width: 100%;
    height: 80px;
    line-height: 80px;
    .logo {
        display: inline-block;
        width: 15%;
        background-color: #314D64;
        border-right: 1px solid #314D64;
        font-weight: 600;
        font-size: 22px;
        text-align: center;
        a {
            color: #fff;
        }
    }
    .wrapper {
        background-color: #fff;
        @include box-shadow(0 3px 3px 0 rgba(0, 0, 0, 0.1));
        width: 85%;
        height: 80px;
        margin: 0 auto;
        .header-aciton {
            float: right;
            button {
                cursor: pointer;
                margin-right: 20px;
                background-color: #fff;
                height: 50px;
                padding: 0 20px;
                border: 1px solid #ededef;
                @include border-radius(20px);
            }
        }
    }
}

.bd {
    @include clearfix();
    width: 85%;
    margin: 0 auto;
    .sidebar {
        float: left;
        width: 15%;
        height: 800px;
        background-color: #fff;
        border-right: 1px solid #EDEDEF;
        ul {
            margin-top: 100px;
            li {
                padding: 0 20% 0 30%;
                height: 60px;
                line-height: 60px;
                margin: 10px 0;
                a {
                    font-size: 16px;
                    color: #ADADAD;
                    &:hover,
                    &.active {
                        color: #343434;
                    }
                }
            }
        }
    }
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
  h2{
    height: 80px;
    line-height: 80px;
    border-bottom: 1px solid #E8EDEF;
    padding-left: 2%;
    text-align: left;
  }
  .main{
    @include clearfix();
    padding: 4%;
  }
}

</style>

<template>

<div id="app">
    <header>
        <div class="wrapper">
            <h1 class="logo">
            <router-link to="/home">{{ title }}</router-link>
        </h1>
            <div class="header-aciton">
                <button type="button" name="button" v-on:click="back">Back</button>
            </div>
        </div>
    </header>
    <div class="bd">
        <div class="sidebar">
            <ul>
                <li>
                    <router-link to="/home">HOME</router-link>
                </li>
                <li>
                    <router-link to="/overview">OVERVIEW</router-link>
                </li>
                <li>
                    <router-link to="/projects">PROJECT</router-link>
                </li>
                <li>
                    <router-link to="/mobileapp">MOBILEAPP</router-link>
                </li>
            </ul>
        </div>
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

export default {
    name: 'app',
    data() {
        return {
            title: 'AngelEase'
        }
    },
    methods: {
        back: function() {
            router.go(-1)
        }
    }
}

</script>
