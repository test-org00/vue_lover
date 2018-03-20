<template>
  <div class="content wrap">
    <h3>Your MetaMask is locked</h3>
    <p class="faqs">Simplly open MetaMask and follow the instructions to unlock it.</p>
  
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
  },
  components: {

  },
  methods: {

  },

  watch:{
    account(val){
      if(val){

        this.$router.push({
          path:'/game/detail'
        })
      }
    }
  }

}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../assets/scss/singlePage.scss';

</style>
