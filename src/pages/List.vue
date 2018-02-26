<template>
  <div id="listWrap">
    <div class="searchArea">
      <el-row>
        <div class="desc">
          <div class="title">Love Chain Search</div>
          <div class="subTitle">witness what love vows been posted</div>
        </div>
        <div class="handleArea">
          <input class="searchInput" v-model="input" @keyup='storeSearch' placeholder="Search love vows using name or email" />
          <el-button icon="el-icon-search" @click="searching" class="searchBtn">Search</el-button>
        </div>
      </el-row>
    </div>
    <v-listvows :email="email"></v-listvows>
    <!-- <v-vows v-for="(item,index) in curPageDetailList" :item="item" :index="index"></v-vows>  -->
  </div>
</template>
<script>
import Vows from '@/components/Vows'
import ListVows from '@/components/ListVows'
import { contractInstance } from '@/web3Contract'
import {mapState} from 'vuex'

import utils from '@/assets/js/utils'
export default {
  name: '',
  props: {},
  data() {
    return {
      input:'',
      email:'',
      curPageDetailList:null,
    }
  },
  created() {
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
    this.input = this.$store.state.search;
    this.searching(this.input)
  },
  computed:{
    ...mapState([
      'search'
    ])
  },
  components: {
    'v-vows':Vows,
    'v-listvows':ListVows,
  },
  methods: {
    storeSearch(){
      this.$store.dispatch('setSearch',this.input);
    },
    searching(key){
      // console.log(111);
      this.email = this.input;
     // utils.getCertsIdsByQuery(key||this.input).then((res)=>{
     //  var arr = [];
     //  for(var i = 0;i<res.length;i++){
     //    this.getCertsByCertId(this.decode(res[i])).then(res=>{
     //      var arr=['nickName','email','loverNickName','loverEmail','certTime','loveMsg'];
     //      arr.push(this.formatRes(arr,res));
     //    })
        
     //  }
     //  this.curPageDetailList = arr;
     // })
    }
  },
  watch:{
    search(val){
      console.log('111');
      this.input = val
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
        padding-left:15px;
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
