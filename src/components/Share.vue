<template>
	<div class="share-relative" @click> 
		<div class="share-btns" >
			<v-share-btns :links="links" @shares="shareHandler" shareType="share"></v-share-btns>
			<v-share-btns :links="links" @shares="shareHandler" shareType="challenge"></v-share-btns>
		</div>
		<div ref='sharing'>
		  <social-sharing  v-show='false' 
		  	:url="links + '&shareType=' +shareType"
				title=""
				description=""
				quote="facebook only"
		  	inline-template>
		    <div  class="icons-wrap">
		      <network network="facebook">
		        <i ref='facebook' style="padding:0 5px;font-size:20px; cursor:pointer;" class="icon-facebook"></i> 
		      </network>
		      <network network="twitter">
		        <i ref='twitter' style="padding:0 5px;font-size:20px;cursor:pointer;" class="icon-twitter"></i>
		      </network>
				</div>
		  </social-sharing>  
		</div>
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
			<div ref='canvas'>
				<img :src="canvasImg" width="100%" alt="">
			</div>
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
import VShareBtns from '@/components/ShareBtns'

import html2canvas from 'html2canvas'

export default {
  name: 'Share',
  props:['receiverEmail','serialize','hideEmail','ele'],
  data () {
    return {
      curWeb:null,
      curAccount:null,
      links:null,
      buyDialog:false,
      form:{
      	email:''
      },
      canvasImg:null,
      shareType:'',
    }
  },
  created(){
  	this.links = location.origin + "/#/game/certificate?"+this.serialize;
  },
  methods:{
  	shareHandler(arg){
  		// console.log(shareType, command);
  		this['share'+arg[1]](arg[1]);
  		this.shareType = arg[0]
  	},
  	shareFacebook(shareType){
			this.$refs.sharing.querySelector('.icon-facebook').click();
  	},
  	shareTwitter(shareType){
			this.$refs.sharing.querySelector('.icon-twitter').click();
  	},
  	shareEmail(){
  		this.buyDialog = true;
  		html2canvas(this.ele,{
  		}).then((canvas) => {
          this.canvasImg = canvas.toDataURL("image/png");
      });
  	},
  	submitEmail(){
  		this.$refs['form'].validate(valid => {
  			if(valid){
  					this.buyDialog =false;
			  		req.certTo({
					    "receiverEmail": this.receiverEmail || 'bulabula@qq.com',
					    "certUrl": this.links + '&shareType=' + this.shareType
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
  components:{
  	'v-share-btns':VShareBtns
  }
 

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.share-relative{
	position:relative;
	.el-dropdown {
    vertical-align: top;
  }
  .el-dropdown + .el-dropdown {
    margin-left: 15px;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .share-btns{
  	text-align:center;
  }
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
