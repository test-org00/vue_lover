import axios from 'axios';
import {etherscan} from '@/assets/js/config';
console.log('etherscan',etherscan)
class Req {
	certTo(data){
		return axios({
			url:'/v1/foreverlovechain/cert',
			method: 'post',
		  data: data
		})
	}

	invite(data){
		return axios({
			url:'/v1/foreverlovechain/invite',
			method: 'post',
		  data: data
		})
	}

	checkTransactionStatus(transaction){
		return axios({
			url: `${etherscan.prefix}/api?module=transaction&action=gettxreceiptstatus&txhash=${transaction}&apikey=${etherscan.apikey}`,
			method: 'get',
		})
	}
	
	loopTransStatus(transaction,resolve,reject){

		this.checkTransactionStatus(transaction).then(res => {
			if(res.status == 200){
        var status = res.data.result.status;
				if(status == "1" ){
					// success
					resolve(status);
				}else if(status == "0"){
					// fail
					reject(status);
				}else{
					setTimeout(()=>{
						this.loopTransStatus(transaction,resolve,reject)
					},1000)
				}
			}
		})
	}

	getTransStatus(transaction){
		debugger;
		return new Promise((resolve,reject)=>{
			this.loopTransStatus(transaction,resolve,reject)
		})
	}
}	

export default new Req()