<style lang="scss">

@import "../../assets/sass/functions";

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
        border-bottom: 1px solid #EDEDEF;
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

</style>

<template lang="html">

<header>
    <div class="wrapper">
        <h1 class="logo">
          <router-link to="/home">{{ title }}</router-link>
      </h1>
        <div class="header-aciton">
            <button type="button" name="button" v-on:click="login">login</button>
        </div>
    </div>
</header>

</template>

<script>

export default {
    data: function(){
      return {
        title: 'AngelEase'
      }
    },
    methods: {
        login: function() {
            console.info('login')
        }
    }
}

</script>
