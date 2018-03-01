
export	let contract = {

		address:"0x4a3b13272ea4856fa3f0351575746165e62211a4",
		ABI:[{
		  "constant": false,
		  "inputs": [
			   {
			    "name": "ID",
			    "type": "bytes32"
			   },
			   {
			    "name": "loverNickName",
			    "type": "bytes32"
			   },
			   {
			    "name": "loverEmail",
			    "type": "bytes32"
			   },
			   {
			    "name": "loveMsg",
			    "type": "string"
			   }
			  ],
			  "name": "createCert",
			  "outputs": [
			   {
			    "name": "result",
			    "type": "uint256"
			   },
			   {
			    "name": "certId",
			    "type": "uint256"
			   },
			   {
			    "name": "passKey",
			    "type": "bytes32"
			   }
			  ],
			  "payable": true,
			  "stateMutability": "payable",
			  "type": "function"
			 },
			 {
			  "constant": true,
			  "inputs": [],
			  "name": "getAllMembersAddress",
			  "outputs": [
			   {
			    "name": "members",
			    "type": "address[]"
			   }
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			 },
			 {
			  "constant": true,
			  "inputs": [
			   {
			    "name": "certId",
			    "type": "uint256"
			   },
			   {
			    "name": "addr",
			    "type": "address"
			   }
			  ],
			  "name": "getCertsByCertIdAndAddress",
			  "outputs": [
			   {
			    "name": "nickName",
			    "type": "bytes32"
			   },
			   {
			    "name": "email",
			    "type": "bytes32"
			   },
			   {
			    "name": "loverNickName",
			    "type": "bytes32"
			   },
			   {
			    "name": "loverEmail",
			    "type": "bytes32"
			   },
			   {
			    "name": "certTime",
			    "type": "uint256"
			   },
			   {
			    "name": "loveMsg",
			    "type": "string"
			   }
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			 },
			 {
			  "constant": true,
			  "inputs": [],
			  "name": "getMemberInfo",
			  "outputs": [
			   {
			    "name": "nickName",
			    "type": "bytes32"
			   },
			   {
			    "name": "email",
			    "type": "bytes32"
			   },
			   {
			    "name": "ID",
			    "type": "bytes32"
			   },
			   {
			    "name": "certNumber",
			    "type": "uint256"
			   }
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			 },
			 {
			  "constant": true,
			  "inputs": [],
			  "name": "_numMembers",
			  "outputs": [
			   {
			    "name": "",
			    "type": "uint256"
			   }
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			 },
			 {
			  "constant": true,
			  "inputs": [
			   {
			    "name": "certId",
			    "type": "uint256"
			   }
			  ],
			  "name": "getCertsByCertId",
			  "outputs": [
			   {
			    "name": "nickName",
			    "type": "bytes32"
			   },
			   {
			    "name": "email",
			    "type": "bytes32"
			   },
			   {
			    "name": "loverNickName",
			    "type": "bytes32"
			   },
			   {
			    "name": "loverEmail",
			    "type": "bytes32"
			   },
			   {
			    "name": "certTime",
			    "type": "uint256"
			   },
			   {
			    "name": "loveMsg",
			    "type": "string"
			   }
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			 },
			 {
			  "constant": true,
			  "inputs": [
			   {
			    "name": "emailOrNick",
			    "type": "bytes32"
			   }
			  ],
			  "name": "getCertsIdsByQuery",
			  "outputs": [
			   {
			    "name": "",
			    "type": "uint256[]"
			   }
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			 },
			 {
			  "constant": true,
			  "inputs": [],
			  "name": "getCertsNumber",
			  "outputs": [
			   {
			    "name": "certNumber",
			    "type": "uint256"
			   }
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			 },
			 {
			  "constant": true,
			  "inputs": [],
			  "name": "_totalCertsNumber",
			  "outputs": [
			   {
			    "name": "",
			    "type": "uint256"
			   }
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			 },
			 {
			  "constant": false,
			  "inputs": [
			   {
			    "name": "nickName",
			    "type": "bytes32"
			   }
			  ],
			  "name": "updateProfile",
			  "outputs": [
			   {
			    "name": "result",
			    "type": "uint256"
			   }
			  ],
			  "payable": false,
			  "stateMutability": "nonpayable",
			  "type": "function"
			 },
			 {
			  "constant": true,
			  "inputs": [
			   {
			    "name": "addr",
			    "type": "address"
			   }
			  ],
			  "name": "getMemberInfoByAddress",
			  "outputs": [
			   {
			    "name": "nickName",
			    "type": "bytes32"
			   },
			   {
			    "name": "email",
			    "type": "bytes32"
			   },
			   {
			    "name": "ID",
			    "type": "bytes32"
			   },
			   {
			    "name": "certNumber",
			    "type": "uint256"
			   }
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			 },
			 {
			  "constant": false,
			  "inputs": [
			   {
			    "name": "nickName",
			    "type": "bytes32"
			   },
			   {
			    "name": "email",
			    "type": "bytes32"
			   }
			  ],
			  "name": "regist",
			  "outputs": [
			   {
			    "name": "result",
			    "type": "uint256"
			   }
			  ],
			  "payable": false,
			  "stateMutability": "nonpayable",
			  "type": "function"
			 },
			 {
			  "inputs": [
			   {
			    "name": "managerWallet",
			    "type": "address"
			   }
			  ],
			  "payable": false,
			  "stateMutability": "nonpayable",
			  "type": "constructor"
			 }
			]
	};
export let etherscan = {
	apiKey:'9GS8BJZG2FUUHBQBHFIXTA4GH9MIWM3EBK',
	prefix:'https://ropsten.etherscan.io/'
}

// export contract;
// export etherscan;
