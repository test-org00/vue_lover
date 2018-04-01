<template>
	<div>
		<div class="cert-head">
      <h2 v-if='oneInfo.vowtype=="challenge"' class="cert-h">You been challenged by {{oneInfo.nickName}} &amp; {{oneInfo.loverNickName}}!</h2>
      <h2 v-else class="cert-h">This is shared by {{oneInfo.nickName}} &amp; {{oneInfo.loverNickName}}</h2>
      <p class="cert-h-sub">Here is their vow on Forever Love Chain</p>
      <v-vows  :item='oneInfo'></v-vows> 
    </div>
    <v-banner></v-banner>
	</div>
</template>

<script>
// import _ from 'lodash'
import Vows from "@/components/Vows"
import VCreate from '@/components/Create'
import vBanner from '@/components/banner'
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

    this.oneInfo.vowtype = this.$route.query.vowtype;
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

    // contractMain.getCertsByCertId(certId,(error, result) =>{
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
    'v-create':VCreate,
    'v-banner':vBanner,

	},
	
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.cert-head{
  width:1200px;
  margin:0 auto;
  padding-bottom:40px;
  .cert-h{
    padding-top:40px;
    line-height:80px;
    font-size:32px;
    text-align:center;
    color:#e84d4c;
    font-weight:300;
  }
  .cert-h-sub{
    line-height:40px;
    font-size:14px;
    color:#e84d4c;
    text-align:center;
    padding-bottom:20px;


  }
}
</style>
