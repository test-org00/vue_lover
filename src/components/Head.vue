<template>
  <div class="header-wrap">
    
    <el-header  class="el-header-inner" >
      <el-row type="flex" class="row-bg" justify="space-between">
        <el-col :span="4">
          <div class="grid-content bg-purple-light">
            <p>CRYPTO<br>LOVES</p>
          </div>
        </el-col>
        <el-col v-if="" :span="3">
          <div class="grid-content bg-purple banner-nav">
            <p v-if="!curWeb" >Install Metamask</p>
            <p v-if="curWeb && !curAccount">Sign In</p>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <a href="">Invite</a>            
            <a href="">About</a>            
            <a href="">FAQs</a>            
          </div>
        </el-col>
      </el-row>
    </el-header>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'pageHead',
  props:{
    localWeb:Boolean,// have metamask
    account:String,// had sign in metamask
  },
  data () {
    return {
      curWeb:null,
      curAccount:null,
      // localWeb3:false,
    }
  },
  created(){
    this.curWeb = this.localWeb;
    this.curAccount = this.$store.state.accounts!==null ? this.$store.state.accounts[0]:null;
    console.log(this.curWeb,this.curAccount);
  },
  computed:{
    ...mapState([
      "accounts"
    ])
  },
  watch:{
    // localWeb(){
    //   this.curWeb = this.localWeb;
    //   console.log(111)
    // },

    // account(){
    //   console.log(222)

    // },
    accounts:{
      handler(val, oldVal) {
        console.log(2222,val)
        if(val !==null)
        this.curAccount = val[0];
      },
      deep: true
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import url(../assets/scss/base.scss);
.header-wrap{
  height:114px;
  border-bottom:1px solid #ccc;
  flex:0 0 auto;
}
.el-header-inner{
  max-width:1200px;
  margin: 0 auto;
  height:114px;
}
.grid-content{
  line-height: 40px;
  border-radius: 4px;
  height:114px;
  &.bg-purple-light{
    padding-left:63px;
    background:url(../assets/cryptolove_03.png) 0 center no-repeat;
    background-size: 50px;
    p{
      padding-top:33px;
      line-height:25px;
      color:#603813;
      font-size:16px;
    }
  }
  &.bg-purple{
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    &.banner-nav{
      justify-content:center;
      p{
        line-height:114px;
        color:#ef52d1;
        // box-shadow:0 0.2rem 0 0 #ef52d1;
      }
    }
    a{
      text-decoration:none;
      color:#4d4d4d;
      font-size:16px;
      line-height:114px;
      vertical-align:middle;
      padding:10px;
      &:hover{
        text-decoration:underline;
      }
    }
  }
  .header-nav{
    font-size:16px;
    color: #0b0b0b;
    text-decoration: none;
    &.router-link-exact-active {
      color: #ef52d1;
      box-shadow:0 2px 0 0 #ef52d1;
    }

  }
}
</style>
