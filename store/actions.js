// import axios from 'axios'
import Services from './services'

export default {
	fetchAccount ({ state }) {
    var accountInterval = setInterval(function() {
    	const res = Services.getAccount()
		  if (res[0] !== state.accounts[0]) {
		    state.accounts = res;
		    // updateInterface();
		  }
		}, 100);
  },
  fetchNetwork({state}){
    var accountInterval = setInterval(function() {
      const res = Services.getNetwork()
      if (res !== state.network) {
        state.network = res;
        // updateInterface();
      }
    }, 100);
  },
  async fetchBalance ({ state }) {
    const res = await Services.getAccount(state.accounts[0])
    console.log('balance:')
    console.log(res);
    state.balance = res
    return res
  },
  setPid ({ commit }, pid) {
    commit('SET_PID', pid)
  },
}