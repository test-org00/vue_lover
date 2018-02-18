<template>
	<div>
		
	  <el-form ref="form" :rules="rules" status-icon :model="form" label-width="80px">
		  <el-form-item label="Nickname" >
		    <el-input v-model="form.nickname" :disabled="true" ></el-input>
		  </el-form-item>
		  <el-form-item label="Email" >
		    <el-input v-model="form.email" :disabled="true" ></el-input>
		  </el-form-item>
		  
      <el-form-item v-if="form.IDDisable.length!==32" label="ID">
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
		  <el-form-item>
		    <el-button class="register-btn" type="primary" @click="onSubmit">Create</el-button>
		  </el-form-item>
			
		</el-form>
	</div>
</template>

<script>
import _ from 'lodash'
import { contractInstance } from '@/web3Contract'
import { mapState } from 'vuex'
import useCon from '@/assets/js/utils'

export default {
  name: 'Register',
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
    return {
    	userInfo:{},
      form: {
        nickname: '',
        email: '',
        account: null,
        ID:'',
        IDDisable:'',
        loverNickName:'',
        loverEmail:'',
        msg:''
      
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
  		'accounts'
  	])
  },
  created(){
    console.log(contractInstance)
    this.userInfo = this.$route.params;
    if(this.$store.state.accounts !== null){

    	this.form.account = this.$store.state.accounts[0];
    }
  	if(!this.form.account){ 
	  	this.$store.dispatch('fetchAccounts');

  	}else{

  	 this.getUserInfo(); 
    }
    // 获取用户Email nickname

  },
  
	methods: {
	  getUserInfo(){
	  	if(this.userInfo.email && this.userInfo.email.indexOf('@')>-1 ){

        _.assign(this.form,this.userInfo);
      }else{
		  	contractInstance.getMemberInfo((error, result)=>{
	  		  var arr = ['nickName','email','ID','certNumber'];
              // console.log(res,web3.toAscii(res[1]));
          var resultObj = useCon.formatRes(arr,result);
          // if(resultObj.ID.length == 32){
            // 空
          if(resultObj.email.indexOf('@')>-1){

            this.form.IDDisable = resultObj.ID
            // }
            console.log(resultObj);
            console.log(result);
  		  		if(!error){
  		  			_.assign(this.form,resultObj);
  		  		}
          }else{
            if(typeof web3 == 'undefined'){
              console.log('no web3')

              this.$router.push({
                path:'/game/guide'
              })
            }else{
              console.log('no account')

              if(!this.form.account){
                this.$router.push({
                  path:'/game/guide'
                })
              }else{
                this.$router.push({
                  path:'/game/register'
                })
              }

            }
          }
		  	})
      }
      console.log(this.form.ID.length)
	  },
    onSubmit() {

      this.$refs.form.validate((valid) => {
        let that = this;
        if (valid) {
	   			contractInstance.createCert(this.form.ID, this.form.loverNickName,this.form.loverEmail,this.form.msg,function(error, result){
            console.log(error,result);
						if (!error) {
            // console.log("Good way - the returned value after set method :");
           		console.log(result);
           		that.$store.dispatch('setPid',result);
              that.$message({
                message:'Create vow success',
                type:'success'
              })
              // contractInstance.getMemberInfo((error, result)=>{
                // var arr = ['nickName','email','ID','certNumber'];
                // console.log(res,web3.toAscii(res[1]));
                // var resultObj = useCon.formatRes(arr,result);
                // console.log(resultObj);
                // debugger;
                console.log(that.form.email);
                if(!error){
                  that.$router.push({
                    name:'certificate',
                    params:{
                      email:that.form.email
                    }
                  })
                }
              // })
            } else {
              console.log(error);// 根据error的值提示用户错误信息
            }

	   			});
          // alert('submit!');
          console.log(contractInstance)
        } else {
          console.log('error submit!!');
          return false;
        }
      });
  	}
	},
	watch:{
		accounts:{
			handler(cur, old){
        console.log(2);
        if(cur !== null){
  				this.form.account = cur[0];
          
          this.getUserInfo();
        }
			},
			deep:true
		}
	},
	
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.el-form{
	padding:60px 0 ;

	width:600px;
	margin:0 auto;
}
.register-btn{
	background-color:#eb4c8b;
	border:none;
}
</style>
