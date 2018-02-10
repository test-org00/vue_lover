import axios from 'axios'

const myAppToken = "9GS8BJZG2FUUHBQBHFIXTA4GH9MIWM3EBK"
// const host = 'https://api.etherscan.io/api'
const host = 'https://ropsten.etherscan.io/api'



class EthApi {
	getTransactionsList(address){
		return axios.get(`${host}?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&page=1&offset=100&sort=asc&apikey=${myAppToken}`)
	}
}

export default new EthApi()