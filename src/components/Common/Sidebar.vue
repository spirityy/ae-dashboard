<style lang="scss">

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
                font-size: 18px;
                color: #ADADAD;
                span{
                  vertical-align: middle;
                }
                i.icon{
                  display: inline-block;
                  width: 20px;
                  text-align: center;
                  font-size: 22px;
                  color: #ADADAD;
                  margin-right: 10px;
                  vertical-align: middle;
                }
                &:hover,
                &.active {
                    color: #343434;
                    i.icon{
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
                <li>
                    <router-link to="/mobileapp"><i class="icon ion-iphone"></i><span>MobileApp</span></router-link>
                </li>
            </ul>
        </div>
</template>

<script>

export default {

}

</script>
