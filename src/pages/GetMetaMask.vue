<template>
  <div class="content wrap">
    <h3>Ready to confess?</h3>
    <p class="desc">You'll need to install MetaMask in order to confess you love. MetaMask is digital wallet, it acts as your login to ForeverLove Chain so that you do not have to create user name and password for ForeverLove Chain. You also need to make sure your MetaMask has money in it, because ForeverLove Chain will change you gas fee when you create the love vow.</p>
    <span class="install"><button @click="getMetaMask">Install metamask</button></span>
    <p class="faqs"><a href="">Learn more on FAQs</a></p>
    <img src="../assets/steps.jpg" alt="">
  </div>
</template>
<script>
import Vows from '@/components/Vows'
import utils from '@/assets/js/utils'
export default {
  name: 'Unsupport',
  props: ['account'],
  data() {
    return {
      
    }
  },
  created() {
    if(typeof web3 !=='undefined'){
      var path;
      if(!this.account){
        path='/locked'
      }else{
        path='/game/detail'
      }
      this.$router.push({
        path:path
      })
    }
  },
  components: {

  },
  methods: {
    getMetaMask(){
      let userAgent = navigator.userAgent;
      let isFF = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器 
      let isChrome = userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1; //判断Chrome浏览器 
      if(isFF){
        window.open('https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/',"_blank")

      }else if(isChrome){
        window.open('https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en',"_blank")
      }
      this.$router.push({
        path:'/installedMetaMask',
      })
    }
  }

}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../assets/scss/singlePage.scss';
/* .content{
  padding:90px 0 168px; 
  text-align:center;
  h3{
    text-align:center;
    line-height:56px;
    font-size:26px;
    margin-bottom:28px;
    color:#4d4d4d;
  }
  .install{
    margin-top:50px;
    margin-bottom:10px;
    background-color:#c5403f;
    padding:2px;
    display:inline-block;
    border-radius:4px;
    box-shadow:2px 2px 5px #333;
    button{
      cursor:pointer;
      padding:15px 40px;
      border-radius:4px;
      background-color:#c5403f;
      border:1px dashed #fff; 
      font-size:18px;
      color:#fff;
    }
  }
  p{
    font-size:12px;
    line-height:20px;
    color:#666;
    margin-bottom:14px;
    &.faqs{
      text-align:center;
    }
    a{
      color:#666;
      text-decoration:none;
      &:hover{
        text-decoration:underline;

      }
    }
  }
  img{
    margin-top:62px;
  }
} */
</style>
