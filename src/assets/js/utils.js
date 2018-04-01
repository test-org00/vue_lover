import contract from '@/web3Contract'
import _ from 'lodash'

const contractMain = contract.contractMain();
const contractQuery = contract.contractQuery();
class useCon{
	getMemberInfo(){
		return new Promise((resolve,reject)=>{
			contractQuery.then(res => { 
				console.log("contractQuery:",res);
			})
			contractMain.then(res=>{
				console.log("contractMain:",res);
				res.getMemberInfo((error, result)=>{
					if(!error){
						console.log(result);
						var arr = ['nickName','email','ID','certNumber'];
						var resultObj = this.formatRes(arr,result);
						resolve(resultObj)
					}else{
						reject(error);
					}
				})
			})
		})
	}
	getVowIdsByAddress(account){
		return new Promise((resolve,reject)=>{
			contractQuery.then(res=>{
				res.getVowIdsByAddress(account,(error, result)=>{
					if(!error){
						console.log('address',result)
						resolve(result)
					}else{
						reject(error);
					}
				})
			})
		})
	}
	getVowIdsByNickOrEmail(email,nickName){
		return new Promise((resolve,reject)=>{
			contractQuery.then(res=>{
				console.log(email,nickName);
				res.getVowIdsByNickOrEmail(email,nickName,(error, result)=>{
					if(!error){
						console.log(result);
						resolve(result)
					}else{
						reject(error);
					}
				})
			})
		})
	}


	createVowFn(ID,nickName,email,loverNickName,loverEmail,loveMsg,obj){
		// let arg =	arguments;
		// let len = arguments.length;
		console.log(arguments);
		return new Promise((resolve,reject)=>{
			contractMain.then(res=>{
				res.validateVowPolicy(ID,loverNickName,(error, result)=>{
					if(!error){
						console.log(result);
						if(result){

							res.createVow(
							 ID,
							 nickName,
							 email,
							 loverNickName,
							 loverEmail,
							 loveMsg,
							 obj,
							 (error, result)=>{
								if(!error){
									
									resolve(result)
								}else{
									reject('Create error');
								}
							})
						}else{
							// 验证失败
							reject('Sorry,同一个id, 只能给同一个lover昵称发')
						}
					}else{
						reject("Validate error")
					}
				})
			})
		})
	}

	getCertsByCertId(certId){
		return new Promise((resolve,reject)=>{
			contractQuery.then(res => { 
				console.log("contractQuery:",res);
			})
			contractQuery.then(res=>{
				console.log("contractMain:",res);
				res.getVowById(certId,(error, result)=>{
					if(!error){
	          console.log(result)
	          var arr = ['account','ID','nickName','email','loverNickName','loverEmail','certTime'];
	          var resultObj = this.formatRes(arr,result);
	          // console.log(certId);
	          resultObj.loveMsg = result[7];
	          // resultObj.certId =  certId

	          console.log(resultObj)
	    



						resolve(resultObj)
					}else{
						reject(error);
					}
				})
			})
		})
	}	

	getCertsIdsByQuery(nick){
		return new Promise((resolve,reject)=>{

			contractMain.then(res=>{
				res.getCertsIdsByQuery(nick,(error, result)=>{
					if(!error){
						resolve(result)
					}else{
						reject(error);
					}
				})
			})
		})
	}

	formatRes(arr,res){
		var obj= {};
		for(var i=0;i<arr.length;i++){
			console.log(typeof res[i])
			if(typeof res[i] == 'string'){
				obj[arr[i]] = _.trim(this.decode(res[i]))
				console.log(arr[i],_.trim(this.decode(res[i])));
				continue;
			}
			obj[arr[i]] = res[i]
		}
		return obj;
	}

	decode(hex){
		return contract.localWeb3().toAscii(hex)
	}

	supportBrowser(){
		let userAgent = navigator.userAgent; //取得浏览器的userAgent字符串 
		let isFF = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器 
		let isChrome = userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1; //判断Chrome浏览器 
  	
		return isFF || isChrome;
	}

	hadMetaMask(){
		// console.log(web3);
		if(typeof web3 !== 'undefined'){
			return true

		}else{
			return false
		} 
	}

	metaMaskLocked(context){
		console.log(context.account)
		if(context.account){
			return false
		}
		return true
	}

	isNothing(string){
		return !/\w/.test(string);
	}

	createVow(context){
		if(this.supportBrowser()){
			// support
			if(this.hadMetaMask()){
				if(!this.metaMaskLocked(context)){
					// 已登录metamask
					// 获取用户名
					// this.getMemberInfo().then(res => {
						// console.log(res);
						// if(res.email.indexOf('@')>-1){

							this.goto('/game/detail',context);
						// }else{
						// 	this.goto('/game/register',context);
						// }
					// })

				}else{
					this.goto('/locked',context);

				}

			}else{
				this.goto('/getMetaMask',context);
			}
		}else{
			this.goto('/unsupport',context);
		}
	}

	goto(path,context){
		if(context){
			context.$router.push({
				path:path
			})
		}else{

			window.open(location.origin + '/#'+path,'_blank');
		}

	}

}

export default new useCon();