<template>

  <div class="content wrap" >
		<h3 class="head-nobottom">Last Updated: December 28, 2017</h3>
		<div>
	    <p class="desc" >FLC is a distributed application that runs on the Ethereum network, using specially-developed smart contracts (each, a “Smart Contract”) to enable users to own, transfer, and breed genetically unique digital cats, which can then be visualized on a website that the user can interact with (the “Site”). The Smart Contracts and the Site are collectively referred to in these Terms as the “App”. Using the App, users can view their cats and use the Smart Contracts to acquire, trade, and breed cats with other App users via clock auction.</p>
	    <p class="desc" >Once you make the vow on the block chain,your name,your ID,your vow will be made public to everyone, and most importantly,it is irrevocable,unchangeable.This is due to the nature of block chain.</p>
	    <p class="desc" >Please feel free to contact us at info@foreverlovechain.com for any feedbacks</p>
		</div>
		<!-- <div class="update">Last Updated: December 28, 2017</div> -->

		
		<div>
			<h3 class="head-left">Last Updated: December 28, 2017</h3>
			<h4 class="sub-head">Last Updated: December 28, 2017</h4>
			
	    <p class="desc" >FLC is a distributed application that runs on the Ethereum network, using specially-developed smart contracts (each, a “Smart Contract”) to enable users to own, transfer, and breed genetically unique digital cats, which can then be visualized on a website that the user can interact with (the “Site”). The Smart Contracts and the Site are collectively referred to in these Terms as the “App”. Using the App, users can view their cats and use the Smart Contracts to acquire, trade, and breed cats with other App users via clock auction.</p>
	    <p class="desc" >Once you make the vow on the block chain,your name,your ID,your vow will be made public to everyone, and most importantly,it is irrevocable,unchangeable.This is due to the nature of block chain.</p>
	    <p class="desc" >Please feel free to contact us at info@foreverlovechain.com for any feedbacks</p>
	    
		</div>
   
    <img src="../assets/inviteSuccess.jpg" alt="">
  </div>
</template>
<script>
import Vows from '@/components/Vows'
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
<style lang="sass">
@import '../assets/scss/singlePage.scss';

</style>
