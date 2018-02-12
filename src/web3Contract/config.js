export default  {
	address:"0x1659e1d36d36253e852da7c87844b4035cf9b949",
	ABI:
[
 {
  "constant": true,
  "inputs": [],
  "name": "_fundationWallet",
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
  "constant": false,
  "inputs": [
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
  "constant": false,
  "inputs": [
   {
    "name": "nickName",
    "type": "bytes32"
   },
   {
    "name": "ID",
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
  "inputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "constructor"
 }
]
}
