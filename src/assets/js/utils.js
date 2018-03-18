import contract from '@/web3Contract'
import _ from 'lodash'
class useCon{
	getMemberInfo(){
		return new Promise((resolve,reject)=>{

			contract.contractInstance().getMemberInfo((error, result)=>{
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
	}

	getCertsByCertId(certId){
		return new Promise((resolve,reject)=>{
			contract.contractInstance().getCertsByCertId(certId,(error, result)=>{
				if(!error){
          console.log(result)
          var arr = ['nickName','email','loverNickName','loverEmail','certTime'];
          var resultObj = this.formatRes(arr,result);
          console.log(certId);
          resultObj.loveMsg = result[5];
          resultObj.certId =  certId

          console.log(resultObj)
    



					resolve(resultObj)
				}else{
					reject(error);
				}
			})
		})
	}	

	getCertsIdsByQuery(nick){
		return new Promise((resolve,reject)=>{

			contract.contractInstance.getCertsIdsByQuery(nick,(error, result)=>{
				if(!error){
					resolve(result)
				}else{
					reject(error);
				}
			})
		})
	}

	formatRes(arr,res){
		var obj= {};
		for(var i=0;i<arr.length;i++){
			console.log(typeof res[i])
			if(typeof res[i] == 'string'){
				obj[arr[i]] = _.trim(this.decode(res[i]))
				continue;
			}
			obj[arr[i]] = res[i]
		}
		return obj;
	}

	decode(hex){
		return contract.localWeb3.toAscii(hex)
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
					this.getMemberInfo().then(res => {
						console.log(res);
						if(res.email.indexOf('@')>-1){

							this.goto('/game/detail',context);
						}else{
							this.goto('/game/register',context);
						}
					})

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