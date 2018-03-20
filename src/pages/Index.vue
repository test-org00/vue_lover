<template>


  <div id="indexWrap">
    <v-banner></v-banner>
    <el-carousel :interval="3000" arrow="never" :autoplay="true" indicator-position="outside">
      <el-carousel-item v-for="(item,index) in items" >
        <!-- <h3>{{ item }}</h3> -->
        <v-vows :item="item" :index="index"></v-vows> 

      </el-carousel-item>
    </el-carousel>
    <!-- <div class="contentIndex">
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
    </div> -->
  </div>
</template>
<script>
import Banner from '@/components/banner'
import utils from '@/assets/js/utils'
import Vows from '@/components/Vows'
import contract from '@/web3Contract'

export default {
  name: '',
  props: ['account'],
  data() {
    return {
      items:[
        {
          certId:1,
          certTime:1519381478,
          email:"Jack@gmail.com",
          loveMsg:"I love you",
          loverEmail:"Rose@gmail.com",
          loverNickName:"Rose",
          nickName:"Jack",
        },
        {
          certId:1,
          certTime:1519381478,
          email:"Jack@gmail.com",
          loveMsg:"I love you",
          loverEmail:"Rose@gmail.com",
          loverNickName:"Rose",
          nickName:"Jack",
        },
        {
          certId:1,
          certTime:1519381478,
          email:"Jack@gmail.com",
          loveMsg:"I love you",
          loverEmail:"Rose@gmail.com",
          loverNickName:"Rose",
          nickName:"Jack",
        }
      ]
    }
  },
  created() {
    // contract.contractInstance().then(res=>{

    //   console.log(res);
    // })
  },
  components: {
    "v-banner":Banner,
    "v-vows":Vows,
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
<style lang="scss">
@import url(../assets/scss/base.scss);
.el-carousel {
  .el-carousel__indicator{
    padding:12px 10px;

    .el-carousel__button{
      width:10px;
      height:10px;
      border-radius:50%;
    }
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
}
#indexWrap {
  
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
