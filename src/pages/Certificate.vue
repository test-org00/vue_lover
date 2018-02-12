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

export default {
  name: 'Register',
  data() {
  	
    return {
    	oneInfo:null,
      
      
    };
  },
 
  created(){
    console.log(contractInstance)
    var certId = this.$route.query.certId;
    this.oneInfo = {
      nickName:'aaa',
      email:'aaa@qq.com',
      loverNickName:'bbb',
      loverEmail:'bbb@qq.com',
      certTime:"1518343653",
      loveMsg:'dfsdf sdfsdf  sdfsdf sdfsdf '
    }
    // contractInstance.getCertsByCertId(certId,(error, result) =>{
    // 	if(!error){
    // 		this.oneInfo = result
    
    // 	}
    // })
  	

  },
	methods: {
	  
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
