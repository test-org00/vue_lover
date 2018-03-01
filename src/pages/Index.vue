<template>
  <div id="indexWrap">
    <div class="banner">
      <div class="bannerInner">
        <img src="../assets/heartDiamond.png" alt="">
        <div class="text">
          <div class="title">Love Of Your Life Challenge</div>
          <div class="desc">
            <p>The <strong>Forever Love Chain</strong> is the world's one and only public <strong>blockchain</strong> featuning you love vow. Your true love, your name and your vow will be recorded into this irrevocable and etemal love chain. And the whole world would will be able to see it.</p>
            <p>Because your love is <strong>unique</strong>, each vow is uniquely associated with your identifications. Are you ready to confess your love to the ONE and ONLY love of your life? </p>
            
          </div>
        </div>
      </div>
    </div>
    <div class="contentIndex">
      <div class="contentInner">
        <img src="../assets/home_vow.jpg" alt="">
        <div class="handleArea">
          <img src="../assets/createHover.png" @click="goToCreate" alt="">
          <div class="text">
            <p>Confess to the love of your</p>
            <p>life now</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import utils from '@/assets/js/utils'

export default {
  name: '',
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
    goToCreate(){
      utils.createVow(this);
    }

  },
  watch:{
    account(val){
      console.log('router 绑定传值可否',val); // 可以
      
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm=>{
      console.log(vm.$store.dispatch('setConfess',true))
    })
  },

}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import url(../assets/scss/base.scss);
#indexWrap {
  .banner {
    padding-top: 54px;
    background: #ea5453;
    .bannerInner {
      width: 1200px;
      height: 400px;
      margin: 0 auto;
      display: flex;
      img {
        height: 300px;
        margin-left: 30px;
        margin-right: 48px;
      }
      .text {
        color: #fff;
        .title {
          font-size: 50px;
          font-weight: 300;
          line-height: 68px;
          margin-bottom: 12px;
        }
        .desc {
          font-size: 22px;
          line-height: 30px;
          p{
            margin-bottom:20px;
          }
        }
      }
    }
  }
  .contentIndex {
    background-color: #faf0dc;
    .contentInner {
      width: 1200px;
      margin: 0 auto;
      padding: 86px 0 100px 30px;
      display: flex;
      .handleArea {
        width: 380px;
        >img {
          display:block;
          margin: 64px auto 26px;
          cursor:pointer;
        }
        .text {
          color: #e85d7e;
          font-size: 16px;
          p {
            color: #e85d7e;
            text-align: center;
            margin-bottom:0px;
          }
        }
      }
    }
  }
}

</style>
