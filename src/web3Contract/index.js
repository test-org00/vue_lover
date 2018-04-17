// import web3 from 'web3'
import { contract1,contract2 } from '@/assets/js/config'
// import abiDecoder from 'ethereumjs-abi';
// import decoder from '../assets/js/abi_decoder';

// const SolidityCoder = require("web3/lib/solidity/coder.js");
let localWeb3,contractMain,contractQuery; 
function getWeb3(){
    const Web3 = require('web3');
    console.log(Web3);
    return null
    // return localWeb3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

export default{
  contractMain(){
    return new Promise((resolve,reject)=>{
      if(!contractMain){
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
            contractMain = localWeb3.eth.contract(contract1.ABI).at(contract1.address);
            resolve(contractMain);
          }
        })
        if (typeof web3 !== 'undefined') {
          contractMain = web3.eth.contract(contract1.ABI).at(contract1.address);
          resolve(contractMain);

        }

      }else{
        resolve(contractMain);
      }
    })
  },
  contractQuery(){
    return new Promise((resolve,reject)=>{
      if(!contractQuery){
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
            contractQuery = localWeb3.eth.contract(contract2.ABI).at(contract2.address);
            resolve(contractQuery);
          }
        })
        if (typeof web3 !== 'undefined') {
          contractQuery = web3.eth.contract(contract2.ABI).at(contract2.address);
          resolve(contractQuery);

        }

      }else{
        resolve(contractQuery);
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

