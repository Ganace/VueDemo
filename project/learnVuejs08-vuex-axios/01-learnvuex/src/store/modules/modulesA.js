export default {
  state: {
    count: 1,
    name: 'Natsume Takashi'
  },
  mutations: {
    updateName(state,payload){
      state.name = payload
    }
  },
  getters: {
    fullname(state) {
      return state.name + '111'
    },
    fullname2(state,getters) {
      return getters.fullname + '222'
    },
    fullname3(state,getters,rootState) {
      return getters.fullname2 + rootState.count
    }
  },
  actions: {
    aUpdateName(context) {
      console.log(context);
      setTimeout(() => {
        // 只能操作moduleA模块内的mutations
        context.commit('updateName','saya')
      }, 1000)
    },
    aUpdateName2({state, commit ,rootState}) {
      setTimeout(() => {
        if(state.count + rootState.count %2 === 1){
          commit('updateName','saya')
        }
      }, 1000)
    }
  },
}