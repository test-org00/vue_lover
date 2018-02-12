<template>
  
  <el-main class='register-box'>
    <div class="image-box">
      <!-- <img src="../assets/road.jpg" width="100%" alt=""> -->
      <!-- <p v-if="unknowNetwork">Unknow Network</p> -->
      <!-- <div v-if="networkTest > 1 && account" class="wrapstatus">
        <h1>Oops, you’re on the wrong network</h1>
        <p>Simply open MetaMask and switch over to the <strong>Main Ethereum Network</strong>.</p>
        <img src="@/assets/main-network.png" class="hero-image" alt="">

      </div> -->
      <div v-if="!metaMask && !account" class="wrapstatus metaMask">
        <h1>Wanna Play?</h1>
        <p>You’ll need a safe place to store all of your adorable CryptoKitties! The perfect place is in a secure wallet like MetaMask. This will also act as your login to the game (no extra password needed).</p>
        <el-button type="primary" disabled ><a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en" target="_blank">Install MetaMask</a></el-button>
      </div>
      <div v-if="metaMask && !account" class="wrapstatus signIn ">
        <h1>Your MetaMask is locked</h1>
        <p>Simply open MetaMask and follow the instructions to unlock it.</p>
        <img src="@/assets/locked-out.svg" class="hero-image shake shake-hard" alt="">
      </div>
    </div>
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
    this.account = this.$store.state.account && this.$store.state.account[0];
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
      if( this.account){
        // 判断有没有账号
        contractInstance.getInfo((error, result)=>{
          console.log(error,result);
          // this.$store.dispatch('setUserInfo',result)
          if(!error){
            if(this.queryObj.certId){
              this.push({
                path:'/certificate',
                query:this.queryObj
              })
            }
            if(result.email){
              this.push({
                path:'/detail',
                params:result
              })
            }else{
              this.push({
                path:'/register'
              })
            }
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
        this.account = val[0];
        console.log(this.account)
        this.jumpToDetail()
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
  margin: 60px auto 40px;
  max-width: 1200px;
}
.image-box{
  width:100%;
  // background-color: #e9eef3;
  .wrapstatus{
    text-align:center;
    h1{
      text-align:center;
      margin-bottom:30px;
    }
    p{
      text-align:center;
      font-size:24px;
      color:#82817d;
      line-height:40px;
      strong{
        color:#2c3e50;
      }
    }
    .el-button{
      font-size:26px;
      margin-top:40px;
      a{
        text-decoration: none;
        color:#fff;
      }
    },
    .hero-image{
      max-width:100%;
      height:auto;
      margin-top:30px;
      &.shake-hard{
        display: inline-block;
        transform-origin: center center;
        
        &:hover{
          animation-name: shake-hard;
          animation-duration: .1s;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          animation-play-state: running;
        }
      }
    }
  }
}
@keyframes shake-hard {
    2% {
        transform: translate(3px,-1px) rotate(-.5deg)
    }

    4% {
        transform: translateY(-8px) rotate(-.5deg)
    }

    6% {
        transform: translate(6px,10px) rotate(-.5deg)
    }

    8% {
        transform: translate(10px,-4px) rotate(1.5deg)
    }

    10% {
        transform: translate(-6px,9px) rotate(-.5deg)
    }

    12% {
        transform: translate(5px,2px) rotate(-1.5deg)
    }

    14% {
        transform: translate(-2px,6px) rotate(.5deg)
    }

    16% {
        transform: translate(-1px,-2px) rotate(-2.5deg)
    }

    18% {
        transform: translate(4px,9px) rotate(3.5deg)
    }

    20% {
        transform: translate(6px,7px) rotate(-.5deg)
    }

    22% {
        transform: translate(9px,-4px) rotate(-.5deg)
    }

    24% {
        transform: translate(10px,8px) rotate(-1.5deg)
    }

    26% {
        transform: translate(-2px) rotate(2.5deg)
    }

    28% {
        transform: translate(7px,-7px) rotate(2.5deg)
    }

    30% {
        transform: translate(1px) rotate(-1.5deg)
    }

    32% {
        transform: translate(-6px,-2px) rotate(2.5deg)
    }

    34% {
        transform: translate(1px,-4px) rotate(-.5deg)
    }

    36% {
        transform: translate(1px,7px) rotate(.5deg)
    }

    38% {
        transform: translate(6px,-9px) rotate(.5deg)
    }

    40% {
        transform: translate(-5px,-3px) rotate(-1.5deg)
    }

    42% {
        transform: translateY(-6px) rotate(-2.5deg)
    }

    44% {
        transform: translate(7px,10px) rotate(1.5deg)
    }

    46% {
        transform: translate(6px,-4px) rotate(2.5deg)
    }

    48% {
        transform: translate(-4px,-6px) rotate(-.5deg)
    }

    50% {
        transform: translate(3px,-4px) rotate(.5deg)
    }

    52% {
        transform: translate(7px,2px) rotate(2.5deg)
    }

    54% {
        transform: translate(7px,4px) rotate(-2.5deg)
    }

    56% {
        transform: translate(9px,1px) rotate(-2.5deg)
    }

    58% {
        transform: translate(-3px,-7px) rotate(2.5deg)
    }

    60% {
        transform: translate(6px,3px) rotate(.5deg)
    }

    62% {
        transform: translate(1px,4px) rotate(-.5deg)
    }

    64% {
        transform: translate(10px,4px) rotate(-.5deg)
    }

    66% {
        transform: translate(8px,-7px) rotate(2.5deg)
    }

    68% {
        transform: translate(-3px,-6px) rotate(.5deg)
    }

    70% {
        transform: translate(-7px,-4px) rotate(1.5deg)
    }

    72% {
        transform: translate(10px,6px) rotate(1.5deg)
    }

    74% {
        transform: translate(3px,9px) rotate(1.5deg)
    }

    76% {
        transform: translate(-6px,5px) rotate(-2.5deg)
    }

    78% {
        transform: translate(4px,5px) rotate(.5deg)
    }

    80% {
        transform: translate(-8px,3px) rotate(3.5deg)
    }

    82% {
        transform: translate(3px,-2px) rotate(2.5deg)
    }

    84% {
        transform: translate(7px,10px) rotate(-.5deg)
    }

    86% {
        transform: translate(5px,-6px) rotate(-.5deg)
    }

    88% {
        transform: translate(-8px,-5px) rotate(.5deg)
    }

    90% {
        transform: translate(3px,-9px) rotate(-.5deg)
    }

    92% {
        transform: translate(8px,8px) rotate(-.5deg)
    }

    94% {
        transform: translate(-6px,-7px) rotate(2.5deg)
    }

    96% {
        transform: translate(-6px,5px) rotate(.5deg)
    }

    98% {
        transform: translate(5px,-7px) rotate(.5deg)
    }

    0%,to {
        transform: translate(0) rotate(0)
    }
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
