export default{
	SET_PID: (state, authUser) => {
    state.authUser = authUser
  },
  SET_SEARCH: (state, search) => {
    state.search = search
  },
  SET_INFO:(state, info)=>{
  	state.info = info
  },
  SET_CREATEPOP:(state, bool)=>{
  	state.createPop = bool
  },
  SET_CONFESS:(state, bool)=>{
    state.confess = bool
  },
  SET_LIST_SEARCH:(state)=>{
    state.listSearch++
  },
  SET_CUR_NAME:( state,name)=>{
    state.curName = name
  }
}
