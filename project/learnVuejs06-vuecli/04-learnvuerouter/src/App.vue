<template>
  <div id="app">
    <div>
      <router-link to="/helloworld" tag="button" replace>Hello World</router-link>
      <router-link to="/home">首页</router-link>
      <router-link to="/about">关于</router-link>
    </div>
    <div>
      <button @click="homeClick">首页按钮</button>
    </div>
    <div>
      <router-link :to="'/user/'+userId">用户</router-link>
      <router-link :to="{path: '/profile',query: {name: 'Ganace', age: 18}}">档案</router-link>
    </div>
    <div>
      <button @click="profileClick">档案</button>
      <button @click="btnClick">对比</button>
    </div>
    <h5>{{$route.params.userId}}</h5>
    <h5>{{getUserId}}</h5>
    <keep-alive exclude="Profile,User">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        userId: 'LiSi'
      }
    },
    computed: {
      getUserId() {
        return this.$route.params.userId;
      }
    },
    methods: {
      homeClick() {
        this.$router.push('/home')
      },
      profileClick() {
        this.$router.push({
          path: '/profile',
          query: {
            name: 'Ganace',
            age: 18
          }
        })
      },
      btnClick() {
        //所有组件都继承自Vue的原型
        console.log(this.$route);
        console.log(this.$router);
      }
    },
  }

</script>

<style>
  .active {
    color: #f00;
  }

  .router-link-active {
    color: #f00;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

</style>
