<template>
  <div>
    <Banner></Banner>
    <Bottom></Bottom>
  </div>
</template>

<script>
// 头部引入
import Banner from './Banner/Banner'
// 底部引入
import Bottom from './Bottom/Bottom'
export default {
  name: 'Home',
  data () {
    return {
      
    }
  },
  components: {
    Banner,
    Bottom
  }
}
</script>

<style scoped>

</style>
