<template>
  <div class="content wrap">
    <h3>Finish installing Metamask to continue</h3>
    <p class="faqs" >Make sure you follow the instructions on Metamask to finish the installation.</p>
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
@import '../assets/scss/singlePage.scss';
</style>
