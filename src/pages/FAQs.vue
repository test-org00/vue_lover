<template>
  
  <el-main class='register-box'>
    
    <div class="collapse-box">
      <h3>Getting started</h3>
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item class="el-collapse-item" title="What do I need to play CryptoKitties?" name="1">
          <div class="item-div">Here’s what you need to get started:</div>
          <ul>
            <li class="item-li">A computer or laptop running the desktop version of Chrome or Firefox</li>
            <li class="item-li">MetaMask, a digital wallet used specifically with web apps</li>
            <li class="item-li">Ether, a form of digital payment that powers CryptoKitties</li>
          </ul>
        </el-collapse-item>
        <el-collapse-item class="el-collapse-item" title="Installing MetaMask, your digital wallet" name="2">
          <div class="item-div">To use CryptoKitties, you will need to install MetaMask, a digital wallet. You will need to put money in it to make your first purchase.</div>
          <div class="item-div"><strong>Note:</strong> A digital wallet like MetaMask acts like a bank account—treat it with respect and make sure you don’t forget your password or the seed words.</div>
          <img src="" alt="">
        </el-collapse-item>
        <el-collapse-item class="el-collapse-item" title="Why is MetaMask locked?" name="3">
          <div class="item-div">Occasionally the ‘My Kitties’ page displays a lock screen. This happens because MetaMask locks your account after a certain period of time automatically. To unlock simply click on the MetaMask extension and type in your password.</div>
          <img src="../assets/screenshot-locked.png" width="100%" alt="">
        </el-collapse-item>
        <el-collapse-item class="el-collapse-item" title="Getting Ether, your digital currency" name="4">
          <div class="item-div"><strong>For U.S. citizens only:</strong> you can buy ether (ETH) in MetaMask. ETH is a digital currency that enables our game to run.</div>
          <img src="../assets/screenshot-buy-usa.png" width="100%" alt="">
          <div class="item-div"><strong>For everyone else:</strong> you will need to purchase ETH from an exchange. The easiest way is using Coinbase and then transferring the ETH from your Coinbase wallet to your MetaMask wallet. Unfortunately, you cannot play CryptoKitties with a Coinbase wallet or any other wallets.</div>
          <div class="item-div">You cannot use USD/CAD to buy a CryptoKitty—currencies need to be converted into ETH first.</div>
        </el-collapse-item>
        <el-collapse-item class="el-collapse-item" title="How to send ETH to MetaMask" name="5">
          <div class="item-div"><strong>For U.S. citizens only:</strong> you are able to purchase ETH directly from the MetaMask wallet using the Coinbase widget. This is more convenient and doesn’t require you to create two accounts.</div>
          <div class="item-div"><strong>For everyone else:</strong> you need to buy ETH from an exchange using normal fiat currency. Coinbase is the easiest to setup however the choice is ultimately up to you. Copy your MetaMask address but clicking on the ‘...’ then ‘Copy Address to clipboard’. Go to Coinbase and click ‘Accounts’ and select your ETH Wallet and then click ‘send’. Paste the MetaMask address in the box with the amount you’d like to transfer.</div>
          <img src="../assets/screenshot-buy-usa.png" width="100%" alt="">
        </el-collapse-item>
      </el-collapse>
    </div> 
  </el-main>
</template>

<script>
import { mapState } from 'vuex'
import { localWeb3, contractInstance } from '@/web3Contract';
import utils from '@/assets/js/utils'
export default {
  name: 'Guide',
  data() {
    return {
      activeNames: ['1'],
      metaMask:false,
      // networkTest:false,
      // unknowNetwork:false,
      account:false,
      queryObj:null,
    };
  },
  props:{

    // localWeb:Boolean,// have metamask
  },
  created(){
    // this.$store.dispatch('fetchNetwork');
    // console.log(this.$store.state.network)
    // this.$store.dispatch('fetchAccount');
    console.log(this.$route.params);
    console.log(this.$store.state.accounts)
    this.account = this.$store.state.accounts !== null ? this.$store.state.accounts[0] : null;
    console.log(this.account);
    this.metaMask = !!localWeb3;
    this.queryObj = this.$route.query;
    // this.networkTest = this.$store.state.network;
    // if(this.$route.params){
      // this.network = this.$route.params.network;
      // this.unknowNetwork = this.$route.params.unknowNetwork;
    // }
  },
  methods: {
    handleChange(val) {
      console.log(val);
    },
    jumpToDetail(){
      // debugger;
      var that = this;
      if( this.account){
        // 判断有没有账号
        utils.getMemberInfo().then(res=>{
          console.log(res);
          // this.$store.dispatch('setUserInfo',result)
          var arr = ['nickName','email','ID','certNumber'];
          // console.log(res,web3.toAscii(res[1]));
          var resultObj = utils.formatRes(arr,res);
          console.log(resultObj);
          if(this.queryObj.certId && resultObj.email.indexOf('@')>-1){
            this.$router.push({
              path:'/game/certificate',
              query:this.queryObj
            })
          }
          if(resultObj.email.indexOf('@')>-1){
            this.$router.push({
              name:'detail',
              params:resultObj
            })
          }else{
            this.$router.push({
              path:'/game/register'
            })
          }
          
        })
      }
    }
  },
  computed:{
    ...mapState([
      "accounts","network"
    ])
  },
  watch:{
    accounts:{
      handler(val, oldVal) {
        if(val !== null){

          this.account = val[0];
          console.log(this.account)
          this.jumpToDetail()
        }
      },
      deep: true
    },
    // network:{
    //   handler(val, oldVal) {
    //     console.log(val)
    //     this.networkTest  = val ;
    //     this.jumpToDetail()
    //   },
    //   deep: true
    // }

    
  }
 
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.register-box{
  margin: 0px auto 40px;
  max-width: 1200px;
}

.collapse-box{
  padding-top:60px;
  text-align: left;
  color: #575553;
  h3{
    font-size: 32px;
    line-height: 40px;
    margin-bottom: 24px;
  }
  .el-collapse-item {
    color:red!important;
    .el-collapse-item__header {
      color:red!important;

    }
  }

  .item-div, .item-li{
    color:#82817d;
    font-size: 16px;
    line-height: 24px;
    margin-bottom:24px;
  }
}
</style>
