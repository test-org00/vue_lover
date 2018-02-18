<template>
	<div>
		
	  <v-vows  :item='oneInfo'></v-vows> 
    <v-create></v-create>
	</div>
</template>

<script>
import _ from 'lodash'
import Vows from "@/components/Vows"
import { contractInstance } from '@/web3Contract'
import VCreate from '@/components/Create'
import useCon from '@/assets/js/utils'

export default {
  name: 'Certificate',
  data() {
  	
    return {
    	oneInfo:{},
      email:''
      
    };
  },
 
  created(){
    var certId = this.$route.query.certId;
    this.email = this.$route.params.email;
    console.log(this.$route.params.email)
    // this.oneInfo = {
    //   nickName:'aaa',
    //   email:'aaa@qq.com',
    //   loverNickName:'bbb',
    //   loverEmail:'bbb@qq.com',
    //   certTime:"1518343653",
    //   loveMsg:'dfsdf sdfsdf  sdfsdf sdfsdf '
    // }
    if(certId){
      this.getCertsByCertId(certId);
    }else if(this.email){
      useCon.getCertsIdsByQuery(this.email).then(res=>{
        this.getCertsByCertId(useCon.decode(res[0]));
      })
    }

    // contractInstance.getCertsByCertId(certId,(error, result) =>{
    // 	if(!error){
    // 		this.oneInfo = result
    
    // 	}
    // })
  	

  },
	methods: {
	  getCertsByCertId(certId){
      useCon.getCertsByCertId(certId).then(res=>{
        var arr=['nickName','email','loverNickName','loverEmail','certTime','loveMsg'];
        var obj = this.formatRes(arr,res);
        this.oneInfo = obj
      })
    }
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
