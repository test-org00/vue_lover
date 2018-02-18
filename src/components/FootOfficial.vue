<template>
  <div class="foot">
    <div class="inner-foot">
      
      <el-row type="flex" class="foot-link" justify="space-between">
        <el-col :span="12">
          <div class="grid-content bg-purple-light">
            <a href="">联系我们: info@foreverlovechain.com</a>
            <a href="">常见问题</a>
            <a href="">使用协议</a>
          </div>
        </el-col>
        <el-col v-if="" :span="2">
          <div class="grid-content bg-purple share">
            <v-share></v-share>
          </div>
        </el-col>
        
      </el-row>
      <el-row type="flex" class="foot-link foot-link-bottom" justify="center">
        <el-col :span="4">
          <div class="grid-content bg-purple-light">
            <a href="">Terms of use</a>
            <a href="">privacy policy</a>
          </div>
        </el-col>
      </el-row>

    </div>

  </div>
</template>

<script>
import VShare from '@/components/Share'
export default {
  name: 'foot',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    'v-share':VShare
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.foot{
  padding: 25px 0 40px 0;
  border-top:1px solid #ccc;
  flex: 0 0 auto;
}

.inner-foot{
  width:1200px;
  margin:0 auto;
  .foot-link{
    a{
      text-decoration: none;
      color:#7f7f7f;
      font-size:14px;
      padding: 0 5px;
      &:hover{
        text-decoration: underline;
      }
    }
    .icons-wrap{
      i{
        font-size:20px;
      }
    }
  }
  .foot-link-bottom{
    margin-top:20px;
  }
 
  
}
</style>
