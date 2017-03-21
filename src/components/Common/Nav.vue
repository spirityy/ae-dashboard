<style lang="scss">

@import "../../assets/sass/functions";
header {
    width: 100%;
    height: 70px;
    line-height: 70px;
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
        position: relative;
        background-color: #fff;
        border-bottom: 1px solid #EDEDEF;
        width: 85%;
        height: 70px;
        margin: 0 auto;
        .header-aciton {
            float: right;
            .search-wrapper {
                position: relative;
            }
            .dashborard-search {
                display: inline-block;
                position: absolute;
                border: 1px solid #EDEDEF;
                @include border-radius(20px);
                right: 30px;
                top: 20px;
                width: 200px;
                height: 30px;
                padding: 0 20px 0 38px;
            }
            .ion-ios-search {
                display: inline-block;
                position: absolute;
                right: 200px;
                top: 0px;
                height: 20px;
                font-size: 20px;
            }
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

</style>

<template lang="html">

<header>
    <div class="wrapper">
        <h1 class="logo">
          <router-link to="/">{{ title }}</router-link>
      </h1>
        <div class="header-aciton">
            <!--<button type="button" name="button" v-on:click="login">login</button>-->
            <div class="search-wrapper">
                <input type="search" class="dashborard-search" name="" value="" v-on:keyup.enter="search">
                <i class="icon ion-ios-search"></i>
            </div>
        </div>
    </div>
</header>

</template>

<script>

export default {
    data: function() {
        return {
            title: 'AngelEase'
        }
    },
    methods: {
        search: function() {
            alert('暂未开通...')
        }
    }
}

</script>
