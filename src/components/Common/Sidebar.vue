<style lang="scss">

.sidebar {
    float: left;
    width: 15%;
    min-height: 800px;
    background-color: #fff;
    border-right: 1px solid #EDEDEF;
    ul {
        margin-top: 100px;
        li {
            padding: 0 15% 0 30%;
            width: 55%;
            height: 60px;
            line-height: 60px;
            margin: 10px 0;
            a {
                font-size: 0.8vw;
                color: #ADADAD;
                span {
                    vertical-align: middle;
                }
                i.icon {
                    display: inline-block;
                    width: 16%;
                    text-align: center;
                    font-size: 1vw;
                    color: #ADADAD;
                    margin-right: 2%;
                    vertical-align: middle;
                }
                &:hover,
                &.active {
                    color: #343434;
                    i.icon {
                        color: #343434;
                    }
                }
            }
        }
    }
}

</style>

<template lang="html">

<div class="sidebar">
    <ul>
        <li>
            <router-link to="/overview"><i class="icon ion-monitor"></i><span>Overview</span></router-link>
        </li>
        <li>
            <router-link to="/projects"><i class="icon ion-ios-folder-outline"></i><span>Projects</span></router-link>
        </li>
        <!--<li>
            <router-link to="/mobileapp"><i class="icon ion-iphone"></i><span>MobileApp</span></router-link>
        </li>-->
    </ul>
</div>

</template>

<script>

import $ from 'jquery'
import store from '../store.js'
import bus from '../bus.js'

export default {
    data: function() {
        return {
            autoplay: {}
        }
    },
    created() {
        bus.$on('setAutoplay', this.setAutoplay)
        bus.$on('clearAutoplay', this.clearAutoplay)
    },
    methods: {
        setAutoplay() {
                let _this = this
                let autoplay_index = 0
                $('.sidebar li a').each(function(k, v) {
                    store.state.autoplayList.push($(v).attr('href'))
                })
                this.autoplay = setInterval(function() {
                    if (autoplay_index === store.state.autoplayList.length) autoplay_index = 0
                    location.href = store.state.autoplayList[autoplay_index]
                    autoplay_index++
                    //console.info(store.state.autoplayList.length,autoplay_index)
                }, store.state.timeInterval)
            },
            clearAutoplay() {
                clearInterval(this.autoplay);
                store.state.autoplay = false
            }
    }
}

</script>
