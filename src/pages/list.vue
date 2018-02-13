<template>
  <div id="listWrap">
    <div class="searchArea">
      <el-row>
        <div class="desc">
          <div class="title">一生爱链搜索</div>
          <div class="subTitle">看看爱链上公开了哪些爱情誓言</div>
        </div>
        <div class="handleArea">
          <input class="searchInput" v-model="input" placeholder="请输入内容" />
          <el-button icon="el-icon-search" @click="search" class="searchBtn">搜索</el-button>
        </div>
      </el-row>
    </div>
    <v-vows v-for="(item,index) in curPageDetailList" :item="item" :index="index"></v-vows> 
  </div>
</template>
<script>
import Vows from '@/components/Vows'
import { contractInstance } from '@/web3Contract'
import useCon from '@/assets/js/utils'
export default {
  name: '',
  props: {},
  data() {
    return {
      input:'',
      curPageDetailList:null,
    }
  },
  created() {
    this.curPageDetailList = this.$route.params.list
    // this.curPageDetailList=[{
    //   nickName:'aaa',
    //   email:'aaa@qq.com',
    //   loverNickName:'bbb',
    //   loverEmail:'bbb@qq.com',
    //   certTime:"1518343653",
    //   loveMsg:'dfsdf sdfsdf  sdfsdf sdfsdf '
    // },{
    //   nickName:'ccc',
    //   email:'ccc@qq.com',
    //   loverNickName:'ddd',
    //   loverEmail:'ddd@qq.com',
    //   certTime:"1518343653",
    //   loveMsg:'dfsdf sdfsdf cccc sdfsdf sdfsdf '
    // }]
  },
  components: {
    'v-vows':Vows
  },
  methods: {
    search(){
      console.log(111);
     useCon.getCertsIdsByQuery(this.input).then((res)=>{
      var arr = [];
      for(var i = 0;i<res.length;i++){
        this.getCertsByCertId(this.decode(res[i])).then(res=>{
          var arr=['nickName','email','loverNickName','loverEmail','certTime','loveMsg'];
          arr.push(this.formatRes(arr,res));
        })
        
      }
      this.curPageDetailList = arr;
     })
    }
  }

}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import url(../assets/scss/base.scss);
#listWrap {
  .searchArea {
    line-height: 36px;
    width: 1200px;
    margin: 0 auto;
    padding: 18px 0;

    .desc {
      display: flex;
      margin-bottom: 8px;
      .title {
        padding-left: 34px;
        background: url(../assets/search_icon.png) left center no-repeat;
        font-size: 22px;
      }
      .subTitle {
        font-size: 12px;
      }
    }
    .handleArea {
      display: flex;
      .searchInput {
        height: 38px;
        border-radius: 6px;
        border: 1px solid #ff8373;
        width: 425px;
        text-indent: 5px;
        color: #ff8373;
      }
      .searchBtn {
        height: 40px;
        padding: 0 10px;
        background-color: #ff8373;
        color: #fff;
        margin-left: 5px;
      }
    }
  }
}

</style>
