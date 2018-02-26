<template>
		
	  <div class="ask-prompt" v-if='item.email' :class="evenClass" >
	  	<el-main class="detail-box prompt-bg" :data-certId="item.certId" >
	  		<div class="ask-box">
	  			<h3>{{item.nickName}} to {{item.loverNickName}}</h3>
	  			<p class="arrow"></p>
	  				<p class="time">{{timeFormat}}</p>
	  				<!-- <p class="time">{{item.certTime}}</p> -->
	  			<div class="msg-box" >
	  				<p class="msg" :class="item.loveMsg.length < 113 ? 'msgCenter' : ''">{{item.loveMsg}}</p>
	  			</div>
					<div class="emails">
						
						<p class="emailbox">
							{{item.nickName}} email:{{item.email}} ID: <span class="star"></span>
						</p>
						<p class="emailbox">{{item.loverNickName}} email:{{item.loverEmail}}</p>
					</div>
	  			<el-row type="flex" class="row-bg" justify="center">
 						<el-col :span="2" ><v-share :receiverEmail="item.loverEmail" :serialize="itemSerialize"></v-share></el-col>
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
      // timeFormat:'',
      msg:'i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you',

      itemSerialize:null,
    }
  },
  created(){
  	console.log(this.formatTime('1519438891'),this.formatTime("1519479722"))

  	this.itemSerialize = this.serialize(this.item);
  	console.log(this.itemSerialize);
    this.curWeb = this.localWeb;
    this.curAccount = this.account;
    this.email = this.item.email;
    // this.evenClass = this.index%2 ? '' : 'ask-prompt1';
    // console.log(this.curWeb,this.curAccount);
    // this.timeFormat = this.formatTime(this.item.certTime);
  },
  mounted(){
    this.evenClass = this.index%2 ? 'ask-prompt1' : '';

  },
  computed:{
  	mailTo(){
  		console.log(this);
  		return "mailto:" + this.email
  	},
  	timeFormat(){
  		return this.formatTime(this.item.certTime);
  	}
  },
  methods:{
  	// share(){
  	// 	this.$message({
  	// 		message:'share',
  	// 		type:'success'
  	// 	})
  	// },
  	serialize(obj){
  		var str = '';
  		for(var i in obj){
  			str += i + "=" + obj[i] + '&';
  		}
  		return str.substring(0,str.length-2);
  	},
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

			if(minute<10){
				minute = '0'+minute;
			}

			if(date<10){
				date = '0'+date;
			}
			if(hour < 12){
				if(hour<10){
					hour = '0'+hour;
				}
				amPm = 'am'
			}else{
				if(hour !== 12){

					hour = hour -12;
				}
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
				.star{
					position:relative;
					display:inline-block;
					vertical-align:middle;
					width:84px;
					&:after{
						content: "\2736\2736\2736\2736\2736\2736\2736\2736\2736\2736";//特殊字符或形状
				    // color: #a2b6c5;
				    font-size: 12px;
				    position: absolute;
				    left: 4px;
				    top: -9px;
				    // cursor: pointer;
					}
				}
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
				&.msgCenter{
					text-align:center;
				}
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
