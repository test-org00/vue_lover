<template>
  <div class="header-wrap">
    <el-header class="el-header-inner">
      <el-row gutter="20">
        <el-col :span="12" class="logo"></el-col>
        <el-col :span="8" class="searchInput">
          <el-input placeholder="搜索姓名/邮箱" suffix-icon="el-icon-search" v-model="searchInput">
          </el-input>
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
.header-wrap{
  background-color:#f2f2f2;
}
.el-header-inner {
  max-width: 1200px;
  margin: 0 auto;
  .logo {
    height: 60px;
    background: url(../assets/logo.png) left bottom no-repeat;
  }
  .searchInput {
    margin-top: 8px;
  }
  .btnArea {
    line-height: 60px;
    .btn {
      text-align: center;
    }
  }
}

</style>
