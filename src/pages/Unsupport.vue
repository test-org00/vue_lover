<template>
  <div class="content wrap">
    <h3>Unsupported browser</h3>
    <p class="desc">You can only use ForeverLove Chain on a desktop browser like Chrome or Firefox</p>
    <p><a href="">Learn more on FAQs</a></p>
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
@import url(../assets/scss/base.scss);
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
  p{
    text-align:center;
    font-size:12px;
    line-height:20px;
    color:#666;
    margin-bottom:14px;
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
