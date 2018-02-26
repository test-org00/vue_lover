<template>
  <div class="foot">
    <div class="inner-foot">
      
      <el-row type="flex" class="foot-link" justify="space-between">
        <el-col :span="12">
          <div class="grid-content bg-purple-light">
            <a href="mailto:info@foreverlovechain.com">Contact Us: info@foreverlovechain.com</a>
            <a href="">FAQs</a>
          </div>
        </el-col>
        <el-col v-if="" :span="2">
          <div class="grid-content bg-purple share">
            <v-share></v-share>
          </div>
        </el-col>
        
      </el-row>

    </div>
    <div class="grid-content footer-bottom">
      <a href="">Terms of use</a>
      <a href="">privacy policy</a>
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
  padding: 25px 0 0 0;
  border-top:1px solid #ccc;
  flex: 0 0 auto;
}

.inner-foot{
  width:1200px;
  margin:0 auto;
  padding-bottom:25px;
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
    .share{
      color:#6f7c91;
    }
  }
 
  
}
.footer-bottom{
  line-height:30px;
  text-align:center;
  height:30px;
  background-color:#cbcbcb;
  a{
    color:#8a8a8a;
    padding:0 20px;
    text-decoration:none;
    &:hover{
      text-decoration:underline;

    }
  }
}
</style>
