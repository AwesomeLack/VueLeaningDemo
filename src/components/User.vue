<template>
  <div>
    <h1>我是User组件,{{dynamicId}}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dynamicId: ''
    }
  },
  watch: {
    $router (to, from) {
      //   console.log(to)
      //   console.log(from)
      this.dynamicId = to.params.id
    }
  }
}
</script>
