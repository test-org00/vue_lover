// import web3 from 'web3'
import { contract } from '@/assets/js/config'
// import abiDecoder from 'ethereumjs-abi';
// import decoder from '../assets/js/abi_decoder';

// const SolidityCoder = require("web3/lib/solidity/coder.js");
let localWeb3,contractInstance; 
function getWeb3(){
    const Web3 = require('web3');
    console.log(Web3);
    return null
    // return localWeb3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

export default{
  contractInstance(){
    return new Promise((resolve,reject)=>{
      if(!contractInstance){
        window.addEventListener('load', function() {
          // Checking if Web3 has been injected by the browser (Mist/MetaMask)
          if (typeof web3 !== 'undefined') {
            // Use the browser's ethereum provider
            var provider = web3.currentProvider
            
          } else {
            console.log('No web3? You should consider trying MetaMask!')
            if(!localWeb3){
              localWeb3 = getWeb3();
            } 
            // var contractObj = localWeb3.eth.contract(contract.ABI);
            contractInstance = localWeb3.eth.contract(contract.ABI).at(contract.address);
            resolve(contractInstance);
          }
        })
        if (typeof web3 !== 'undefined') {
          contractInstance = web3.eth.contract(contract.ABI).at(contract.address);
          resolve(contractInstance);

        }

      }else{
        resolve(contractInstance);
      }
    })
  },
  localWeb3(){
    // console.log(web3);
    if(typeof web3 == 'undefined'){
      return localWeb3 = getWeb3();
    }else{
      return web3;
    }
  }

} 

