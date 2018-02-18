<template>
		
	  <div class="ask-prompt" v-if='item.email' :class="evenClass" >
	  	<el-main class="detail-box prompt-bg">
	  		<div class="ask-box">
	  			<h3>{{item.nickName}} to {{item.loverNickName}}</h3>
	  			<p class="arrow"></p>
	  				<p class="time">{{timeFormat}}</p>
	  			<div class="msg-box">
	  				<p class="msg">{{item.loveMsg}}</p>
	  			</div>
					<div class="emails">
						
						<p class="emailbox">
							{{item.nickName}} email:{{item.email}} ID:{{item.ID}}
						</p>
						<p class="emailbox">{{item.loverNickName}} email:{{item.loverEmail}}</p>
					</div>
	  			<el-row type="flex" class="row-bg" justify="center">
 						<el-col :span="2"><v-share></v-share></el-col>
	  			</el-row>
	  		</div>
	  	</el-main>
	  </div>
</template>

<script>
import VShare from '@/components/Share'

import axios from 'axios'
import qs from 'qs';
export default {
  name: 'Vows',
  props:{
  	item:Object,
  	index:Number
  },
  data () {
    return {
      curWeb:null,
      curAccount:null,
      // localWeb3:false,
      nickname:'Danniel',
      loverNickname:'Rose',

      evenClass:0,

      ID:'123243546578987654',

      email:'user@email.com',
      loverEmail:'lover@email.com',

      timeStamp:'1518316630',
      timeFormat:'',
      msg:'i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you',


    }
  },
  created(){
    this.curWeb = this.localWeb;
    this.curAccount = this.account;
    this.email = this.item.email;
    // this.evenClass = this.index%2 ? '' : 'ask-prompt1';
    console.log(this.curWeb,this.curAccount);
    this.timeFormat = this.formatTime(this.item.certTime);
  },
  mounted(){
    this.evenClass = this.index%2 ? 'ask-prompt1' : '';

  },
  computed:{
  	mailTo(){
  		console.log(this);
  		return "mailto:" + this.email
  	}
  },
  methods:{
  	
  	// share(){
  	// 	this.$message({
  	// 		message:'share',
  	// 		type:'success'
  	// 	})
  	// },
  	formatTime(seconds){
  		var datetime = new Date();
  		var monthArr = [
  			"January",
				"February",
				"March",
				"April",
				"May",
				"June",
				"July",
				"Aguest",
				"September",
				"October",
				"November",
				"December",
  		]
			datetime.setTime(seconds*1000);
			var year = datetime.getFullYear();
			var month = monthArr[datetime.getMonth()]
			var date = datetime.getDate();
			var hour = datetime.getHours();
			var amPm;
			var minute = datetime.getMinutes();

			if(hour <= 12){
				amPm = 'am'
			}else{
				hour = hour -12;
				amPm = 'pm'

			}
			// var second = datetime.getSeconds();
			// return year + "-" + month + "-" + date+" "+hour+":"+minute+":"+second;
			return hour + ":" + minute + amPm + " " + date + " " + month + " " + year;
  	},
  },
  watch:{
    // localWeb(){
    //   this.curWeb = this.localWeb;
    //   console.log(111)
    // },

    // account(){
    //   console.log(222)

    // },
    // account:{
    //   handler(val, oldVal) {
    //     console.log(222)
    //     this.curAccount = this.account;
    //   },
    //   deep: true
    // }
  },
  components:{
  	'v-share':VShare
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import url(../assets/scss/base.scss);
.detail-box{
	max-width:1200px;
	text-align:center;
	margin:0 auto;
}

.ask-prompt{
	// height:315px;
	background-color:#003650;
	.prompt-bg{
		// background:url(../assets/cryptolove-conform_03.jpg) 150px top no-repeat;
		// background-size:340px;
		height:100%;
	}
	.ask-box{
		padding-top:50px;
		background:url(../assets/hudie.png) left top no-repeat;
		color:#fff;
		text-align:center;
		padding-bottom:16px;
		h3{
			height:62px;
			line-height:62px;
			font-size:58px;
			// color:#42210b;
			text-align:center;

		}
		p{
			font-size:14px;
			line-height:24px;
			text-align:center;
			&.arrow{
				height:18px;
				background:url(../assets/heart.png) center no-repeat;
			}
			&.time{
				font-size:18px;
				line-height:32px;
				text-align:center;
				padding-bottom:30px;
			}
			&.emailbox{
				color:#969898;
			}
			&.info-share{
				text-align:center;
			}

			// .share{
			// 	color:#ff8373;
			// 	display:inline-block;
			// 	padding: 0 30px;
			// 	line-height: 50px;
			// 	font-size:24px;
			// 	cursor:pointer;

			// }
			img{
				border:none;
				width:167px;
			}
		}
		.msg-box{
			font-size:14px;
			line-height:24px;
			width:720px;
			margin:0 auto;
			text-align:left;	
			.msg{
				text-align:left;
			}
		}
		.emails{
			padding:20px 0;
			p{
				line-height:16px;
			}
		}
		
	}

}
.ask-prompt1{
	background-color:#a7d8d0;
	p,h3{
		color:#003650;
	}
	.ask-box{
		background:url(../assets/hudie2.png) right top no-repeat;
	}
}
</style>
