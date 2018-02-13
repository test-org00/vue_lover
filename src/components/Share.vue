<template>
	<div class="share-relative"> 
		
	  <social-sharing url="https://vuejs.org/" inline-template>
	              
	    <div class="icons-wrap">
	      <network network="facebook">
	        <i style="padding:0 5px;font-size:20px; cursor:pointer;" class="icon-facebook"></i> 
	      </network>
	      
	     <!--  <network network="linkedin">
	        <i class="fa fa-linkedin"></i> LinkedIn
	      </network>
	      <network network="pinterest">
	        <i class="fa fa-pinterest"></i> Pinterest
	      </network>
	      <network network="reddit">
	        <i class="fa fa-reddit"></i> Reddit
	      </network> -->
	      <network network="twitter">
	        <i style="padding:0 5px;font-size:20px;cursor:pointer;" class="icon-twitter"></i>
	      </network>
	      <!-- <network network="googleplus">
	        <i style="padding:0 5px;font-size:20px;cursor:pointer;" class="icon-google"></i>
	      </network> -->
	      <!-- <network network="vk">
	        <i class="fa fa-vk"></i> VKontakte
	      </network>
	      <network network="weibo">
	        <i class="fa fa-weibo"></i> Weibo
	      </network> 
	      <network network="whatsapp">
	        <i class="fa fa-whatsapp"></i> Whatsapp
	      </network> -->
			</div>
	  </social-sharing>  
	      <i style="" @click="shareEmail" class="icon-email"></i>
	</div>

</template>

<script>

import axios from 'axios'
export default {
  name: 'Share',
  props:['receiverEmail','certId'],
  data () {
    return {
      curWeb:null,
      curAccount:null,
      // localWeb3:false,
    }
  },
  created(){

  },
  methods:{
  	shareEmail(){
  		axios({
  			url:'/v1/foreverlovechain/email',
  			method: 'post',
			  data: {
			    "receiver": this.receiverEmail || 'bulabula@qq.com',
			    "url": location.origin + "/#/certificate?cerId="+ this.certId
			  },
  		}).then(res =>{
  			this.$message({
  				message:'Send email successfully',
  				type:'success'
  			})
  		}).catch(err =>{
  			this.$message({
  				message:'Send email failed',
  				type:'warning'
  			})
  		})
  	},
  },
 

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.share-relative{
	position:relative;
	.icon-email{
		position:absolute;
		right:0;
		top:0;
		padding:0 5px;
		font-size:20px;
		cursor:pointer;
	}
	.icons-wrap{
	  i{
	    font-size:20px;
	  }
	}
}
</style>
