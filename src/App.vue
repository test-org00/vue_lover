<template>
  <div id="app" >
    <v-head :localWeb="localWeb" :account="accounts[0]" ></v-head>
    <router-view/>
    <v-foot></v-foot>
  </div>
</template>

<script>
import { localWeb3,contractInstance } from '@/web3Contract';
import { mapState } from 'vuex';
import VHead from '@/components/Head' 
import VFoot from '@/components/Foot' 

export default {
  name: 'App',
  data(){
    return {
      localWeb:false,

    }
  },

  components:{
    'v-head':VHead,
    'v-foot':VFoot
  },

  computed:{
    ...mapState([
      "accounts"
    ])
  },
  
  created(){
    if(localWeb3){
      this.localWeb = true;
      console.log(this.localWeb,localWeb3);
      this.$store.dispatch('fetchAccount');
      this.$store.dispatch('fetchNetwork');
    }
  },
  watch:{
    accounts:{
      handler(curVal, oldVal){
        console.log(curVal[0], oldVal[0]);
        console.log(this);
        if(typeof curVal[0] !=='undefined'){
          // console.log(contractInstance.getInfo())
          contractInstance.getInfo(function(error, result){
            if(!error){

              if(!result.email){
                this.$router.push({
                  path:'/register',
                })
              }else{
                this.$router.push({
                  path:'/detail',
                  params:result
                })
              }
            }
            console.log(error);
          });
        }else{
          // console.log(1111);
          // this.$router.push({
          //   path:'/',
          //   params:{
          //     localWeb3:this.localWeb
          //   }
          // })
        }
      },
      deep:true
    },
    
  }
}
</script>

<style>
@import url(./assets/scss/base.scss);
@import url(./assets/scss/icons.scss);
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

</style>
