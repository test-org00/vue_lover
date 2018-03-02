<template>
  <div v-loading.fullscreen.lock="loading">
    <v-vows v-for="(item,index) in curPageDetailList" :item="item" :index="index"></v-vows> 
    <v-create v-if="!(routeName =='list')"></v-create> 
    <el-pagination v-if="totalPage > purPage"
	    layout="prev, pager, next"
	    @current-change="handleCurrentChange"
	    :page-size="purPage"
	    :current-page="curpage"
	    :total="totalPage">
	  </el-pagination>
  </div>

</template>

<script>
import Vows from '@/components/Vows'
import VCreate from '@/components/Create'
// import ethApi from '@/ethApi'
import { mapState } from "vuex"
import { contractInstance,localWeb3 } from '@/web3Contract'
import utils from '@/assets/js/utils'

export default {
  name: 'Detail',
  props:['email','routeName'],
  data() {
    return {
    	loading:false,

      loverInfo:null,
      loverAddress:null,

      certsList:[],
      curPageList:[],
      page:null,
      purPage:10,
      totalPage:5,
      curpage:1,
      curPageDetailList:[],
    };
  },

  computed:{
  	...mapState([
  		'info','reloadVows'
  	]),
  },

  created(){
  	console.log(!(this.routeName =='list'))
    
    // this.info=this.$store.state.info;
    this.page = 1;
    // 获取证书id列表
    // console.log('email',this.email);
    // console.log(/\w/.test(this.email))
    if (this.email && !utils.isNothing(this.email)) {

			this.getCertsIdList(this.email);
    }
    
    // if(this.$store.state.info){ 
      // this.$store.state.info;
      // console.log(this.email);
      // this.getCertsIdList(this.email)
    // }
  },
  watch:{
    // account(val){

    //   console.log('account',val)
    // },
    reloadVows(val){
    	this.getCertsIdList(val);
    },
    email(val){
      console.log('email',val);
      this.getCertsIdList(val);
    }
  },
  methods: {
    updateList(list){
      // debugger;
      var promiseArr = [];
      for(var i = 0; i< list.length; i++){
        promiseArr.push(
          utils.getCertsByCertId( list[i])
        )
      }

      Promise.all(promiseArr).then(res => {
      	console.log(res);
      	this.loading=false;
        this.curPageDetailList = res;
      })
    },
    handleCurrentChange(num){
    	this.curpage = num;
      var start = num > 1 ? (num-1)*this.purPage : 0;
      var end = start + this.purPage;
      console.log(this.certsList,start,end);
      this.curPageList = this.certsList.slice(start, end);
      console.log(this.curPageList);

      this.updateList(this.curPageList);
    },
    getCertsIdList(email){
      // debugger;
      this.curpage = 1;
      if(email && !utils.isNothing(email)){
	      this.loading = true;
	      contractInstance.getCertsIdsByQuery(email, (error, result) => {
	        console.log('result:',result[0]==0);
	        // console.log(web3.eth.getBlock(result))
	        if(result[0]==0){
	        	// this.$message({
	        	// 	message:'There is no vow posted by '+email
	        	// })
	        	this.$emit('novows');
	        	this.loading = false;
	        	return;
	        }
	        this.certsList = result.reverse();

	        this.totalPage = result.length
	        // this.totalPage = 50;
	        console.log(this.totalPage);
	        this.handleCurrentChange(1)
	      })
      }
    },
    
  },
  components:{
    'v-vows':Vows,
    'v-create':VCreate
  }
 
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.search-box{
	// display:flex;

	.search-in{
		// flex:1 0 auto;
		width: 70%;
		vertical-align:middle;
		.el-input__inner:focus{
			border-color:#eb4c8b
		}
	}
	.search-btn{
		// flex: 0 0 auto;
		margin-left:15px;
		border:none;
	}
}
.dialog-footer{
	width:100%;
	display:inline-block;
	text-align:center;
	.el-button{
		width:140px;
	}

}
.detail-box{
	padding:0;
	margin: 0 auto ;
  max-width: 1200px;
}
.user-wrap{
	margin-top:76px;
	padding-bottom:60px;
}
.el-dialog{
	.tip{
		font-size:16px;
		line-height:26px;
	}
}
.stream-wrap{
	margin-top:60px;
}
.create-box{
  padding-bottom:20px;
  .row-bg{
    .vows{
      font-size:30px;
      line-height:40px;
      color:#41210a;
    }
    .create-btnwrap{
      text-align:right;
      .create{
        text-decoration: none;
        color:#fff;
      }
    }
  }
}
.user-detail{
	display:flex;
	.avatar{
		flex:0 0 auto;
		width: 85px;
		border-radius: 50%;
		img{
			width:100%;

		}

	}
	.user-info{
		padding-left:10px;
		text-align:left;
		h3{
			font-size:16px;
			line-height:32px;
			color:#4d4d4d;
			margin:0;

		}
		p{
	    font-size: 18px;
    	color: #82817d;
    	margin:0;
    	height:22px;
    	padding: 9px 0;
    	&.lover{
	    	background:url(../assets/cryptolove_10.png) left center no-repeat;
    		padding-left:36px;
    		color:#82817d;
	    	background-size:24px;
    		&.invite{
    			color:#0071bc;

	    		&:hover{
						text-decoration:underline;
						cursor:pointer;
					}
    		}
    		&.beInvited{
    			a{
    				cursor:pointer;
						color:#0071bc;
						padding-left:15px;
    				text-decoration:none;
    				&:hover{
    					text-decoration:underline;

    				}
    			}

    		}
    	}
    	&.fn{
	    	.address{
			    position: relative;
			    color: #82817d;
			    padding-bottom: 2px;
			    border-bottom: 2px solid #f3f1ee;
			    cursor: pointer;
			    transition: border-bottom .25s,color .25s;
			    text-decoration: none;
			    font-size:14px;
			    vertical-align:middle;
			    &:hover{
			    	color:#2a2825;
			    	border-color:#82817d;
			    }
	    	}
	    	span{
					vertical-align:middle;
					height:22px;
					margin:0 10px;
					width:1px;
					display:inline-block;
					background-color:#ccc;
	    	}
    	}
		}
	}	
}
.el-pagination{
  text-align:center;
  padding:50px 0;
}
.grid-content{
	text-align:left;
	h3{
		.el-button{
			margin-left:26px;
			background-color:#eb4c8b;
			border: none;
		}
	}
	.stream-ul{
		padding-left:30px;
		list-style:none;
		margin-top:36px;
		.stream-li{
			padding-left:26px;
			color:#82817d;
			height:40px;
			line-height:40px;
			font-size:14px;
			border-left:1px solid #ccc;
			position:relative;
			&::before{
				content:'·';
				position:absolute;
				height:36px;;
				font-size:16px;
				line-height:36px;
				left:-28px;

			}
		}
	}
}
</style>
