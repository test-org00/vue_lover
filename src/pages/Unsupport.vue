<template>
  <div class="content wrap">
    <h3>Unsupported browser</h3>
    <p class="faqs">You can only use ForeverLove Chain on a desktop browser like Chrome or Firefox</p>
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
    
  }

}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../assets/scss/singlePage.scss';

</style>
