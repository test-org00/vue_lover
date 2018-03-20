<template>
  <div class="content wrap">
    <h3>Your invitation has been sent successfully</h3>
    <p class="faqs" >The forever Love Chain is the world's one and only public blockchain featuning your love vow. Your true love, your name and your vow will be recorded into this irrevocable and elenal love chain.</p>
    <p class="faqs" >Once you make the vow on the block chain,your name,your ID,your vow will be made public to everyone, and most importantly,it is irrevocable,unchangeable.This is due to the nature of block chain.</p>
    
   
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
