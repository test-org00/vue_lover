<template>
  <div class="app" >
    <v-head :localWeb="localWeb" :account="account" ></v-head>
    <div class="content-body"><router-view :account="account"></router-view></div>
    <v-foot></v-foot>
  </div>
</template>

<script>
import { localWeb3,contractInstance } from '@/web3Contract';
import { mapState } from 'vuex';
import VHead from '@/components/Head' 
import VFoot from '@/components/Foot' 
import utils from '@/assets/js/utils'
export default {
  name: 'App',
  data(){
    return {
      localWeb:false,
      account:null,
    }
  },

  components:{
    'v-head':VHead,
    'v-foot':VFoot
  },

  computed:{
    ...mapState([
      "accounts",
    ])
  },
  
  created(){
    if(localWeb3){
      this.localWeb = true;
      console.log(this.localWeb,localWeb3);
      this.$store.dispatch('fetchAccount');
      // this.$store.dispatch('fetchNetwork');
    }
  },
  watch:{
    accounts:{
      handler(curVal, oldVal){
        // debugger

        console.log('app', oldVal);
        if(oldVal !== null && oldVal[0]){
          this.account = curVal[0];
          // 切换账号 重新加载首页
          window.location.href=location.origin;
        }
        else
        {
          this.account = curVal[0];
          utils.getMemberInfo().then(res => {
            // debugger;
            console.log('setInfo',res);
            this.$store.dispatch('setInfo',res);
          })
        }
       
      },
      deep:true
    },
    
  },

}
</script>

<style lang="scss">

.app {
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
