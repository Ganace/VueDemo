<template>
  <div>
    <h6>{{message}}</h6>
    <Cpn />
  </div>
</template>

<script>
  import Cpn from './Cpn'

  export default {
    name: 'App',
    data() {
      return {
        message: 'App组件',
      }
    },
    components: {
      Cpn
    }
  }
</script>

<style scoped>
  .title {
    color: seagreen;
  }
</style>