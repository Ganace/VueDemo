import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations' 
import actions from './actions'
import getters from './getters'
import moduleA from './modules/modulesA'

Vue.use(Vuex)

const state = {
  count: 1000,
  students:[
    {id: 110, name: 'ganace', age: 14},
    {id: 111, name: 'nazimie', age: 16},
    {id: 112, name: 'sensan', age: 1000},
    {id: 113, name: 'sai', age: 300}
  ],
  info: {
    name: 'ganace',
    age: 18
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    a: moduleA
  }
})

export default store