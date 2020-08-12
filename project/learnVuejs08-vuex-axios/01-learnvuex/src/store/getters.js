export default {
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
}