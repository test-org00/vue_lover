<template>
  <div>
	  <el-main class="detail-box user-wrap">
	    <div class="user-detail">
	    	<div class="avatar">
	    		<img src="../assets/avatar.png" alt="avatar">
	    	</div>
				<div class="user-info">
					<!-- <h3 class="name" v-if="info">{{info.nickName}}</h3> -->

					<!-- <p v-if="inviteLoverStatus==0" class="lover invite" @click="dialogVisible = true" >Invite you lover</a></p> -->
					<!-- <p v-if="inviteLoverStatus==1" class="lover inviting">{{iInviteSomeone.nickname}} <span>waiting... </span></p> -->
					<!-- <p v-if="inviteLoverStatus==2" class="lover beInvited invitSuccess">{{iInviteSomeone.nickname}}<a @click="breakUpDialog = true" >Break up</a></p> -->

					<!-- <p v-if="beInvitedLoverStatus" class="lover beInvited">{{whoInviteMeObj.nickname}}<a @click="acceptDialog = true">To be accepted</a></p> -->
					<p class="fn">
						<a class='address' 
							v-clipboard:copy="account"
				      v-clipboard:success="onCopy"
				      v-clipboard:error="onError"
						>Copy address</a>
						<!-- <span></span><a class='address'  @click='settings'>Settings</a> -->

					</p>
				</div>
	    </div>
	  </el-main>
    <el-main class="detail-box create-box">
      <el-row type="flex" class="row-bg" justify="left">
        <el-col :span="6"><h3 class="vows">My Irrevocable Vows</h3></el-col>
        <el-col :span="3" class="create-btnwrap">
          <el-button type="primary" @click="openCreatePop">
            <span class="create" >Create</span>
          </el-button>
          
        </el-col>
      </el-row>
    </el-main>
	  <!-- <div class="ask-prompt" v-if="askTogether">
	  	<el-main class="detail-box prompt-bg">
	  		<div class="ask-box">
	  			<h3>Are you still together? </h3>
	  			<p>Please make you love confirm as well.</p>
	  			<button @click="inLoveRemain" class="">yes</button>
	  		</div>
	  	</el-main>
	  </div> -->
    <v-listvows v-if="account" :account='account' :routeName="''"></v-listvows> 
    <!-- <v-create v-if="curPageDetailList.length"></v-create>  -->
   <!--  <el-pagination v-if="curPageDetailList.length"
    layout="prev, pager, next"
    @current-change="handleCurrentChange"
    :page-size="purPage"
    :total="totalPage"> -->
  </el-pagination>
    <!-- 流水 -->
	  <!-- <el-main class="detail-box stream-wrap">
	    <el-row type="flex" justify="space-between">
			  <el-col :span="8"><div class="grid-content bg-purple">
			  	<h3>Total Pol Bought: {{selfAmount}}ETH  <el-button type="primary" @click="buyDialog = true">Buy More</el-button></h3>
			  	<ul v-if="totalTransactionsList" class="stream-ul">
			  		<li class="stream-li" v-for="item in totalTransactionsList">{{item.timeStamp}} {{item.name}} +{{item.value}}ETH</li>
			  	</ul>
          <div class="getMoreBox">
            <el-button type="primary" ><a :href="myStream" target="_blank">My More</a></el-button>
            <el-button type="primary" ><a :href="loverStream" target="_blank">Lover More</a></el-button>
          </div>
			  </div></el-col>
			  <el-col :span="8"><div class="grid-content bg-purple-light">
			  	<h3>Total Pol Donated: {{seltDonated}}ETH  <el-button @click="cashInDialog = true" type="primary">Cash In</el-button></h3>
			  	<ul class="stream-ul">
			  		<li class="stream-li">2018.2.2 name +0.03ETH</li>
			  		<li class="stream-li">2018.2.2 name +0.03ETH</li>
			  		<li class="stream-li">2018.2.2 name +0.03ETH</li>
			  		<li class="stream-li">2018.2.2 name +0.03ETH</li>
			  		<li class="stream-li">2018.2.2 name +0.03ETH</li>
			  		<li class="stream-li">2018.2.2 name +0.03ETH</li>
			  		<li class="stream-li">2018.2.2 name +0.03ETH</li>
			  		<li class="stream-li">2018.2.2 name +0.03ETH</li>
			  		<li class="stream-li">2018.2.2 name +0.03ETH</li>
			  		<li class="stream-li">2018.2.2 name +0.03ETH</li>
			  	</ul>
			  </div></el-col>
			</el-row>
	  </el-main> -->

    <!-- search Box -->
	  <!-- <el-dialog
		  title=""
		  :visible.sync="dialogVisible"
		  width="30%"
		  >
		  <div class="search-box">
		  	<el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" class="demo-ruleForm">
			  	<el-form-item  prop="email">
			  		<el-input class="search-in" v-model="ruleForm2.email" placeholder="forexample@email.com" ></el-input>
			  		<el-button @click="searchLover" class="search-btn" type="primary">Search</el-button>
			  		</el-form-item>
		  	</el-form>
		  </div>
		  <div class="errorMsgbox" v-if="showError">	
				<p class="tip">{{errorMsg}}</p>
		  </div>
		  <div class="loverInfo" v-if="loverInfo">	

				<p class="tip">Email:{{loverInfo.email}}</p>
				<p class="tip">Nick name:{{loverInfo.nickname}}</p>
		  </div>
		  <span slot="footer" class="dialog-footer" v-if="loverInfo">
		    <el-button @click="dialogVisible = false">Cancle</el-button>
		    <el-button type="primary" @click="addLover">Add</el-button>
		  </span>
		</el-dialog> -->
		
		<!-- <el-dialog
		  title=""
		  :visible.sync="acceptDialog"
		  width="30%"
		  >
		  <span>确定要接受 aaa 的邀请吗</span>
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="refuseLover">Refuse</el-button>
		    <el-button type="primary" @click="acceptLover">Yes</el-button>
		  </span>
		</el-dialog> -->
		<!-- <el-dialog
		  title=""
		  :visible.sync="breakUpDialog"
		  width="30%"
		  >
		  <span>确定要与 aaa 的分手吗</span>
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="breakUpDialog = false">Cancle</el-button>
		    <el-button type="primary" @click="breakUpLover">Yes</el-button>
		  </span>
		</el-dialog> -->
		<!-- <el-dialog
		  title=""
		  :visible.sync="buyDialog"
		  width="30%"
		  >
		  <el-form ref="form" :model="form" :rules="rules" label-width="80px">
			  <el-form-item label="金 额" prop="eth">
			    <el-input v-model="form.eth" placeholder="请输入购买金额，单位是ETH"></el-input>
			  </el-form-item>
			 
			</el-form>
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="buyDialog = false">Cancle</el-button>
		    <el-button type="primary" @click="buyEth">Buy</el-button>
		  </span>
		</el-dialog> -->
		<!-- <el-dialog
		  title=""
		  :visible.sync="cashInDialog"
		  width="30%"
		  >
		  <el-form ref="formCash" :model="formCash" :rules="rules" label-width="80px">
			  <el-form-item label="金 额" prop="eth">
			    <el-input v-model="formCash.eth" placeholder="请输入提现金额，单位是ETH"></el-input>
			  </el-form-item>
			 
			</el-form>
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="cashInDialog = false">Cancle</el-button>
		    <el-button type="primary" @click="cashInEth">Cash In</el-button>
		  </span>
		</el-dialog>
 -->
  <!-- create pop -->
    <el-dialog
      title=""
      :visible="createPop"
      width="725px"
      @close="cancleCreatePop"
      >
      <v-createpop :account='account'></v-createpop>
      <!-- <span slot="footer" class="dialog-footer" v-if="loverInfo"> -->
        <!-- <el-button @click="cancleCreatePop">Cancle</el-button> -->
        <!-- <el-button type="primary" @click="openCreatePop">Add</el-button> -->
      <!-- </span> -->
    </el-dialog>

  </div>

</template>

<script>
import _ from 'lodash'
import ListVows from '@/components/ListVows'
import CreatePop from '@/components/CreatePop'
// import VCreate from '@/components/Create'
// import ethApi from '@/ethApi'
// import axios from 'axios'
import { mapState } from "vuex"
// import { contractMain,localWeb3 } from '@/web3Contract'
import utils from '@/assets/js/utils'

export default {
  name: 'Detail',
  props:['account'],
  data() {
  	var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Enter your email'));
        } else {
        	if(!/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value)){
        		callback(new Error('Incorrect email format'));
        	}
          
          callback();
        }
      };
      
    return {


      loverInfo:null,
      loverAddress:null,


      certsList:[],
      page:1,
      purPage:4,
      totalPage:5,

      curPageDetailList:[],
   
    };
  },

  computed:{
  	...mapState([
  		'info','createPop'
  	]),
   
  },
  // beforeRouteEnter (to, from, next) {
  //   next(vm=>{
  //     vm.$store.dispatch('setConfess',false)
  //   })
  // },
  created(){
  	this.$store.dispatch('setConfess',false)
  },
  watch:{
    account(val){

      console.log('account',val)
    },
    // info(val){
    //   console.log('info',val);
    //   this.getCertsIdList(val);
    // }
      

     
  },
  methods: {
    cancleCreatePop(){
      this.$store.dispatch('setCreatePop',false)
    },
    openCreatePop(){
      this.$store.dispatch('setCreatePop',true)

    },
    settings(){
      console.log(this.info);
      this.$router.push({
        name:'settings',
        params:this.info
      })
    },
 
  
  	gotoGuide(val){
  		this.$router.push({
        path:'/game/guide',
      
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
    'v-listvows':ListVows,
    'v-createpop':CreatePop
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
		padding-top:17px;
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
