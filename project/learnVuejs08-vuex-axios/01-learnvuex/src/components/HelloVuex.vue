<template>
  <div>
    <h2>{{msg}}</h2>
    <h2>counter {{counter}}</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloVuex',
  props: {
    counter: Number
  },
  data () {
    return {
      msg: 'HelloVuex'
    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
