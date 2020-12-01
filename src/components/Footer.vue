<template>
  <div id="footer">
    <van-tabbar v-model="active" active-color="#6bd4bc" inactive-color="gray">
      <router-link to="/thin" tag="van-tabbar-item"><van-icon name="orders-o" size="1.5rem"/><br>瘦啦</router-link>
      <router-link to="/info" tag="van-tabbar-item"><van-icon name="edit" size="1.5rem"/><br>资讯</router-link>
      <router-link to="/adviser" tag="van-tabbar-item"><van-icon name="friends-o" size="1.5rem"/><br>顾问</router-link>
      <router-link to="/mine" tag="van-tabbar-item"><van-icon name="smile-o" size="1.5rem"/><br>我的</router-link>
    </van-tabbar>
  </div>
</template>
<style scoped>
#footer{
  margin-top: 2.6rem;
}
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