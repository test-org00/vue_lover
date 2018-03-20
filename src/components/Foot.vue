<template>
  <div class="foot">
    <div class="inner-foot">
      
      <el-row type="flex" class="foot-link" justify="space-between">
        <el-col :span="12">
          <div class="grid-content bg-purple-light">
            <!-- <a href="mailto:info@foreverlovechain.com">Contact Us: info@foreverlovechain.com</a> -->
            <!-- <router-link to="/invite">Invite</router-link> -->
            <router-link to="/about">About</router-link>
            <router-link to="/faqs">FAQs</router-link>
            <a @click='confess' style="cursor:pointer">Confess now</a>
          </div>
        </el-col>
        <el-col v-if="" :span="2">
          <div class="grid-content bg-purple share">
            <!-- <v-share :hideEmail="true"></v-share> -->
            <social-sharing url="https://vuejs.org/" inline-template>
                
              <div class="icons-wrap" style="text-align:right;">
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
                <!-- <network network="googleplus">
                  <i style="padding:0 5px;font-size:20px;cursor:pointer;" class="icon-google"></i>
                </network> -->
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

    </div>
    <div class="grid-content footer-bottom">
      <router-link to="/terms">Terms of use</router-link>
      <router-link to="/privacy">Privacy policy</router-link>
    </div>

  </div>
</template>

<script>
// import VShare from '@/components/Share'
import utils from '@/assets/js/utils'
export default {
  name: 'foot',
  props:['account'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    confess(){
      utils.createVow(this);
    }
  },
  components:{
    // 'v-share':VShare
  },
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
      color:#808080;
      font-size:14px;
      padding: 0 10px;
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
      .share-relative .icon-email{
        display:none;
      }
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
