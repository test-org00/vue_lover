<template>
	<div>
		
	  <el-form ref="form" :rules="rules" status-icon :model="form" label-width="80px">
		  <el-form-item label="Nickname" >
		    <el-input v-model="form.nickname" disabled="true" ></el-input>
		  </el-form-item>
		  <el-form-item label="Email" >
		    <el-input v-model="form.email" disabled="true" ></el-input>
		  </el-form-item>
		  <el-form-item v-if="!form.ID" label="ID" prop="ID">
		    <el-input v-model="form.ID" placeholder="Enter your ID"></el-input>
		  </el-form-item>
      <el-form-item v-if="form.ID" label="ID">
        <el-input v-model="form.ID" disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="LoverNick" prop="nickname">
        <el-input v-model="form.loverNickname" placeholder="Enter your nickname"></el-input>
      </el-form-item>
      <el-form-item label="LoverEmail" prop="email">
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

export default {
  name: 'Register',
  data() {
  	var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入邮箱'));
        } else {
        	if(!/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value)){
        		callback(new Error('邮箱格式不正确'));
        	}
          // if (this.ruleForm2.checkPass !== '') {
          //   this.$refs.ruleForm2.validateField('checkPass');
          // }
          callback();
        }
      };
    return {
    	userInfo:null,
      form: {
        nickname: '',
        email: '',
        add: '',
        ID:'',
        loverNickname:'',
        loverEmail:'',
        msg:''
      
      },
      rules: {
        nickname: [
          { required: true, message: 'Enter you nickname', trigger: 'blur' },
          { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
        ],
        email: [
          { required:true, validator: validatePass, trigger: 'change' }
        ],
        ID:[
          { required: true, message: 'Enter your ID', trigger: 'blur' },
        ],
        msg:[
          { required: true, message: 'Enter your message', trigger: 'blur' },
        ]
        // add: [
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
  	this.form.add = this.$store.state.accounts[0];
  	// if(this.form.add){ 
	  	// this.$store.dispatch('fetchAccounts');
  	// }
  	// 获取用户Email nickname
  	this.getUserInfo(); 

  },
	methods: {
	  getUserInfo(){
	  	if(this.userInfo){

		  	contractInstance.getInfo(function(error, result){
		  		console.log(error, result)
		  		if(!error){
		  			_.assign(this.form,result);;
		  		}else{

		  		}
		  	})
	  	}
	  },
    onSubmit() {

      this.$refs.form.validate((valid) => {
        let that = this;
        if (valid) {
	   			contractInstance.createCert(this.form.loverNickname,this.form.loverEmail,this.form.msg,function(error, result){
            console.log(error,result);
						if (!error) {
            // console.log("Good way - the returned value after set method :");
           		console.log(result);
           		that.$store.dispatch('setPid',result);
              that.$message({
                message:'Create vow success',
                type:'success'
              })
              contractInstance.getInfo(function(error, result){
                console.log(error,result);
                // debugger;
                if(!error){
                  that.$router.push({
                    path:'/detail',
                    params:result
                  })
                }
              })
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
				this.form.add = cur[0];
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
