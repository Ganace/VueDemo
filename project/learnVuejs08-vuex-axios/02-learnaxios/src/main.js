import Vue from 'vue'
import App from './App'
import router from './router'
// import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})


// // 1.axios基本使用
//http://123.207.32.32:8000/home/data?type=sell&page=2
// http://123.207.32.32:8000/home/multidata
// axios({
//   url: 'http://127.0.0.1:5500/data/mutidata.json'
// }).then(res => {
//   console.log(res)
// })
// axios({
//   url: 'http://127.0.0.1:5500/data/goods.json',
//   method: 'get',
//   params: {
//     pageSize: 10,
//     page: 1,
//     alias: 'nm8nwc9e1',
//     offlineId: 0,
//     json: 1
//   }
// }).then(res => {
//   console.log(res)
// })
// // 2.axios发送并发请求
// axios.all([axios({
//   url: 'http://127.0.0.1:5500/data/mutidata.json'
// }), axios({
//   url: 'http://127.0.0.1:5500/data/goods.json',
//   method: 'get',
//   params: {
//     pageSize: 10,
//     page: 1,
//     alias: 'nm8nwc9e1',
//     offlineId: 0,
//     json: 1
//   }
// })]).then(results => {
//   console.log('axios.all([]).then()',results);
// })
// // axios.spread
// axios.all([axios({
//   url: 'http://127.0.0.1:5500/data/mutidata.json'
// }), axios({
//   url: 'http://127.0.0.1:5500/data/goods.json',
//   method: 'get',
//   params: {
//     pageSize: 10,
//     page: 1,
//     alias: 'nm8nwc9e1',
//     offlineId: 0,
//     json: 1
//   }
// })]).then(axios.spread((res1, res2) => {
//   console.log('spread', res1, res2)
// }))
// // 解构
// axios.all([axios({
//   url: 'http://127.0.0.1:5500/data/mutidata.json'
// }), axios({
//   url: 'http://127.0.0.1:5500/data/goods.json',
//   method: 'get',
//   params: {
//     pageSize: 10,
//     page: 1,
//     alias: 'nm8nwc9e1',
//     offlineId: 0,
//     json: 1
//   }
// })]).then(([res1, res2]) => {
//   console.log('解构', res1, res2)
// })
// // 3.axios全局配置
// axios.defaults.baseURL = 'http://127.0.0.1:5500/data'
// axios.defaults.timeout = 5000
// axios({
//   url: 'goods.json'
// }).then( res => {
//   console.log('goods', res)
// })

// 4.创建对应的axios实例
// const instance1 = axios.create({
//   baseURL: 'http://127.0.0.1:5500',
//   timeout: 5000
// })
// instance1({
//   url:'/data/goods.json'
// }).then(res => {
//   console.log('instance1', res)
// })

// 5.封装一个request模块
import { request } from "./network/request"

// 方法三，方法四，使用
request({
  url: '/data/goods.json'
}).then(res => {
  // console.log(res)
}).catch(err => {
  // console.log(err)
})

// 方法二，使用
// request({
//   baseConfig: {
//     url: '/data/goods.json'
//   },
//   success: function(res) {
//     console.log(res)
//   },
//   failure: function(err) {
//     console.log(err)
//   }
// })

// 方法一，使用
// request({
//   url:'/data/goods.json',
// },res => {
//   console.log('success',res)
// },err => {
//   console.log('failure',err)
// })