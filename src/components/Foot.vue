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
        <el-col v-if="" :span="3">
          <div class="grid-content bg-purple share">
            <social-sharing url="https://vuejs.org/" inline-template>
              <div class="icons-wrap">
                  <network network="facebook">
                    <i style="padding:0 5px;font-size:20px; cursor:pointer;" class="icon-facebook"></i> 
                  </network>
                  
                 <!--  <network network="linkedin">
                    <i class="fa fa-linkedin"></i> LinkedIn
                  </network>
                  <network network="pinterest">
                    <i class="fa fa-pinterest"></i> Pinterest
                  </network>
                  <network network="reddit">
                    <i class="fa fa-reddit"></i> Reddit
                  </network> -->
                  <network network="twitter">
                    <i style="padding:0 5px;font-size:20px;cursor:pointer;" class="icon-twitter"></i>
                  </network>
                  <network network="googleplus">
                    <i style="padding:0 5px;font-size:20px;cursor:pointer;" class="icon-google"></i>
                  </network>
                  <!-- <network network="vk">
                    <i class="fa fa-vk"></i> VKontakte
                  </network>
                  <network network="weibo">
                    <i class="fa fa-weibo"></i> Weibo
                  </network> 
                  <network network="whatsapp">
                    <i class="fa fa-whatsapp"></i> Whatsapp
                  </network> -->
              </div>
            </social-sharing>
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
export default {
  name: 'foot',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.foot{
  padding: 25px 0 40px 0;
  border-top:1px solid #ccc;
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
