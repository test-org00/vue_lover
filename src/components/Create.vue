<template>
		
	  <div class="ask-prompt " >
	  	<div class="createCerts">
	      <p class="createIcons"><router-link  class="create-icon" to="/createCert"  ></router-link></p>
	      <p class="create-desc">Create a new indestructible vow</p>
	    </div>
	  </div>
</template>

<script>

export default {
  name: 'pageHead',
  props:{
    localWeb:Boolean,// have metamask
    account:String,// had sign in metamask
  },
  data () {
    return {
      curWeb:null,
      curAccount:null,
      // localWeb3:false,
      nickname:'Danniel',
      loverNickname:'Rose',


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
    console.log(this.curWeb,this.curAccount);
    this.timeFormat = this.formatTime(1518316630);
  },
 
  methods:{
  	share(){
  		this.$message({
  			message:'share',
  			type:'success'
  		})
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
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.createCerts{
	p{
		text-align:center;
	}
	padding-top:50px;
	padding-bottom:50px;
	.createIcons{
		text-align:center;
		.create-icon{
			width:114px;
			display:inline-block;
			background:url(../assets/create.png) center no-repeat;
			height:105px;
			&:hover{
				background:url(../assets/createHover.png) 
			}
		}
	}
	.create-desc{
		margin-top:30px;
		line-height:18px;
		font-size:12px;
		color:#373737;
	}
}
</style>
