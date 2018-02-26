<template>
	<div>
		
	  <el-form ref="form" :rules="rules" status-icon :model="form" label-width="80px">
		  <el-form-item label="Nickname" v-if='info'>
		    <el-input v-model="info.nickName" :disabled="true" ></el-input>
		  </el-form-item>
		  <el-form-item label="Email" v-if='info'>
		    <el-input v-model="info.email" :disabled="true" ></el-input>
		  </el-form-item>
		  
      <el-form-item v-if="!form.IDDisable" label="ID">
        <el-input  :disabled="true" :value="form.ID"></el-input>
      </el-form-item>
      <el-form-item v-else label="ID" prop="ID">
        <el-input v-model="form.ID" placeholder="Enter your ID"></el-input>
      </el-form-item>
      <el-form-item label="LoverNick" prop="loverNickName">
        <el-input v-model="form.loverNickName" placeholder="Enter your nickname"></el-input>
      </el-form-item>
      <el-form-item label="LoverEmail" prop="loverEmail">
        <el-input v-model="form.loverEmail" placeholder="forexample@email.com"></el-input>
      </el-form-item>
      <el-form-item label="Message" prop="msg">
        <el-input type="textarea" v-model="form.msg"></el-input>
      </el-form-item>
      <el-form-item label="GasFee:" >
        <!-- <el-input value="0.1ETH"></el-input> -->
        <span>0.1ETH </span>
        <el-tooltip class="item" effect="dark" content="You need to pay 0.1ETH in order to cover the gas fee charged by Ethereum as well as the cost to support the development of ForeveLove Chain." placement="right">
          <span>(?) </span>

        </el-tooltip>
      </el-form-item>
		  <el-form-item>
		    <el-button class="register-btn" type="primary" @click="onSubmit">Create</el-button>
		  </el-form-item>
			
		</el-form>
	</div>
</template>

<script>
import { contractInstance } from '@/web3Contract'
import { mapState } from 'vuex'
import utils from '@/assets/js/utils'

export default {
  name: 'Register',
  props:['account'],
  data() {
  	var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Enter your email'));
        } else {
        	if(!/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value)){
        		callback(new Error('Incorrect email format'));
        	}
          // if (this.ruleForm2.checkPass !== '') {
          //   this.$refs.ruleForm2.validateField('checkPass');
          // }
          callback();
        }
      };
    var validatePayfor = (rule, value, callback) =>{
      if(value === ''){
          callback(new Error('Enter the amount paid (ETH)'));
      }else if(/^(-?\d+)(\.\d+)?$/.test(value)){
        if(value < 0.1){
          callback(new Error('No less than 0.1 ETH'));
        }else{
          callback();
        }
      }else{
        callback(new Error('Enter a number no less than 0.1 ETH'));
      }
    }
    return {
    	// userInfo:{},

      form: {
      
        ID:'',
        IDDisable:'',
        loverNickName:'',
        loverEmail:'',
        msg:'',
        payfor:''
      
      },
      rules: {
        // nickname: [
        //   { required: true, message: 'Enter you nickname', trigger: 'blur' },
        //   // { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
        // ],
        // email: [
        //   { required:true, validator: validatePass, trigger: 'change' }
        // ],
        ID:[
          { required: true, message: 'Enter your ID', trigger: 'blur' },
        ],
        msg:[
          { required: true, message: 'Enter your message', trigger: 'blur' },
        ],
        loverNickName: [
          { required: true, message: 'Enter you nickname', trigger: 'blur' },
          // { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
        ],
        loverEmail: [
          { required:true, validator: validatePass, trigger: 'change' }
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
    // this.userInfo = this.$route.params;
    // console.log(this.$route.params)
    // if(this.$store.state.accounts !== null){

    	// this.form.account = this.$store.state.accounts[0];
    // }
  	if(this.$store.state.info){ 
	  	// this.$store.state.info;
      this.getUserInfo(this.$store.state.info)
  	}
    // 获取用户Email nickname

  },
  
	methods: {
	  getUserInfo(val){
	  	// if(this.userInfo.email && this.userInfo.email.indexOf('@')>-1 ){

      // }else{
        // utils.getMemberInfo().then((res)=>{
     //      // if(resultObj.ID.length == 32){
     //        // 空
     //      if(res.email.indexOf('@')>-1){

            this.form.IDDisable = utils.isNothing(val.ID)
            this.form.ID = val.ID
            // }
        //     console.log(res);
        //     console.log(result);
            // if(!error){
            //  _.assign(this.form,res);
            // }
          // }else{
          //   if(typeof web3 == 'undefined'){
          //     console.log('no web3')

          //     this.$router.push({
          //       path:'/game/guide'
          //     })
          //   }else{
          //     console.log('no account')

          //     if(!this.form.account){
          //       this.$router.push({
          //         path:'/game/guide'
          //       })
          //     }else{
          //       this.$router.push({
          //         path:'/game/register'
          //       })
          //     }

          //   }
          // }
        // })
      // }
        console.log(this.form);
      console.log(this.form.IDDisable.length)
	  },
    onSubmit() {

      this.$refs.form.validate((valid) => {
        if (valid) {
          console.log(this.form.ID,this.form.loverNickName,this.form.loverEmail,this.form.msg,this.account)


          contractInstance.createCert(
            this.form.ID, 
            this.form.loverNickName,
            this.form.loverEmail,
            this.form.msg,
            {from:this.account, value: 100000000000000000, gas:300000},
            (error,result)=>{

            //  1000000000000000000

              console.log(error,result);
  						if (!error) {
              // console.log("Good way - the returned value after set method :");
             		console.log(result);
                debugger;
             		this.$store.dispatch('setPid',result);
                this.$message({
                  message:'Create vow success,',
                  type:'success'
                })

                this.$store.dispatch('setCreatePop',false);
                // contractInstance.getMemberInfo((error, result)=>{
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
              } else {
                console.log(error);// 根据error的值提示用户错误信息
              }

	   			});
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
      this.getUserInfo(val)
    }
	},
	
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.el-form{
	// padding:60px 0 ;

	width:600px;
	margin:0 auto;
}
.register-btn{
	background-color:#eb4c8b;
	border:none;
}
</style>
