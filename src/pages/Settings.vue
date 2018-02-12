<template>
	<div>
		
	  <el-form ref="form" :rules="rules" status-icon :model="form" label-width="80px">
		  <el-form-item label="Nickname" prop="nickname">
		    <el-input v-model="form.nickname" placeholder="Enter you nickname"></el-input>
		  </el-form-item>
		  <el-form-item label="Email" prop="email">
		    <el-input v-model="form.email" placeholder="forexample@email.com"></el-input>
		  </el-form-item>
      <el-form-item label="ID" prop='ID'>
        <el-input v-model="form.ID" placeholder="Enter you ID"></el-input>You can only modify ID once
      </el-form-item>
		  <el-form-item label="Wallet">
		    <el-input v-model="form.add" disabled="true"></el-input>
		  </el-form-item>
		  <el-form-item>
		    <el-button class="register-btn" type="primary" @click="onSubmit">Update</el-button>
		  </el-form-item>
			
		</el-form>
	</div>
</template>

<script>
import _ from 'lodash'
import { contractInstance } from '@/web3Contract'
import { mapState } from 'vuex'

export default {
  name: 'Settings',
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
    	showAlert:false,
    	msg:'',
    	form:null,
      form: {
        nickname: '',
        email: '',
        add: '',
      
      },
      rules: {
        nickname: [
          { required: true, message: 'Enter your nickname', trigger: 'blur' },
          // { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
        ],
        email: [
          { required:true, validator: validatePass, trigger: 'change' }
        ],
        ID: [
          { required:true, message: 'Enter your ID' , trigger: 'change' }
        ],
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
    _.assign(this.form,this.$route.params);
  	// this.userInfo = this.$store.state.userInfo;
  	// if(this.userInfo){
  		// this.$store.dispatch('fetchAccounts');
  	// }
  	// this.form.add = this.$store.state.accounts[0];
  	// if(this.form.add){
	  // 	this.$store.dispatch('fetchAccounts');
  	// }
  },
	methods: {
	  // onSubmit() {
	  // },
    onSubmit() {

      this.$refs.form.validate((valid) => {
        let that = this;
        if (valid) {
	   			contractInstance.updateProfile(this.form.nickname,this.form.email,this.form.ID,function(error, result){
            console.log(error,result);
						if (!error) {
            // console.log("Good way - the returned value after set method :");
           		console.log(result);
           		that.$store.dispatch('setPid',result);
              that.$message({
                message:'update success',
                type:'success'
              })
              that.$router.push({
                path:'/detail',
                params:result
              })
            } else {
              console.log(error);// 根据error的值提示用户错误信息
              that.showAlert = true;
              that.msg = 'error'
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
				this.form = cur[0];
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
