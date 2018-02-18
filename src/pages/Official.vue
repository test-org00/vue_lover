<template>
  <div class="app" >
    <v-head :localWeb="localWeb" :account="account" ></v-head>
    <div class="content-body"><router-view></router-view></div>
    <v-foot></v-foot>
  </div>
</template>

<script>
import { localWeb3,contractInstance } from '@/web3Contract';
import { mapState } from 'vuex';
import VHead from '@/components/HeadOfficial' 
import VFoot from '@/components/FootOfficial' 
import useCon from '@/assets/js/utils'
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
        // console.log(curVal[0], oldVal[0]);
        if(typeof curVal =="object"){

          this.account = curVal[0]
        }
        console.log(this);
        // if(typeof curVal[0] !=='undefined'){
          // console.log(contractInstance.getMemberInfo())
          // useCon.getMemberInfo().then(res=>{
          //   console.log('getMemberInfo')
          //   console.log(res)
          //   var arr = ['nickName','email','ID','certNumber'];
          //   // console.log(res,web3.toAscii(res[1]));
          //   var resultObj = useCon.formatRes(arr,res);
          //   if(!error){

          //     if(!resultObj.email.length){
          //       this.$router.push({
          //         path:'/register',
          //       })
          //     }else{
                
          //       this.$router.push({
          //         path:'/detail',
          //         params:result
          //       })
          //     }
          //   }
        //     console.log(error);
        //   });
        // }else{
          // console.log(1111);
          // this.$router.push({
          //   path:'/',
          //   params:{
          //     localWeb3:this.localWeb
          //   }
          // })
        // }
      },
      deep:true
    },
    
  }
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
