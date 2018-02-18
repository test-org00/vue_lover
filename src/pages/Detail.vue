<template>
  <div>
	  <el-main class="detail-box user-wrap">
	    <div class="user-detail">
	    	<div class="avatar">
	    		<img src="../assets/cryptolove_07.png" alt="avatar">
	    	</div>
				<div class="user-info">
					<h3 class="name" v-if="userInfo">{{userInfo.nickname}}</h3>

					<!-- <p v-if="inviteLoverStatus==0" class="lover invite" @click="dialogVisible = true" >Invite you lover</a></p> -->
					<!-- <p v-if="inviteLoverStatus==1" class="lover inviting">{{iInviteSomeone.nickname}} <span>waiting... </span></p> -->
					<!-- <p v-if="inviteLoverStatus==2" class="lover beInvited invitSuccess">{{iInviteSomeone.nickname}}<a @click="breakUpDialog = true" >Break up</a></p> -->

					<!-- <p v-if="beInvitedLoverStatus" class="lover beInvited">{{whoInviteMeObj.nickname}}<a @click="acceptDialog = true">To be accepted</a></p> -->
					<p class="fn">
						<a class='address' 
							v-clipboard:copy="myAddress"
				      v-clipboard:success="onCopy"
				      v-clipboard:error="onError"
						>Copy address</a><span></span><a class='address'  @click='settings'>Settings</a>
					</p>
				</div>
	    </div>
	  </el-main>
    <el-main class="detail-box create-box">
      <el-row type="flex" class="row-bg" justify="space-between">
        <el-col :span="8"><h3 class="vows">My Indestructible Vows</h3></el-col>
        <el-col :span="3" class="create-btnwrap">
          <el-button type="primary" >
            <span class="create" @click="createTo">Create</span>
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
    <v-vows v-for="(item,index) in curPageDetailList" :item="item" :index="index"></v-vows> 
    <v-create></v-create> 
    <el-pagination
    layout="prev, pager, next"
    @current-change="handleCurrentChange"
    :total="totalPage">
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

  </div>

</template>

<script>
import _ from 'lodash'
import Vows from '@/components/Vows'
import VCreate from '@/components/Create'
// import ethApi from '@/ethApi'
import axios from 'axios'
import { mapState } from "vuex"
import { contractInstance,localWeb3 } from '@/web3Contract'
import useCon from '@/assets/js/utils'

export default {
  name: 'Detail',
  data() {
  	var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Enter your email'));
        } else {
        	if(!/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value)){
        		callback(new Error('Incorrect email format'));
        	}
          // if (this.ruleForm2.checkPass !== '') {
          //   this.$refs.ruleForm2.validateField('checkPass');
          // }
          callback();
        }
      };
      
    // var validateEth = (rule, value, callback) => {
    //   if (value === '') {
    //     callback(new Error('请输入购买金额'));
    //   } else {
    //   	if(!/^\d+(\.\d+)?$/.test(value)){
    //   		callback(new Error('请输入数字'));
      	// }
        // if (this.ruleForm2.checkPass !== '') {
        //   this.$refs.ruleForm2.validateField('checkPass');
        // }
      //   callback();
      // }
    // };
    return {

    	// inviteLoverStatus:0, // 0 no lover 允许邀请, 1 邀请aaa中，2 已恋爱 
    	// beInvitedLoverStatus:0, // 0 没人邀请我，1 要请我 to be accepted.

      // iInviteSomeone:null,
      // whoInviteMeObj:null,

      // selfAmount:0,
      // coupleAccount:0,// couple保证金
      // seltDonated:0,//分红

      // myStream:null,
      // loverStream:null,

      // domain:'https://etherscan.io/address/',

      // totalTransactionsList:null,

      // breakUpDialog:false,
			// cashInDialog:false,
      // acceptDialog:false,
      // buyDialog:false,
      // dialogVisible:false,
      // showError:false,

      // wornTogther:false,
      // askTogether:false,
      
			myAddress:"0x2626D77df65989C90D85a88d03Bd46A11Dc7321E",
      userInfo:{},
      // userInfo:{
      	// email:'aaa@qq.com',
      	// nickname:'aaa',
       //  address:'0x2626D77df65989C90D85a88d03Bd46A11Dc7321E',

        /*account;     // 分红金额
        deposit;     // 保证金
        bind_status; // 成员状态

        contractFrom; // 向自己发起起恋爱请求的成员的地址，当有人向自己发起请求时，此域有值，一旦接受或者拒绝，此域清空
        contractTo;   // 自己发起恋爱请求的对方的地址，

        // 恋爱请求状态，在自己发起请求对方还没有接受或者拒绝时，自己此域的状态为WAIT_FOR_RESPONSE,对方为RECEIVED，
        // 如果对方接受了请求，自己和对方此域都为ACCEPTED，如果对方拒绝，自己和对方此域都为REJECTED。
        inLoveRequestStatus;

        loverAddr;         // 恋人钱包地址

        // 恋爱对编号，
        coupleId;

        registTime;  // 成员注册时间
        depositTime; // 成员的最后一次充值保证金时间
        inLoveTime;  // 成员恋爱正式开始的时间
        splitTime;   // 成员分手时间*/
      // },

      loverInfo:null,
      loverAddress:null,


      certsList:[],
      curPageList:[],
      page:null,
      purPage:5,
      totalPage:0,

      curPageDetailList:{},
      // errorMsg:'Not found,please make sure you input the right email address or nickname.',
      
      // formCash:{
      // 	eth:''
      // },

      // form:{
      // 	eth:''
      // },
      // rules:{
      // 	eth:[
      // 		{ required:true, validator: validateEth, trigger: 'change' }
      // 	]
      // },

      // ruleForm2:{
      // 	email:'',
      // },
      // rules2:{
      // 	email: [
      //     { required:true, validator: validatePass, trigger: 'change' }
      //   ]
      // }
    };
  },

  computed:{
  	...mapState([
  		'accounts'
  	]),
    // myStream(){
    //   return this.domain + this.myAddress
    // },
    // loverStream(){
    //   return this.domain + this.myAddress
    // }

  },

  created(){

   console.log(this.$route.params);
    // if(!this.$route.params){
    //   this.$route.push({
    //     path:'/'
    //   })
    // }  
    
    this.userInfo=this.$route.params;
    this.page = 1;
    // 获取证书id列表

    if(this.userInfo.email){

      this.getCertsIdList();
    }else{
      // this.
    }


    // this.curPageDetailList=[{
    //   nickName:'aaa',
    //   email:'aaa@qq.com',
    //   loverNickName:'bbb',
    //   loverEmail:'bbb@qq.com',
    //   certTime:"1518343653",
    //   loveMsg:'dfsdf sdfsdf  sdfsdf sdfsdf '
    // },{
    //   nickName:'ccc',
    //   email:'ccc@qq.com',
    //   loverNickName:'ddd',
    //   loverEmail:'ddd@qq.com',
    //   certTime:"1518343653",
    //   loveMsg:'dfsdf sdfsdf cccc sdfsdf sdfsdf '
    // }]

    // this.handleCurrentChange()
  	// this.$store.dispatch('fetchNetwork');

  	// this.askTogether = this.biggerThanMonth(1) // 大于一个月提示要不要继续together；
  	// this.wornTogther = this.biggerThanMonth(2) // 大于2个月警告要不要继续together；

		// this.inviteLoverStatus = 0 // 0 no lover 允许邀请, 1 邀请aaa中，2 已恋爱 
  //   this.beInvitedLoverStatus = 1;

    this.myAddress = this.$store.state.accounts[0]
  	// 大于4个月，分手
  	// if(this.biggerThanMonth(4)){

  	// 	this.byebyeByExpires()
  	// }

    // 我邀请的恋人
    // this.inviteLover();

    // 邀请我的恋人
    // this.whoInviteMe();
  	// 初始couple保证金
  	// this.initCoupleAccount();

  	// 初始流水
  	// this.initTransactions();
    

  	
  },
  watch:{
    accounts:{
      handler(cur, old){
        this.account = cur[0];
        if(!this.account){
          this.$router.push({
            path:'/game/guide',

          })
        }
      },
      deep:true
    }

     
  },
  methods: {
    settings(){
      console.log(this.userInfo);
      this.$router.push({
        name:'settings',
        params:this.userInfo
      })
    },
    createTo(){
      this.$router.push({
        name:'createCert',
        params:this.userInfo
      })
    },
    updateList(list){
      var promiseArr = [];
      for(var i = 0; i< list.length; i++){
        promiseArr.push(new Promise((resolve,reject) => {
          contractInstance.getCertsByCertId( useCon.decode(list[i]),(error, result)=>{
            if(!error){
              var arr = ['nickName','email','ID','certNumber'];
              var resultObj = useCon.formatRes(arr,result);
              resolve(resultObj)// 如果不是json 处理成json
            }else{
              reject(error)
            }
          })
        }))
      }

      Promise.all(promiseArr).then(res => {
        this.curPageDetailList = res;
      })
    },
    handleCurrentChange(num){
      var start = (num-1)*this.purPage-1;
      var end = start + this.purPage;
      this.curPageList = this.certsList.slice(start, end);

      this.updateList(this.curPageList);
    },
    getCertsIdList(){

      contractInstance.getCertsIdsByQuery(this.userInfo.email, (error, result) => {
        this.certsList = result;

        this.totalPage = result.length/this.purPage
        // this.totalPage = 50;
        this.handleCurrentChange()
      })
    },
  
  	gotoGuide(val){
  		this.$router.push({
        path:'/game/guide',
        // params:{
        // 	network:val,
        // }
      })
  	},


  	weiToEth(value){
  		return localWeb3.fromWei(value,'ether');
  		 
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
