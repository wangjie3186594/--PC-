<template>
    <div>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    // 返回跳转过来的页面 相当于页面刷新
    beforeRouteEnter (to, from, next) {
      next(vm => {
        vm.$router.replace(from.path)
      })
    }
}
</script>

<style lang="less" scoped>
    
</style>