// import axios from 'axios'
import Services from './services'

export default {
	fetchAccount ({ state }) {
    var accountInterval = setInterval(function() {
    	const res = Services.getAccount()
      if(state.accounts == null){
        state.accounts = res;
      }else{

  		  if (res[0] !== state.accounts[0]) {
  		    state.accounts = res;
  		  }
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
  setSearch ({ commit }, search) {
    commit('SET_SEARCH', search)
  },

  setInfo({commit}, info) {
    commit('SET_INFO', info)
  },
  setCreatePop({commit}, bool){
    commit('SET_CREATEPOP',bool);
  },
  setConfess({commit}, bool){
    commit('SET_CONFESS',bool);
  },
  setListSearch({commit}){
    commit('SET_LIST_SEARCH');
  },
  setCurName({commit},name){
    commit('SET_CUR_NAME',name);
  },
  setReloadVows({commit}){
    commit('SET_RELOADVOWS');
  },
  setMailDialog({commit},opt){
    commit('SET_MAIL_DIALOG',opt);
  }
  // setUserInfo ({ commit }, data) {
  //   commit('SET_USER_INFO', data)
  // },
}