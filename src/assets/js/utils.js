import { contractInstance,localWeb3 } from '@/web3Contract'
import _ from 'lodash'
class useCon{
	getMemberInfo(){
		return new Promise((resolve,reject)=>{

			contractInstance.getMemberInfo((error, result)=>{
				if(!error){
					resolve(result)
				}else{
					reject(error);
				}
			})
		})
	}

	getCertsByCertId(certId){
		return new Promise((resolve,reject)=>{

			contractInstance.getCertsByCertId(nick,(error, result)=>{
				if(!error){
					resolve(result)
				}else{
					reject(error);
				}
			})
		})
	}	

	getCertsIdsByQuery(nick){
		return new Promise((resolve,reject)=>{

			contractInstance.getCertsIdsByQuery(nick,(error, result)=>{
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
				obj[arr[i]] = _.trim(this.decode(res[i]).toString())
				continue;
			}
			obj[arr[i]] = res[i]
		}
		return obj;
	}

	decode(hex){
		return localWeb3.toAscii(hex)
	}
}

export default new useCon();