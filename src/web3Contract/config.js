export default  {
	address:"0x9a5b4ce470f2616dc2ff9567a2bd52dc6e71c675",
	ABI:[
 {
  "constant": true,
  "inputs": [],
  "name": "_numCouples",
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
    "name": "lover",
    "type": "address"
   }
  ],
  "name": "inLoveExpire",
  "outputs": [
   {
    "name": "reached",
    "type": "bool"
   }
  ],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
 },
 {
  "constant": true,
  "inputs": [],
  "name": "_numCoupleId",
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
    "name": "amount",
    "type": "uint256"
   }
  ],
  "name": "getDividends",
  "outputs": [
   {
    "name": "returnAmount",
    "type": "uint256"
   }
  ],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
 },
 {
  "constant": true,
  "inputs": [],
  "name": "getCoupleNum",
  "outputs": [
   {
    "name": "coupleNumber",
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
  "name": "numMembers",
  "outputs": [
   {
    "name": "numMember",
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
  "name": "manager",
  "outputs": [
   {
    "name": "manager",
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
    "name": "loverEmail",
    "type": "bytes32"
   }
  ],
  "name": "getMemberInfoByEmail",
  "outputs": [
   {
    "name": "nickname",
    "type": "string"
   },
   {
    "name": "email",
    "type": "bytes32"
   },
   {
    "name": "addr",
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
  "name": "checkDeposit",
  "outputs": [
   {
    "name": "selfAmount",
    "type": "uint256"
   },
   {
    "name": "coupleAmount",
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
    "name": "lover",
    "type": "address"
   }
  ],
  "name": "split",
  "outputs": [
   {
    "name": "reached",
    "type": "bool"
   }
  ],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
 },
 {
  "constant": true,
  "inputs": [],
  "name": "getInfo",
  "outputs": [
   {
    "components": [
     {
      "name": "nickname",
      "type": "string"
     },
     {
      "name": "email",
      "type": "bytes32"
     },
     {
      "name": "addr",
      "type": "address"
     },
     {
      "name": "account",
      "type": "uint256"
     },
     {
      "name": "deposit",
      "type": "uint256"
     },
     {
      "name": "bind_status",
      "type": "bytes32"
     },
     {
      "name": "contractFrom",
      "type": "address"
     },
     {
      "name": "contractTo",
      "type": "address"
     },
     {
      "name": "inLoveRequestStatus",
      "type": "bytes32"
     },
     {
      "name": "loverAddr",
      "type": "address"
     },
     {
      "name": "coupleId",
      "type": "uint256"
     },
     {
      "name": "registTime",
      "type": "uint256"
     },
     {
      "name": "depositTime",
      "type": "uint256"
     },
     {
      "name": "inLoveTime",
      "type": "uint256"
     },
     {
      "name": "splitTime",
      "type": "uint256"
     }
    ],
    "name": "member",
    "type": "tuple"
   }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
 },
 {
  "constant": true,
  "inputs": [],
  "name": "checkAccount",
  "outputs": [
   {
    "name": "account",
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
    "name": "member",
    "type": "address"
   }
  ],
  "name": "getMemberInfo",
  "outputs": [
   {
    "name": "nickname",
    "type": "string"
   },
   {
    "name": "email",
    "type": "bytes32"
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
  "constant": false,
  "inputs": [
   {
    "name": "lover",
    "type": "address"
   }
  ],
  "name": "requestInLove",
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
  "constant": false,
  "inputs": [
   {
    "name": "agree",
    "type": "bool"
   }
  ],
  "name": "inLoveConfirm",
  "outputs": [
   {
    "name": "reached",
    "type": "bool"
   }
  ],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
 },
 {
  "constant": true,
  "inputs": [],
  "name": "managePrice",
  "outputs": [
   {
    "name": "managerPrice",
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
  "name": "_owner",
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
  "name": "_managerAccount",
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
  "inputs": [],
  "name": "_totalDeposit",
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
  "inputs": [],
  "name": "checkBalance",
  "outputs": [
   {
    "name": "account",
    "type": "uint256"
   },
   {
    "name": "selfAmount",
    "type": "uint256"
   },
   {
    "name": "coupleAmount",
    "type": "uint256"
   }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
 },
 {
  "constant": false,
  "inputs": [],
  "name": "inLoveRemain",
  "outputs": [
   {
    "name": "reached",
    "type": "bool"
   }
  ],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
 },
 {
  "constant": false,
  "inputs": [
   {
    "name": "email",
    "type": "bytes32"
   }
  ],
  "name": "requestInLoveByEmail",
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
  "constant": false,
  "inputs": [
   {
    "name": "nickname",
    "type": "string"
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
  "constant": false,
  "inputs": [],
  "name": "chargeForLove",
  "outputs": [
   {
    "name": "selfAmount",
    "type": "uint256"
   },
   {
    "name": "coupleAmount",
    "type": "uint256"
   }
  ],
  "payable": true,
  "stateMutability": "payable",
  "type": "function"
 },
 {
  "inputs": [
   {
    "name": "manager",
    "type": "address"
   }
  ],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "constructor"
 },
 {
  "anonymous": false,
  "inputs": [
   {
    "indexed": false,
    "name": "addr1",
    "type": "address"
   },
   {
    "indexed": false,
    "name": "addr2",
    "type": "address"
   }
  ],
  "name": "LogSplitDeposit",
  "type": "event"
 },
 {
  "anonymous": false,
  "inputs": [
   {
    "indexed": false,
    "name": "member",
    "type": "address"
   },
   {
    "indexed": false,
    "name": "amount",
    "type": "uint256"
   }
  ],
  "name": "LogIncome",
  "type": "event"
 }
]

}
