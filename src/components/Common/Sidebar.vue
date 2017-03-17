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

</style>

<template lang="html">
        <div class="sidebar">
            <ul>
                <li>
                    <router-link to="/home">HOME</router-link>
                </li>
                <li>
                    <router-link to="/projects">PROJECT</router-link>
                </li>
                <li>
                    <router-link to="/mobileapp">MOBILEAPP</router-link>
                </li>
            </ul>
        </div>
</template>

<script>

export default {


}

</script>
