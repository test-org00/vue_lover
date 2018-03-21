import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
Vue.use(Vuex)
const createStore =  new Vuex.Store({
    state: {
    	accounts:null,
      noAccounts:false,
    	balance:null,
      network:1,
      userInfo:null,
      search:null,
      info:null,
      createPop:false,
      confess:true,
      listSearch:0,
      curName:'index',
      reloadVows:0,
      mailDialog:{
        open:false,
        ele:null
      },
      // imageCDN: '你的七牛 CDN',
      // homePageScroll: {
      //   'home': 0,
      //   'house': 0
      // },
      // APICharacters: null,
      // IMDb: null,
      // authUser: null,
      // shoppingScroll: 0,
      // houses: [],
      // characters: [],
      // focusHouse: {},
      // focusCharacter: {},
      // user: null,
      // products: [],
      // focusProduct: {},
      // payments: []
    },
    getters,
    actions,
    mutations
  })

export default createStore