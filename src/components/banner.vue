<template>
  <div class="banner">
    <h4 v-if="$route.name == 'index'">Talk is cheap,make your FLC love vow if you truely are!</h4>
    <div class="bannerInner">
      <img src="../assets/heartDiamond.png" alt="">
      <div class="text">
        <div class="desc">
          <p>The <strong>Forever Love Chain</strong> is the world's one and only public <strong>blockchain</strong> featuning you love vow. Your true love, your name and your vow will be recorded into this irrevocable and etemal love chain. And the whole world would will be able to see it.</p>
          <p>Because your love is <strong>unique</strong>, each vow is uniquely associated with your identifications. Are you ready to confess your love to the ONE and ONLY love of your life? </p>
          
        </div>
        <ul class="event-box">
          <li>
            <p>Make a vow now</p>
            <button class="btn" @click="goToCreate">Talk the Challenge</button>
            <!-- <el-button type="primary" @click="goToCreate">Talk the Challenge</el-button> -->
          </li>
          <li>
            <p>Nah,not applicable to me.But I will make someone else do it.</p>
            <!-- <button class="btn">Create a Challenge</button> -->
            <v-share-btns :links="links" shareType="challenge" bannerClass='banner' btnWord="Create a Challenge"></v-share-btns>

          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>

import utils from '@/assets/js/utils'
import VShareBtns from '@/components/ShareBtns'


export default {
  name: '',
  // props: ['account'],
  data() {
    return {
      links:'',
    }
  },
  created() {
    console.log(this.$route)
  },
  components: {
    'v-share-btns':VShareBtns


  },
  methods: {
    goToCreate(){
      utils.createVow(this);
    }

  },
  watch:{
    // account(val){
    //   console.log('router 绑定传值可否',val); // 可以
      
    // }
  },
  beforeRouteEnter (to, from, next) {
    // next(vm=>{
    //   console.log(vm.$store.dispatch('setConfess',true))
    // })
  },

}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import url(../assets/scss/base.scss);
  .banner {
    padding-top: 54px;
    background: #ea5453;
    h4{
      font-size:44px;
      color:#fff;
      line-height:50px;
      padding-bottom:40px;
      text-align:center;
      font-weight:300;
    }
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
        .event-box{
          display:flex;
          justify-content:start;
          align-items:flex-end;
          list-style:none;
          >li{
            flex:0 0 200px;
            margin-right:64px;
            .btn{
              width:100%;
              height:40px;
              font-size:14px;
              line-height:40px;
              text-align:center;
              background-color:#931d26;
              color:#fff;
              border:none;
              cursor:pointer;
              border-radius:4px;
              &:hover{

                background-color:rgb(239, 112, 162);
              }
            }
            p{
              font-size: 14px;
              line-height: 20px;
              padding-bottom:5px;
            }
          }
        }
      }
    }
  }
  

</style>