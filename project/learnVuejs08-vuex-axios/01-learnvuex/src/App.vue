<template>
  <div id="app">
    <h2>----------App moduleA------------</h2>
    <h2>{{$store.state.a.name}}</h2>
    <button @click="updateName">修改名字</button>
    <h2>1-----{{$store.getters.fullname}}</h2>
    <h2>1-----{{$store.getters.fullname2}}</h2>
    <h2>2-----{{$store.getters.fullname3}}</h2>
    <button @click="aUpdateName">异步修改名字</button>
    <button @click="aUpdateName2">异步修改名字2</button>

    <h2>----------App info------------</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo">更新信息</button>
    <button @click="aUpdateInfo">异步更新信息</button>

    <h2>---------App counter---------</h2>
    <h2>{{message}}</h2>
    <h2>counter {{counter}}</h2>
    <button @click="counter++">+</button>
    <button @click="counter--">-</button>

    <h2>----------App state count------------</h2>
    <h2>count {{$store.state.count}}</h2>
    <button @click="$store.state.count++">state+</button>
    <button @click="$store.state.count--">state-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>

    <h2>{{countnum}}</h2>
    <button @click="addition">add+</button>
    <button @click="subtraction">add-</button>

    <h2>----------hellovuex counter-----------</h2>
    <hello-vuex :counter="counter"></hello-vuex>

    <h2>-----------vuex count------------</h2>
    <vuex></vuex>

    <h2>----------App getters------------</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>1--{{$store.state.students}}</h2>
    <h3>年龄大于20岁的学生</h3>
    <h2>2--{{more20stu}}</h2>
    <h2>3--{{$store.getters.gettersMore20Stu}}</h2>
    <h3>年龄大于20岁的学生的个数</h3>
    <h2>4--{{$store.getters.more20stuLength}}</h2>
    <h3>年龄大于age岁的学生</h3>
    <h2>5--{{$store.getters.moreAgeStu(15)}}</h2>
    <h3>特定id的学生</h3>
    <h2>6--{{$store.getters.stuById(111)}}</h2>
  </div>
</template>

<script>
  import HelloVuex from '@/components/HelloVuex'
  import Vuex from '@/components/Vuex'
  import {
    INCREMENT
  } from '@/store/mutation-type.js'

  export default {
    name: 'App',
    data() {
      return {
        message: 'App组件',
        counter: 0
      }
    },
    components: {
      HelloVuex,
      Vuex
    },
    computed: {
      countnum() {
        return this.$store.state.count
      },
      more20stu() {
        return this.$store.state.students.filter(s => s.age >= 20)
      }
    },
    methods: {
      addition() {
        this.$store.commit(INCREMENT)
      },
      subtraction() {
        this.$store.commit('decrement')
      },
      addCount(num) {
        // 1.普通的提交封装
        // this.$store.commit('incrementCount', num)
        // 2.特殊的提交封装
        this.$store.commit({
          type: 'incrementCount1',
          num
        })
      },
      updateInfo() {
        this.$store.commit('updateInfo')
      },
      aUpdateInfo() {
        // contexr上下文
        // this.$store.dispatch('aUpdateInfo')
        // 传递payload
        // this.$store.dispatch('aUpdateInfo','我是payload')
        // payload为函数
        // this.$store.dispatch('aUpdateInfo',() => {
        //   console.log('里面已经完成了')
        // })
        // payload为对象
        // this.$store.dispatch('aUpdateInfo',{
        //   msg: '我是payload信息',
        //   success: () => {
        //     console.log('里面已经完成了')
        //   }
        // })
        // payload为对象---优雅写法
        this.$store
          .dispatch('aUpdateInfo', '我是payload信息')
          .then(res => {
            console.log('里面完成了提交')
            console.log(res)
          })
      },
      updateName() {
        this.$store.commit('updateName','Ganace')
      },
      aUpdateName() {
        this.$store.dispatch('aUpdateName')
      },
      aUpdateName2() {
        this.$store.dispatch('aUpdateName2')
      }
    }
  }

</script>

<style>

</style>
