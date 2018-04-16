<template>
  <div>
    <div class="header-create">
      
      <h3>Confess to the love of your life vow</h3>

      <p>Please think twice before you commit the vow. Once you make the vow on the blockchain，your name, ID, and love vow will be made public to everyone. And most importantly, it is irrevocable, unchangeable due to the nature of blockchain.</p>
    </div>
    <el-form :label-position="labelPosition" ref="form" :rules="rules"  status-icon :model="form" label-width="150px">
      <el-form-item label="Your Name:" prop='nickName'>
        <el-input v-model="form.nickName" placeholder="Enter your name"></el-input>
      </el-form-item>
      <el-form-item label="Your Email:" prop='email'>
        <el-input v-model="form.email" placeholder="Enter your email"></el-input>
      </el-form-item>

      <el-form-item label="Wallet Address:">
        <el-input  :disabled="true" :value="account"></el-input>
      </el-form-item>

      <el-form-item class="IDLable" v-if="!form.IDDisable" label="Your ID:">
        <el-input  :disabled="true" :value="form.ID"></el-input>
        <el-tooltip class="item" effect="dark" content="Your ID information is required in order to make sure one ID can make vows to one person only." placement="bottom-start">
          <span class="icon-help_outline tipID "></span>

        </el-tooltip>
      </el-form-item>
      <el-form-item v-else class="IDLable" label="Your ID:" prop="ID">
        <el-input v-model="form.ID" placeholder="Enter your ID"></el-input>
        <el-tooltip class="item" effect="dark" content="Your ID information is required in order to make sure one ID can make vows to one person only." placement="bottom-start">
          <span class="icon-help_outline tipID "></span>

        </el-tooltip>
      </el-form-item>
      <el-form-item label="Your Lover's Name:" prop="loverNickName">
        <el-input v-model="form.loverNickName" placeholder="Enter your lover's name"></el-input>
      </el-form-item>
      <el-form-item label="Your Lovers's Email:" prop="loverEmail">
        <el-input v-model="form.loverEmail" placeholder="forexample@email.com"></el-input>
      </el-form-item>
      <el-form-item label="Vow Message:" prop="msg">
        <el-input type="textarea" v-model="form.msg"></el-input>
      </el-form-item>
      <el-form-item class="gasLable" label="Gas Fee:" >
        <!-- <el-input value="0.1ETH"></el-input> -->
        <span>0.1ETH </span>
        <el-tooltip class="item" effect="dark" content="You need to pay 0.1 ETH in order to cover the gas fee charged by Ethereum as well as the cost to support the development of ForeveLove Chain." placement="bottom-start">
          <span class="icon-help_outline tipGas "></span>

        </el-tooltip>
      </el-form-item>
      <el-form-item>
        <el-button class="register-btn" type="primary" @click="onSubmit">Create</el-button>
      </el-form-item>
      
    </el-form>
  </div>
</template>

<script>
import contract from '@/web3Contract'
import { mapState } from 'vuex'
import utils from '@/assets/js/utils'
import req from '@/assets/js/req'
// import sha3 from 'sha3'
import sha1 from 'sha1'

export default {
  name: 'Register',
  props:['account'],
  data() {
    
  
    return {
      // userInfo:{},
      labelPosition:'left',
      form: {
        nickName:'',
        email:'',
        ID:'',
        IDDisable:true,
        loverNickName:'',
        loverEmail:'',
        msg:'',
        payfor:''
      
      },
      rules: {
        nickName: [
          { required: true, message: 'Enter you nickname', trigger: 'change,blur' },
        ],
        email: [
          { required: true, message: 'Enter your email', trigger: 'blur' },
          { type: 'email', message: 'Incorrect email format', trigger: 'blur,change' }
        ],
        ID:[
          { required: true, message: 'Enter your ID', trigger: 'blur' },
        ],
        msg:[
          { required: true, message: 'Enter your message', trigger: 'change,blur' },
        ],
        loverNickName: [
          { required: true, message: 'Enter you nickname', trigger: 'change,blur' },
          // { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
        ],
        loverEmail: [
          { required: true, message: 'Enter your email', trigger: 'blur' },
          { type: 'email', message: 'Incorrect email format', trigger: 'blur,change' }
        ],
        
        
        // account: [
        //   { required: true, message: '请选择日期', trigger: 'change' }
        // ]
      }
    };
  },
  computed:{
    ...mapState([
      'info'
    ])
  },
  created(){
    if(this.$store.state.info){ 
      this.initInfo(this.$store.state.info)
      this.getUserInfo(this.$store.state.info)
    }
    console.log('hash ID',sha1('dongtt2ID'))

  },
  
  methods: {
    initInfo(val){
      // this.form.nickName = val.nickName;
      // this.form.email = val.email;
    },

    getUserInfo(val){
            console.log(val)
            this.form.IDDisable = utils.isNothing(val.ID)
            this.form.ID = val.ID
       
        console.log(this.form);
      console.log(this.form.IDDisable.length)
    },
    onSubmit() {

      this.$refs.form.validate((valid) => {
        if (valid) {
          console.log(this.form.ID,this.form.loverNickName,this.form.loverEmail,this.form.msg,this.account)

          let hashID = sha1(this.form.ID);
          let hashIDCommon = parseInt(hashID, 16);
          utils.createVowFn(
            hashIDCommon,
            // hashID,
            // this.form.ID,
            this.form.nickName,
            this.form.email,
            this.form.loverNickName,
            this.form.loverEmail,
            this.form.msg,
            {from:this.account, value: 100000000000000000, gas:300000},
          ).then( result => {
              this.$store.dispatch('setInfo',{'nickName':this.form.nickName,
              'email':this.form.email,
              'ID':this.form.ID})
              

              this.$alert('Your request of creating a love vow on blockchain has been submitted successfully. It will take a while for the chain to fully proceed your request. Please refresh "My vows" page late to check.', 'Your vow has been submitted to the chain successfully', {
                confirmButtonText: 'OK',
                callback: action => {
                  // this.$message({
                  //   type: 'info',
                  //   message: `action: ${ action }`
                  // });
                }
              });
              req.getTransStatus(result).then(res=>{
                this.$message({
                  message:'Create vow success',
                  type:'success'
                })
                // setTimeout(function(){
                //   window.location.reload();
                // },1000)
                this.$store.dispatch('setReloadVows');
              }).catch(res=>{
                this.$message({
                  message:'Create vow failed',
                  type:'warning'
                })
              })

                // this.$store.dispatch('setPid',result);

              this.$store.dispatch('setCreatePop',false);
                // contractMain.getMemberInfo((error, result)=>{
                  // var arr = ['nickName','email','ID','certNumber'];
                  // console.log(res,web3.toAscii(res[1]));
                  // var resultObj = utils.formatRes(arr,result);
                  // console.log(resultObj);
                  // debugger;
                // console.log(this.info.email);
               // this.$router.push({
                 // name:'detail',
                  // params:{
                  //   email:this.info.email
                  // }
                //})
                // })
          }).catch(error=>{
            this.$message({
              message:error,
              type:'warning'
            })// 根据error的值提示用户错误信息
          })
            
            
          // alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  },
  watch:{
    account(val){
      console.log('account',val);
      // this.getUserInfo(); 
    },
    info(val){
      console.log('info',val)
      this.initInfo(val);
      this.getUserInfo(val)
    }
  },
  
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.header-create{
  padding: 0 42px;
  h3{
    margin-bottom:25px;
  }
  p{
    margin-bottom:40px;

  }
}
.el-form{
  // padding:60px 0 ;

  width:600px;
  margin:0 auto;
  .icon-help_outline{
   
  }
  .tipID{
    position:absolute;
    left:-94px;
    top:12px;
  }
  .tipGas{
    position:absolute;
    left:-92px;
    top:12px;
  }
}
.register-btn{
  background-color:#eb4c8b;
  border:none;
}
</style>
