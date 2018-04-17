<template>
  <div id="app" >
    <!-- <v-head :localWeb="localWeb" :account="account" ></v-head> -->
    <!-- <div class="content-body"><router-view/></div> -->
    <router-view></router-view>
    <!-- <v-foot></v-foot> -->
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
    }
  },

}
</script>

<style lang="scss">
@import './assets/scss/base.scss';
@import url(./assets/scss/icons.scss);
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height:  100%;
  display: flex;
  flex-direction: column;
  .content-body{
    flex:1 0 auto;
  }
}

</style>
