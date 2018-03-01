<template>
  <div class="header-wrap">
    <el-header class="el-header-inner">
      <el-row  type="flex">
        <el-col :span="8" class="logo">
          <router-link to="/"><img src="../assets/logo.png" alt="ForeverLove"></router-link>
        </el-col>
        <el-col :span="8" class="search-box">
          <input class="searchInput" placeholder="Search love vows using name or email" @keyup.13="searching" v-model="searchInput" @keyup="storeSearch"></input>
          <div class="search-icon" @click="searching"></div>
        </el-col>
        <el-col :span="8" class="btnArea">
          <el-row>
            <el-col class="btn" :class="curName == 'invite' ? 'on' : ''" :span="6"><span  @click="inviteHandle">Invite</span></el-col>
            <el-col class="btn" :class="curName == 'about' ? 'on' : ''" :span="6"><span  @click="aboutHandle">About</span></el-col>
            <el-col class="btn" :class="curName == 'faqs' ? 'on' : ''" :span="6"><span @click="questionsHandle" >FAQs</span></el-col>
            <el-col v-if="confess" :class="curName == 'locked' || curName =='installedMetaMask' || curName =='getMetaMask' || curName =='unsupport' || curName =='confess'? 'on' : ''"  class="btn" :span="6"><span @click="confessNow">Confess Now</span></el-col>
            <el-col v-else :class="curName == 'detail' ? 'on' : ''"  class="btn" :span="6"><span @click="confessNow">My Nows</span></el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-header>
  </div>
</template>
<script>
import utils from '@/assets/js/utils'
import {mapState} from 'vuex'

export default {
  name: 'pageHead',
  props: ['account','cur'],
  data() {
    return {
      searchInput: '',
      // curName:''
    }
  },
  created() {
    // this.curOpt = this.$route.name;
    // console.log('name',this.curOpt)
    // this.$store.dispatch('fetchAccounts');
  },
  computed:{
    ...mapState([
      'search','confess','curName'
    ])
  },
  methods: {
    storeSearch(){
      this.$store.dispatch('setSearch',this.searchInput);
    },
    searching(){
      // this.curOpt = null;
      this.$store.dispatch('setListSearch');
      this.$router.push({
        path:'/list',
        params:{keyword:this.searchInput}
      })
    },
    confessNow() {
      // this.curOpt = 'confess';
      utils.createVow(this);
    },
    inviteHandle(){
      // this.curOpt = 'invite';
      this.$router.push({
        path:'/invite'
      })
    },
    aboutHandle(){
      // this.curOpt = 'about';
      this.$router.push({
        path:'/about'
      })
    },
    questionsHandle() {
      // this.curOpt = 'faqs';
      this.$router.push({
        path:'/faqs'
      })
    }
  },
  watch:{

    // accounts:{
    //   handler(val, oldVal) {
    //     console.log("head",val)
    //     if(val !==null)
    //     this.curAccount = val[0];
    //   },
    //   deep: true
    // },
    account(val, oldVal){
      console.log('account:', val)
      // this.account = val;
    },
    search(val){
      this.searchInput = val;
    }
  }

}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import url(../assets/scss/base.scss);
.header-wrap {
  background-color: #f2f2f2;
  flex:0 0 auto;
}
.search-box{
  position:relative;
  .search-icon{
    position:absolute;
    right:4px;
    top:9px;
    width:36px;
    height:36px;
    cursor:pointer;
  }
}
.el-header-inner {
  max-width: 1200px;
  margin: 0 auto;
  .logo {
    height: 60px;
    img{
      margin-top:10px;
    }
    // background: url(../assets/logo.png) left bottom no-repeat;
  }
  .searchInput {
    height:38px;
    width:100%;
    border-radius:6px;
    font-size:16px;
    outline:none;
    border:1px solid #ccc;
    margin-top: 8px;
    padding-left:8px;
    padding-right: 15px;
    box-sizing:border-box;
    background:url(../assets/search_icon_gray.png) 95% center no-repeat;
  }
  .btnArea {
    line-height: 60px;
    .btn {
      &.on{
        color:#c5403e;
        text-decoration:underline;
      }
      font-weight: 500;
      color: #4d4d4d;
      cursor:pointer;
      text-align: center;
      span{
        &:hover{
          text-decoration:underline;
        }
      }
    }
  }
}

</style>
