import {
  INCREMENT
} from './mutation-type.js'
export default {
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
}