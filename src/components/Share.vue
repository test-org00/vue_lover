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
    <i  @click="shareEmail" v-if='!hideEmail' class="icon icon-email"></i>
    <i  v-if='!hideEmail' class="icon icon-link"
			v-clipboard:copy="links"
      v-clipboard:success="onCopy"
      v-clipboard:error="onError"
    ></i>

    <el-dialog
		  title=""
		  :visible.sync="buyDialog"
		  width="800px"
		  >
		  <h4 class="dialog-title">Share this vow with your friends</h4>
		  <el-form ref="form" :model="form" label-width="80px">
			  <el-form-item prop="email"
			    label="Email"
			    :rules="[
			      { required: true, message: 'Enter your email', trigger: 'blur' },
			      { type: 'email', message: 'Incorrect email format', trigger: 'blur,change' }
			    ]">
			    <el-input v-model="form.email" placeholder="Enter your email"></el-input>
			  </el-form-item>
			 
			</el-form>
		  <span slot="footer" class="dialog-footer">
		    <!-- <el-button @click="buyDialog = false">Cancle</el-button> -->
		    <el-button type="primary" @click="submitEmail">Share</el-button>
		  </span>
		</el-dialog>
	</div>

</template>

<script>
import req from '@/assets/js/req'
import axios from 'axios'
export default {
  name: 'Share',
  props:['receiverEmail','serialize','hideEmail'],
  data () {
    return {
      curWeb:null,
      curAccount:null,
      links:null,
      buyDialog:false,
      form:{
      	email:''
      }
    }
  },
  created(){
  	this.links = location.origin + "/#/game/certificate?"+this.serialize;
  },
  methods:{
  	shareEmail(){
  		this.buyDialog = true;
  		
  	},
  	submitEmail(){
  		this.$refs['form'].validate(valid => {
  			if(valid){
  					this.buyDialog =false;
			  		req.certTo({
					    "receiverEmail": this.receiverEmail || 'bulabula@qq.com',
					    "certUrl": this.links
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
  			}
  		})
  	},
  	onCopy: function (e) {
    	this.$message({
    				message:'You just copied: ' + e.text,
    				type:'success'
  				})
    },
    onError: function (e) {
    	this.$message({
    				message:'Failed to copy texts',
    				type:'warning'
  				})
    },
  },
 

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.share-relative{
	position:relative;
	.icon{
		position:absolute;
		right:0;
		top:0;
		padding:0 5px;
		font-size:20px;
		cursor:pointer;
		&.icon-email{
			right:44px;
			top:0;
		}
		&.icon-link{
			right:3px;
			top:0;
		}
	}
	.icons-wrap{
	  i{
	    font-size:20px;
	  }
	}
	.el-dialog{
		
		.dialog-title{
			font-size:20px;
			color:#808080;
			line-height:26px;
			font-weight:normal;
			text-align:center;
			margin-bottom:20px;
		}
		.dialog-footer{
			text-align:center;
			display:block;
		}
	}
}
</style>
