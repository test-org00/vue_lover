<template>
	<el-dialog
	  title=""
	  :visible.sync="mailDialog.open"
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
	</el-dialog> 
</template>

<script>
import html2canvas from 'html2canvas'
import { mapState } from 'vuex'
import req from '@/assets/js/req'
export default {
  name: 'Share',
  // props:['ele'],
  data () {
    return {
      linksType:'',
      // mailDialog:false,
      form:{
      	email:''
      },
      canvasImg:'',

      // btnText:'',
    }
  },
  created(){
  	// this.btnText = this.shareType
  	// this.linksType = this.links + '&vowtype=' + this.shareType;
  	// console.log(this.ele);
  },
  computed:{
  	// btnText(){
  	// 	if(this.btnWord){
  	// 		return this.btnWord;
  	// 	}
  	// 	return this.ucfirst(this.shareType);
  	// },
  	...mapState(['mailDialog'])
  },
  methods:{
  	// shareHandler(arg){
  	// 	// console.log(shareType, command);
  	// 	this['share'+arg[1]](arg[1]);
  	// 	this.shareType = arg[0]
  	// },
  	// shareFacebook(){
			// this.$refs.sharing.querySelector('.icon-facebook').click();
  	// },
  	// shareTwitter(){
			// this.$refs.sharing.querySelector('.icon-twitter').click();
  	// },
  	// shareEmail(){
  	// 	this.mailDialog = true;
  	// 	if(this.ele){

	  // 		html2canvas(this.ele,{
	  // 		}).then((canvas) => {
	  //         this.canvasImg = canvas.toDataURL("image/png");
	  //     });
  	// 	}
  	// },
  	submitEmail(){
  		this.$refs['form'].validate(valid => {
  			if(valid){
  					this.$store.dispatch('setMailDialog',{
  						open:false,
  						ele:null,
  					});
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
  // 	ucfirst(str) {
		// 	var str = str.toLowerCase();
		// 	str = str.replace(/\b\w+\b/g, function(word){
		// 	  return word.substring(0,1).toUpperCase()+word.substring(1);
		// 	});
		// 	return str; 
		// },
  // 	handleDropdown(command){
  // 		if(command !== 'Copy'){
  // 			if(command == 'Email'){
  // 				this.$emit('shares',command);

  // 			}else{

  // 				this['share'+command]();
  // 			}
  // 		}
  // 	},
  	
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
  watch:{
  	// mailDialog(){
  	// 	this.mailDialog = true;
  	// 	if(this.ele){

	  // 		html2canvas(this.ele,{
	  // 		}).then((canvas) => {
	  //         this.canvasImg = canvas.toDataURL("image/png");
	  //     });
  	// 	}
  	// },
  	mailDialog:{
      handler(val, oldVal) {
      	console.log(val);
        if(val.open && val.ele){

		  		// html2canvas(val.ele,{
		  		// }).then((canvas) => {
		          this.canvasImg = val.ele;
		      // });
        }
      },
      deep: true
    },
  }
 

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.share-relative{
	position:relative;
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
}
</style>
