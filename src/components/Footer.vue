<template>
  <div>
    <van-tabbar v-model="active" active-color="#6bd4bc" inactive-color="gray">
      <van-tabbar-item icon="orders-o">瘦啦</van-tabbar-item>
      <van-tabbar-item icon="edit">资讯</van-tabbar-item>
      <van-tabbar-item icon="friends-o">顾问</van-tabbar-item>
      <van-tabbar-item icon="smile-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<style scoped>
</style>
<script>
export default {
    data() {
        return {
            active:0
        }
    },
}
</script>