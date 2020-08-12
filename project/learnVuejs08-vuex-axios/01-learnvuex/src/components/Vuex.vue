<template>
  <div>
    <h2>{{msg}}</h2>
    <h2>count {{$store.state.count}}</h2>
  </div>
</template>

<script>
export default {
  name: 'Vuex',
  data () {
    return {
      msg: 'Vuex组件'
    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
