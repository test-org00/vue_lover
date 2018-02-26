<template>
	<div>
		
	  <el-form ref="form" :rules="rules" status-icon :model="form" label-width="80px">
		  <el-form-item label="Nickname" >
		    <el-input v-model="form.nickName" :disabled="true"></el-input>
		  </el-form-item>
		  <el-form-item label="Email" >
		    <el-input v-model="form.email" :disabled="true"></el-input>
		  </el-form-item>
      <el-form-item label="ID" prop='ID'>
        <el-input v-model="form.ID" :disabled="true"></el-input>
      </el-form-item>
		  <el-form-item label="Wallet">
		    <el-input v-model="form.add" :disabled="true"></el-input>
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
    return {
    	showAlert:false,
    	msg:'',
      form: {
        nickName: '',
        email: '',
        add: '',
      
      },
      rules: {
        // nickName: [
        //   { required: true, message: 'Enter your nickname', trigger: 'blur' },
        // ],
        // email: [
        //   { required:true, validator: validatePass, trigger: 'change' }
        // ],
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
  		'info'
  	])
  },
  created(){
    // console.log(this.$route.params);
    // _.assign(this.form,this.$route.params);
  	// this.userInfo = this.$store.state.userInfo;
  	// if(this.userInfo){
  		// this.$store.dispatch('fetchAccounts');
  	// }
  	// this.form.add = this.$store.state.accounts[0];
  	// if(this.form.add){
	  // 	this.$store.dispatch('fetchAccounts');
  	// }
    var infoObj = this.$store.state.info;
    // console.log(infoObj);
    if(infoObj){
      this.initForm(infoObj);
    }
    
  },
	methods: {
	  initForm(infoObj) {
      console.log(infoObj)
      this.form.nickName = infoObj.nickName;
      this.form.email = infoObj.email;
      this.form.ID = infoObj.ID;
	  },
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
                name:'detail',
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
		account(val){
			console.log(val);
      this.form.add = val;
		},
    info(val){
      this.initForm(val)
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
