import { contractInstance } from '@/web3Contract'

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
			obj[arr[i]] = web3.toAscii(res[i])
		}
		return obj;
	}

	decode(hex){
		web3.toAscii(hex)
	}
}

export default new useCon;