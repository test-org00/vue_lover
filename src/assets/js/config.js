
export	let contract1 = {

		address:"0x7b79c8cbfe0d5036470f7e6c87ae9e7d9b79888f",
		ABI:[
		 {
		  "constant": true,
		  "inputs": [],
		  "name": "cost",
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
		    "name": "_cost",
		    "type": "uint256"
		   }
		  ],
		  "name": "updateCost",
		  "outputs": [],
		  "payable": false,
		  "stateMutability": "nonpayable",
		  "type": "function"
		 },
		 {
		  "constant": false,
		  "inputs": [],
		  "name": "getVowPolicyVersion",
		  "outputs": [
		   {
		    "name": "",
		    "type": "address"
		   }
		  ],
		  "payable": false,
		  "stateMutability": "nonpayable",
		  "type": "function"
		 },
		 {
		  "constant": false,
		  "inputs": [],
		  "name": "unpause",
		  "outputs": [],
		  "payable": false,
		  "stateMutability": "nonpayable",
		  "type": "function"
		 },
		 {
		  "constant": true,
		  "inputs": [],
		  "name": "manager",
		  "outputs": [
		   {
		    "name": "",
		    "type": "address"
		   }
		  ],
		  "payable": false,
		  "stateMutability": "view",
		  "type": "function"
		 },
		 {
		  "constant": true,
		  "inputs": [],
		  "name": "paused",
		  "outputs": [
		   {
		    "name": "",
		    "type": "bool"
		   }
		  ],
		  "payable": false,
		  "stateMutability": "view",
		  "type": "function"
		 },
		 {
		  "constant": false,
		  "inputs": [],
		  "name": "pause",
		  "outputs": [],
		  "payable": false,
		  "stateMutability": "nonpayable",
		  "type": "function"
		 },
		 {
		  "constant": true,
		  "inputs": [],
		  "name": "owner",
		  "outputs": [
		   {
		    "name": "",
		    "type": "address"
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
		    "name": "newInvoker",
		    "type": "address"
		   }
		  ],
		  "name": "changeInvoker",
		  "outputs": [],
		  "payable": false,
		  "stateMutability": "nonpayable",
		  "type": "function"
		 },
		 {
		  "constant": false,
		  "inputs": [
		   {
		    "name": "newManager",
		    "type": "address"
		   }
		  ],
		  "name": "changeManager",
		  "outputs": [],
		  "payable": false,
		  "stateMutability": "nonpayable",
		  "type": "function"
		 },
		 {
		  "constant": false,
		  "inputs": [
		   {
		    "name": "newOwner",
		    "type": "address"
		   }
		  ],
		  "name": "changeOwner",
		  "outputs": [],
		  "payable": false,
		  "stateMutability": "nonpayable",
		  "type": "function"
		 },
		 {
		  "constant": false,
		  "inputs": [
		   {
		    "name": "_ID",
		    "type": "bytes32"
		   },
		   {
		    "name": "_nickName",
		    "type": "bytes32"
		   },
		   {
		    "name": "_email",
		    "type": "bytes32"
		   },
		   {
		    "name": "_loverNickName",
		    "type": "bytes32"
		   },
		   {
		    "name": "_loverEmail",
		    "type": "bytes32"
		   },
		   {
		    "name": "_vowMsg",
		    "type": "string"
		   }
		  ],
		  "name": "createVow",
		  "outputs": [
		   {
		    "name": "vowId",
		    "type": "uint256"
		   }
		  ],
		  "payable": true,
		  "stateMutability": "payable",
		  "type": "function"
		 },
		 {
		  "constant": false,
		  "inputs": [
		   {
		    "name": "newVowPolicyAddress",
		    "type": "address"
		   }
		  ],
		  "name": "updateVowPolicyVersion",
		  "outputs": [],
		  "payable": false,
		  "stateMutability": "nonpayable",
		  "type": "function"
		 },
		 {
		  "constant": true,
		  "inputs": [],
		  "name": "invoker",
		  "outputs": [
		   {
		    "name": "",
		    "type": "address"
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
		    "name": "_ID",
		    "type": "bytes32"
		   },
		   {
		    "name": "_loverNickName",
		    "type": "bytes32"
		   }
		  ],
		  "name": "validateVowPolicy",
		  "outputs": [
		   {
		    "name": "",
		    "type": "bool"
		   }
		  ],
		  "payable": false,
		  "stateMutability": "view",
		  "type": "function"
		 },
		 {
		  "inputs": [
		   {
		    "name": "_manager",
		    "type": "address"
		   },
		   {
		    "name": "vowPolicyVersion",
		    "type": "address"
		   }
		  ],
		  "payable": false,
		  "stateMutability": "nonpayable",
		  "type": "constructor"
		 }
		]
	};
export	let contract2 = {

	"address":"0x116e1d37a3f61f987da35cdfebf48e5b2127c2a8",
	"ABI":[{
		"constant": false,
		"inputs": [{
				"name": "_addr",
				"type": "address"
			},
			{
				"name": "_ID",
				"type": "bytes32"
			},
			{
				"name": "_nickName",
				"type": "bytes32"
			},
			{
				"name": "_email",
				"type": "bytes32"
			},
			{
				"name": "_loverNickName",
				"type": "bytes32"
			},
			{
				"name": "_loverEmail",
				"type": "bytes32"
			},
			{
				"name": "_vowMsg",
				"type": "string"
			}
		],
		"name": "createVow",
		"outputs": [{
			"name": "",
			"type": "uint256"
		}],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [{
			"name": "_addr",
			"type": "address"
		}],
		"name": "getVowIdsByAddress",
		"outputs": [{
			"name": "",
			"type": "uint256[]"
		}],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "unpause",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "manager",
		"outputs": [{
			"name": "",
			"type": "address"
		}],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [{
			"name": "_addr",
			"type": "address"
		}],
		"name": "getLoverVowCount",
		"outputs": [{
			"name": "",
			"type": "uint256"
		}],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "paused",
		"outputs": [{
			"name": "",
			"type": "bool"
		}],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [{
				"name": "_email",
				"type": "bytes32"
			},
			{
				"name": "_nickName",
				"type": "bytes32"
			}
		],
		"name": "getVowIdsByNickOrEmail",
		"outputs": [{
			"name": "",
			"type": "uint256[]"
		}],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [{
			"name": "vowID",
			"type": "uint256"
		}],
		"name": "getVowById",
		"outputs": [{
				"name": "_addr",
				"type": "address"
			},
			{
				"name": "_ID",
				"type": "bytes32"
			},
			{
				"name": "_nickName",
				"type": "bytes32"
			},
			{
				"name": "_email",
				"type": "bytes32"
			},
			{
				"name": "_loverNickName",
				"type": "bytes32"
			},
			{
				"name": "_loverEmail",
				"type": "bytes32"
			},
			{
				"name": "_createdTime",
				"type": "uint64"
			},
			{
				"name": "_vowMsg",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "pause",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [{
			"name": "",
			"type": "address"
		}],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [{
			"name": "newInvoker",
			"type": "address"
		}],
		"name": "changeInvoker",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [{
			"name": "newManager",
			"type": "address"
		}],
		"name": "changeManager",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [{
			"name": "newOwner",
			"type": "address"
		}],
		"name": "changeOwner",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "vowTotalCount",
		"outputs": [{
			"name": "",
			"type": "uint256"
		}],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "invoker",
		"outputs": [{
			"name": "",
			"type": "address"
		}],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [{
				"name": "_ID",
				"type": "bytes32"
			},
			{
				"name": "_loverNickName",
				"type": "bytes32"
			}
		],
		"name": "validateVowPolicy",
		"outputs": [{
			"name": "",
			"type": "bool"
		}],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	}
]
}
export let etherscan = {
	apiKey:'9GS8BJZG2FUUHBQBHFIXTA4GH9MIWM3EBK',
	prefix:'https://ropsten.etherscan.io/'
}

// export contract;
// export etherscan;
