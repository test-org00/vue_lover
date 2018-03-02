<template>
	<div>
		
	  <v-vows  :item='oneInfo'></v-vows> 
    <!-- <v-create :account="account"></v-create> -->
	</div>
</template>

<script>
// import _ from 'lodash'
import Vows from "@/components/Vows"
import { contractInstance } from '@/web3Contract'
import VCreate from '@/components/Create'
import utils from '@/assets/js/utils'

export default {
  name: 'Certificate',
  props:['account'],
  data() {
  	
    return {
    	oneInfo:{},
      email:''
      
    };
  },
 
  created(){
    // var certId = this.$route.query.certId;
    this.oneInfo.certId = this.$route.query.certId;
    this.oneInfo.nickName = this.$route.query.nickName;
    this.oneInfo.email = this.$route.query.email;
    this.oneInfo.loverNickName = this.$route.query.loverNickName;
    this.oneInfo.loverEmail = this.$route.query.loverEmail;
    this.oneInfo.certTime = this.$route.query.certTime;
    this.oneInfo.loveMsg = this.$route.query.loveMsg;
    this.oneInfo.ID = this.$route.query.ID;
    // console.log(this.$route.params.email)
    // this.oneInfo = {
    //   nickName:'aaa',
    //   email:'aaa@qq.com',
    //   loverNickName:'bbb',
    //   loverEmail:'bbb@qq.com',
    //   certTime:"1518343653",
    //   loveMsg:'dfsdf sdfsdf  sdfsdf sdfsdf '
    // }
    // if(certId){
   
    // }else if(this.email){
      // utils.getCertsIdsByQuery(this.email).then(res=>{
        // this.getCertsByCertId(utils.decode(res[0]));
      // })
    // }

    // contractInstance.getCertsByCertId(certId,(error, result) =>{
    // 	if(!error){
    // 		this.oneInfo = result
    
    // 	}
    // })
  	

  },
	methods: {
	  // getCertsByCertId(certId){
   //    utils.getCertsByCertId(certId).then(res=>{
   //      var arr=['nickName','email','loverNickName','loverEmail','certTime','loveMsg'];
   //      var obj = this.formatRes(arr,res);
   //      this.oneInfo = obj
   //    })
   //  }
 	},
	components:{
		'v-vows':Vows,
    'v-create':VCreate
	},
	
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
