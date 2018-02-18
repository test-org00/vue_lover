// import Web3 from 'web3'
import config from './config'
// import abiDecoder from 'ethereumjs-abi';
// import decoder from '../assets/js/abi_decoder';

// const SolidityCoder = require("web3/lib/solidity/coder.js");
window.addEventListener('load', function() {
  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof web3 !== 'undefined') {
    // Use the browser's ethereum provider
    var provider = web3.currentProvider
  } else {
    console.log('No web3? You should consider trying MetaMask!')
    window.location.href=location.origin+'/#/guide'
  }
})

// export let localWeb3 = web3 ? new Web3(web3.currentProvider) : null
// let localWeb3 = new Web3()
// localWeb3.setProvider(new Web3.providers.HttpProvider("http://localhost:8545"))

// 合约ABI
// 合约地址
// let localWeb3,contractInstance;
// if(typeof web3 == 'undefined'){
// 	localWeb3	= web3;
// 	contractInstance = web3.eth.contract(config.ABI).at(config.address);
// }else{

// }

// 通过ABI和地址获取已部署的合约对象
// console.log(decoder);
// decoder.addABI(config.ABI);
// export default decoder
export let localWeb3 = typeof web3 == 'undefined' ? null : web3; 
export let contractInstance = typeof web3 == 'undefined' ? null : web3.eth.contract(config.ABI).at(config.address);

console.log("The current web3 is:")
// console.log(localWeb3)

console.log("The current contract is:")
console.log(contractInstance)

