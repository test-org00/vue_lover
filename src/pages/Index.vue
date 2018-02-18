<template>
  <div id="indexWrap">
    <div class="banner">
      <div class="bannerInner">
        <img src="../assets/heartDiamond.png" alt="">
        <div class="text">
          <div class="title">一生爱链</div>
          <div class="desc">
            <p>一生爱链是全球唯一的爱情区块链</p>
            <p>每一段真爱，你们的名字，你们的誓言，</p>
            <p>将被区块链上一段不可篡改，不可撤销的区块数据永久记录，</p>
            <p>向全世界完全公开，</p>
            <p>一生爱链还会记录加密后的你的身份证信息，</p>
            <p>在一生中你只能向一个爱人宣誓</p>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="contentInner">
        <img src="../assets/previewImg.png" alt="">
        <div class="handleArea">
          <img src="../assets/createHover.png" @click="goToCreate" alt="">
          <div class="text">
            <p>用一生一次的一生爱链</p>
            <p>向他/她表白吧</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>


export default {
  name: '',
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
    goToCreate(){
      window.location = location.origin+'/#/game/createCert'
      // this.$message({
      //   message:'待修改链接',
      //   type:'warning'
      // })
    }
  }

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
          font-size: 18px;
          line-height: 36px;
        }
      }
    }
  }
  .content {
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
          color: #e85377;
          font-size: 16px;
          p {
            text-align: center;
          }
        }
      }
    }
  }
}

</style>
