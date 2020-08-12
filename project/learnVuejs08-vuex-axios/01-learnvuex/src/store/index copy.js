import Vue from 'vue'
import Vuex from 'vuex'
import {
  INCREMENT
} from './mutation-type.js'

Vue.use(Vuex)

const moduleA = {
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

const store = new Vuex.Store({
  state: {
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
  },
  mutations: {
    [INCREMENT](state) {
      state.count++
    },
    decrement(state) {
      state.count--
    },
    incrementCount(state, num) {
      state.count += num
    },
    incrementCount1(state,payload) {
      state.count += payload.num
    },
    updateInfo(state){
      // state.info.name = 'nazimie'
      // 响应式添加
      Vue.set(state.info, 'address', 'beijing')
      // 响应式删除
      Vue.delete(state.info, 'age')
    }
  },
  actions: {
    // contexr上下文
    // aUpdateInfo(context) {
    //   setTimeout(() => {
    //     context.commit('updateInfo')
    //   },1000)
    // }
    // 传递payload
    // aUpdateInfo(context,payload) {
    //   setTimeout(() => {
    //     context.commit('updateInfo')
    //     console.log(payload)
    //   },1000)
    // }
    // payload为函数
    // aUpdateInfo(context,payload) {
    //   setTimeout(() => {
    //     context.commit('updateInfo')
    //     payload()
    //   },1000)
    // }
    // payload为对象
    // aUpdateInfo(context,payload) {
    //   setTimeout(() => {
    //     context.commit('updateInfo')
    //     console.log(payload.msg)
    //     payload.success()
    //   },1000)
    // }
    // payload为对象---优雅写法
    aUpdateInfo(context,payload) {
      return new Promise((resolve,reject) => {
        setTimeout(() => {
          context.commit('updateInfo')
          console.log(payload)
          resolve('1111')
        },1000)
      })
    }
  },
  getters: {
    powerCounter(state){
      return state.count * state.count
    },
    gettersMore20Stu(state){
      return state.students.filter(s => s.age >= 20)
    },
    more20stuLength(state, getters) {
      return getters.gettersMore20Stu.length
    },
    moreAgeStu(state) {
      return age => {
        return state.students.filter(s => s.age >= age)
      }
    },
    stuById(state) {
      return id => {
        return state.students.filter(s => s.id === id)
      }
    }
  },
  modules: {
    a: moduleA
  }
})

export default store