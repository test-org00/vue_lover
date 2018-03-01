<template>
  <div class="content wrap">
    <h3 style="color:#c0272d">No vow is found matching your search</h3>
    <img src="../assets/inviteSuccess.jpg" alt="">
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
