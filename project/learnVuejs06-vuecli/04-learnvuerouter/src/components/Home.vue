<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/messages">消息</router-link>
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'home',
    data() {
      return {
        msg: '首页vue',
        path: 'home/news'
      }
    },
    created() {
      console.log('-----home created')
    },
    destroyed() {
      console.log('-----home destoryed')
    },
    // 这两个函数，只有该组件被保持了状态使用了keep-alive时，才是有效的
    activated () {
      this.$router.push(this.path)
    },
    deactivated() {
      
    },
    beforeRouteLeave(to, from, next) {
      console.log(this.$route.path)
      this.path = this.$route.path
      next()
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

</style>
