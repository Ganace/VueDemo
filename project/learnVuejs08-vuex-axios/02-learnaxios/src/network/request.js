import axios from 'axios'

// 方法四：（推荐方法）
export function request(config) {
  // 1.创建axios实例
  const instance = axios.create({
    baseURL: 'http://127.0.0.1:5500',
    timeout: 5000
  })
  // 2.axios拦截器
  // 2.1.请求拦截拦截
  instance.interceptors.request.use(config => {
    // console.log(config)
    // 比如config中的一些信息不符合服务器要求
    // 比如每次发送网络请求时，都希望在界面中显示一个请求的图标
    // 比如某些网络请求，例如登录(token)，必须携带一些特殊信息
    return config
  },err => {
    // console.log(err)
  });
  // 2.2.响应拦截
  instance.interceptors.response.use(res => {
    console.log(res)
    return res.data
  },err => {
    console.log(err)
  });

  //3. 发送真正的网络请求 instance(config)本身返回了一个Promise
  return instance(config) 
}

// 方法三：
// export function request(config) {
//   return new Promise((resolve, reject) => {
//     // 1.创建axios实例
//     const instance = axios.create({
//       baseURL: 'http://127.0.0.1:5500',
//       timeout: 5000
//     })

//     // 发送真正的网络请求
//     instance(config).then(res => {
//       resolve(res)
//     }).catch(err => {
//       reject(err)
//     })
//   })
// }

// 方法二：
// export function request(config) {
//   // 1.创建axios实例
//   const instance = axios.create({
//     baseURL: 'http://127.0.0.1:5500',
//     timeout: 5000
//   })

//   // 发送真正的网络请求
//   instance(config.baseConfig).then(res => {
//     config.success(res)
//   }).catch(err => {
//     config.failure(err)
//   })
// }

// 方法一：
// export function request(config,success,failure) {
//   // 1.创建axios实例
//   const instance = axios.create({
//     baseURL: 'http://127.0.0.1:5500',
//     timeout: 5000
//   })

//   // 发送真正的网络请求
//   instance(config).then(res => {
//     success(res)
//   }).catch(err => {
//     failure(err)
//   })
// }
