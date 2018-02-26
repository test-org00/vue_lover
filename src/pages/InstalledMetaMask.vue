<template>
  <div class="content wrap">
    <h3>Finish installing Metamask to continue</h3>
    <p class="desc" style="text-align:center;">Make sure you follow the instructions on Metamask to finish the installation.</p>
    <span class="install"><button @click="installedMetaMask">I installed metamask</button></span>
    <p class="faqs"><a href="">Learn more on FAQs</a></p>
    <img src="../assets/steps.jpg" alt="">
  </div>
</template>
<script>
import Vows from '@/components/Vows'
import { contractInstance } from '@/web3Contract'
import utils from '@/assets/js/utils'
export default {
  name: 'Unsupport',
  props: {},
  data() {
    return {
      
    }
  },
  created() {

  },
  components: {

  },
  methods: {
    installedMetaMask(){
   
      utils.createVow(this);
    }
  }

}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.content{
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
}
</style>
