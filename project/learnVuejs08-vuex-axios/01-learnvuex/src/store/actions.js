export default {
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
}