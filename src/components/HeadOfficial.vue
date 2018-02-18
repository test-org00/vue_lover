<template>
  <div class="header-wrap">
    <el-header class="el-header-inner">
      <el-row :gutter="20">
        <el-col :span="12" class="logo"></el-col>
        <el-col :span="8">
          <input class="searchInput" placeholder="搜索姓名/邮箱" @keyup.13="search" v-model="searchInput"></input>
        </el-col>
        <el-col :span="4" class="btnArea">
          <el-row>
            <el-col @click="inviteHandle" class="btn" :span="12">邀请</el-col>
            <el-col @click="questionsHandle" class="btn" :span="12">常见问题</el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-header>
  </div>
</template>
<script>
import useCon from '@/assets/js/utils'

export default {
  name: 'pageHead',
  props: {},
  data() {
    return {
      searchInput: ''

    }
  },
  created() {

  },

  methods: {
    search(){
      this.$router.push({
        path:'/list',
        params:{keyword:this.searchInput}
      })
    },
    inviteHandle() {

    },
    questionsHandle() {

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

.el-header-inner {
  max-width: 1200px;
  margin: 0 auto;
  .logo {
    height: 60px;
    background: url(../assets/logo.png) left bottom no-repeat;
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
    padding-rignt: 15px;
    box-sizing:border-box;
    background:url(../assets/search_icon_gray.png) 95% center no-repeat;
  }
  .btnArea {
    line-height: 60px;
    .btn {
      text-align: center;
    }
  }
}

</style>
