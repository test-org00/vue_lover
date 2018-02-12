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
          <el-button icon="el-icon-search" class="searchBtn">搜索</el-button>
        </div>
      </el-row>
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
