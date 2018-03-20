<template>
	<el-dropdown @command="handleDropdown">
	  <el-button type="primary" >
	    {{btnText}}<i class="el-icon-arrow-down el-icon--right"></i>
	  </el-button>
	  <el-dropdown-menu slot="dropdown">
	    <el-dropdown-item command="Facebook">Facebook</el-dropdown-item>
	    <el-dropdown-item command="Twitter">Twitter</el-dropdown-item>
	    <el-dropdown-item command="Email">Mail</el-dropdown-item>
	    <el-dropdown-item
				v-clipboard:copy="linksType"
	      v-clipboard:success="onCopy"
	      v-clipboard:error="onError"
	    >Permalink</el-dropdown-item>
	  </el-dropdown-menu>
	</el-dropdown>
</template>

<script>
import html2canvas from 'html2canvas'

export default {
  name: 'Share',
  props:['shareType','links'],
  data () {
    return {
      linksType:'',
      // btnText:'',
    }
  },
  created(){
  	// this.btnText = this.shareType
  	this.linksType = this.links + '&vowtype=' + this.shareType;
  },
  computed:{
  	btnText(){
  		return this.ucfirst(this.shareType);
  	}
  },
  methods:{
  	ucfirst(str) {
			var str = str.toLowerCase();
			str = str.replace(/\b\w+\b/g, function(word){
			  return word.substring(0,1).toUpperCase()+word.substring(1);
			});
			return str; 
		},
  	handleDropdown(command){
  		this.$emit('shares',[this.shareType,command]);
  		// this['share'+command]();
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
