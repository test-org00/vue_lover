<template>
  <div class="content">
  	<h3>Invite your friends to ForeverLove Chain</h3>
  
		<div style="margin: 20px;"></div>
			<el-form :model="dynamicValidateForm" :label-position="labelPosition" :rules="rules" ref="dynamicValidateForm" label-width="60px" class="demo-dynamic">
			  <el-form-item
			    prop="email1"
			    label="Email"
			  
			  >
			    <el-input v-model="dynamicValidateForm.email1"></el-input>
			  </el-form-item>
        <el-form-item
          prop="email2"
          label="Email"
          
        >
          <el-input v-model="dynamicValidateForm.email2"></el-input>
        </el-form-item>
        <el-form-item
          prop="email3"
          label="Email"
          
        >
          <el-input v-model="dynamicValidateForm.email3"></el-input>
        </el-form-item>
			  <!-- <el-form-item
			    v-for="(email, index) in dynamicValidateForm.emails"
			    :label="'Email'"
			    :key="email.key"
			    :prop="'emails.' + index + '.value'"
			    :rules="[
			      { required: true, message: 'Enter your email', trigger: 'blur' },
			      { type: 'email', message: 'Incorrect email format', trigger: 'blur,change' }
			    ]"
			  >
			    <el-input v-model="email.value"></el-input><el-button @click.prevent="removeEmail(email)">Delete</el-button>
			  </el-form-item> -->
			  <el-form-item>
			    <el-button type="primary" @click="submitForm('dynamicValidateForm')">Send</el-button>
			    <!-- <el-button @click="addEmail">Add Email</el-button> -->
			    <!-- <el-button @click="resetForm('dynamicValidateForm')">重置</el-button> -->
			  </el-form-item>
			</el-form>



	  </div> 
	</div>
</template>
<script>
import Vows from '@/components/Vows'
import { contractInstance } from '@/web3Contract'
import utils from '@/assets/js/utils'
import req from '@/assets/js/req'
import axios from 'axios';

import validate from '@/assets/js/validate'
export default {
  name: 'Invite',
  props: ['account'],
  data() {
    return {
    	labelPosition:'left',
      dynamicValidateForm: {
        email1: '',
        email2: '',
        email3: '',
      },
      rules: {
        // nickname: [
        //   { required: true, message: 'Enter you nickname', trigger: 'blur' },
        //   // { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
        // ],
        email1: [
          { required: true, message: 'Enter your email', trigger: 'blur' },
          { type: 'email', message: 'Incorrect email format', trigger: 'blur,change' }
        ],
        email2: [
          {  validator: validate.emailNotRequired, trigger: 'change' }
        ],
        email3: [
          {  validator: validate.emailNotRequired, trigger: 'change' }
        ],
      }
    }
  },
  created() {
  },
  components: {

  },
  methods: {
  	submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
        	console.log('form',this.dynamicValidateForm)
        	let arr = [];
        	// arr.push({value:this.dynamicValidateForm.email})
        	let arr2 = this.dynamicValidateForm
        	let str='';
        	for(let item in arr2 ){
            str+=arr2[item] + ";";
            

          }
          str = str.substring(0,str.length-1);
	        req.invite({
					    "receiverEmails": str,
				  }).then(res =>{
        		console.log(res);
        		this.$router.push({
        			path:'/inviteSuccess'
        		})
        	}).catch(error=>{
        		console.log(error.msg);
        		console.log(error);
        		this.$message({
	          	message:`Request failed with status code ${error.response.status}`,
	          	type:'warning'
	          })

        	})
        } else {
          this.$message({
          	message:"Error submit",
          	type:'warning'
          })
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    removeEmail(item) {
      var index = this.dynamicValidateForm.emails.indexOf(item)
      if (index !== -1) {
        this.dynamicValidateForm.emails.splice(index, 1)
      }
    },
    // addEmail() {
    //   this.dynamicValidateForm.emails.push({
    //     value: '',
    //     key: Date.now()
    //   });
    // }
  },

  watch:{
    account(val){
      if(val){

        this.$router.push({
          path:'/game/detail'
        })
      }
    }
  }

}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.content{
  padding:60px 0 168px; 
  text-align:center;
  width:1200px;
  margin:0 auto;
  h3{
    text-align:left;
    line-height:34px;
    font-size:16px;
    margin-bottom:30px;
    color:#808080;
  }
  .el-form{
		width:560px;
  }
}
</style>
