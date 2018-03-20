<template>
	<div>
		
	  <el-form ref="form" :rules="rules" status-icon :model="form" label-width="80px">
		  <el-form-item label="Nickname" prop="nickname">
		    <el-input v-model="form.nickname" placeholder="Enter you nickname"></el-input>
		  </el-form-item>
		  <el-form-item label="Email" prop="email">
		    <el-input v-model="form.email" placeholder="forexample@email.com"></el-input>
		  </el-form-item>
     <!--  <el-form-item label="ID" prop='ID'>
        <el-input v-model="form.ID" placeholder="Enter you ID"></el-input>
      </el-form-item> -->
		  <el-form-item label="Wallet">
		    <el-input v-model="form.add" :disabled="true"></el-input>
		  </el-form-item>
		  <el-form-item>
		    <el-button class="register-btn" type="primary" @click="onSubmit">Regist</el-button>
		  </el-form-item>
			
		</el-form>
	</div>
</template>

<script>
import { contractInstance } from '@/web3Contract'
// import decoder from '@/web3Contract'
import { mapState } from 'vuex'
import utils from '@/assets/js/utils'


export default {
  name: 'Register',
  props:['account'],
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
    	showAlert:false,
    	msg:'',
      form: {
        nickname: '',
        email: '',
        add: '',
      
      },
      rules: {
        nickname: [
          { required: true, message: '请输入您的昵称', trigger: 'blur' },
          { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
        ],
        email: [
          { required:true, validator: validatePass, trigger: 'change' }
        ],
        // add: [
        //   { required: true, message: '请选择日期', trigger: 'change' }
        // ]
      }
    };
  },
 
  created(){
  	// this.form.add = this.$store.state.accounts!==null ? this.$store.state.accounts[0] : null;
  	// if(this.form.add){
	  	// this.$store.dispatch('fetchAccounts');
  	// }
    // console.log(decoder);
    // var result = decoder.decodeLogs('0x27d1c745adf188fadccb969499b521a7d2054351389551987c55b69624757e52');
    // console.log(result);
  },
	methods: {
	  // onSubmit() {
	  // },
    onSubmit() {

      this.$refs.form.validate((valid) => {
        let that = this;
        if (valid) {
	   			contractInstance.regist(this.form.nickname,this.form.email,function(error, result){
            console.log(error,result);
            // 注册如何判断失败

						if (!error) {
            // console.log("Good way - the returned value after set method :");
           		// that.$store.dispatch('setPid',result);
              // switch(result){
              //   case 0:
                  that.$message({
                    message:'Regist success',
                    type:'success'
                  })
              //     break
              //   case 1:
              //     that.$message({
              //       message:'Address had been registed',
              //       type:'warning'
              //     })
              //     break
              //   case 2:
              //     that.$message({
              //       message:'Email had been registed',
              //       type:'warning'
              //     })
              //     break
              // }
              utils.getMemberInfo().then(res=>{
                console.log(error,res);
                // debugger;
                if(!error){

                  // if(!result.email){
                    // that.$router.push({
                    //   path:'/register',
                    // })
                    // that.$message({
                    //   message:'Regist error',
                    //   type:'warning'
                    // })
                  // }else{
                    // var arr = ['nickName','email','ID','certNumber'];
                    // console.log(res,web3.toAscii(res[1]));
                    // var resultObj = utils.formatRes(arr,res);
                    that.$router.push({
                      name:'detail',
                      params:res
                    })
                    that.$store.dispatch('setInfo',res);
                  // }
                }
              })
              // this.$router.push({
              //   path:'/createCert',
                
              // })
            } else {
              // console.log(error);// 根据error的值提示用户错误信息
              // that.showAlert = true;
              // that.msg = 'error'
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
			console.log('regist',val)
      this.form.add = val;
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
