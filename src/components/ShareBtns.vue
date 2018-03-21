<template>
	<span style="display:inline-block">
		
		<el-dropdown @command="handleDropdown">
		  <el-button type="primary"  :class='bannerClass'>
		    {{btnText}}<i class="el-icon-arrow-down el-icon--right"></i>
		  </el-button>
		  <el-dropdown-menu slot="dropdown">
		    <el-dropdown-item command="Facebook">Facebook</el-dropdown-item>
		    <el-dropdown-item command="Twitter">Twitter</el-dropdown-item>
		    <el-dropdown-item command="Email">Mail</el-dropdown-item>
		    <el-dropdown-item	command="Copy"
					v-clipboard:copy="linksType"
		      v-clipboard:success="onCopy"
		      v-clipboard:error="onError"
		    >Permalink</el-dropdown-item>
		  </el-dropdown-menu>
		</el-dropdown>
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
		<!-- <el-dialog
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
		    <el-button type="primary" @click="submitEmail">Share</el-button>
		  </span>
		</el-dialog> --> 
	</span>
</template>

<script>
import html2canvas from 'html2canvas'

export default {
  name: 'Share',
  props:['shareType','links','btnWord','ele','bannerClass'],
  data () {
    return {
      linksType:'',
      // buyDialog:false,
      form:{
      	email:''
      },

      // canvasImg:'',

      // btnText:'',
    }
  },
  created(){
  	// this.btnText = this.shareType
  	this.linksType = this.links + '&vowtype=' + this.shareType;
  	console.log(this.ele);
  },
  computed:{
  	btnText(){
  		if(this.btnWord){
  			return this.btnWord;
  		}
  		return this.ucfirst(this.shareType);
  	}
  },
  methods:{
  	// shareHandler(arg){
  	// 	// console.log(shareType, command);
  	// 	this['share'+arg[1]](arg[1]);
  	// 	this.shareType = arg[0]
  	// },
  	shareFacebook(){
			this.$refs.sharing.querySelector('.icon-facebook').click();
  	},
  	shareTwitter(){
			this.$refs.sharing.querySelector('.icon-twitter').click();
  	},
  	// shareEmail(){
  	// 	this.buyDialog = true;
  	// 	if(this.ele){

	  // 		html2canvas(this.ele,{
	  // 		}).then((canvas) => {
	  //         this.canvasImg = canvas.toDataURL("image/png");
	  //     });
  	// 	}
  	// },
  	// submitEmail(){
  	// 	this.$refs['form'].validate(valid => {
  	// 		if(valid){
  	// 				this.buyDialog =false;
			//   		req.certTo({
			// 		    "receiverEmail": this.receiverEmail || 'bulabula@qq.com',
			// 		    "certUrl": this.links + '&shareType=' + this.shareType
			// 		  }).then(res =>{
			//   			this.$message({
			//   				message:'Send email successfully',
			//   				type:'success'
			//   			})
			//   		}).catch(err =>{
			//   			this.$message({
			//   				message:'Send email failed',
			//   				type:'warning'
			//   			})
			//   		})
  	// 		}
  	// 	})
  	// },
  	ucfirst(str) {
			var str = str.toLowerCase();
			str = str.replace(/\b\w+\b/g, function(word){
			  return word.substring(0,1).toUpperCase()+word.substring(1);
			});
			return str; 
		},
  	handleDropdown(command){
  		if(command !== 'Copy'){
  			if(command == 'Email'){
  				// if(this.$route.name !== 'index'){
  					// this.$emit('shares',command);
  				// }else{
  					if(this.ele){
	  					html2canvas( this.ele || null ).then((canvas) => {
	  						this.$store.dispatch('setMailDialog',{
	  							open:true,
	  							ele:canvas.toDataURL("image/png")
	  						});
				          
				      })
  						
  					}else{

			      	this.$store.dispatch('setMailDialog',{
  							open:true,
  							ele:null
  						});
  					}
			     
  					
  				// }

  			}else{

  				this['share'+command]();
  			}
  		}
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

	.banner{

		border-color:#931d26;
		background-color:#931d26;
	}
	.el-button--primary:focus, .el-button--primary:hover{
		border-color:rgb(239, 112, 162);
		background-color:rgb(239, 112, 162);
	}
	.el-dropdown {
    vertical-align: top;
    .el-button{
    	min-width:130px;
    	margin:0 20px;
    }
  }
  .el-dropdown + .el-dropdown {
    margin-left: 15px;
  }
  .el-icon-arrow-down {
    font-size: 12px;
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
</style>
