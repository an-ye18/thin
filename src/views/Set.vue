<template>
  <div>
    <div class="top">
      <router-link to="/mine" tag="span">
        <van-icon name="arrow-left" />
      </router-link>
      <span>设置</span>
    </div>
    <div class="cen">
      <div class="center">
        <span @click="update">版本更新</span>
        <span><van-icon name="arrow" /></span>
      </div>
      <div class="center">
        <router-link to="/question" tag="span">常见问题</router-link>
        <span><van-icon name="arrow" /></span>
      </div>
      <div class="center">
        <span>关于我们</span>
        <span><van-icon name="arrow" /></span>
      </div>
      <router-link to="/" tag="div" class="exit">退出登录</router-link>
    </div>
  </div>
</template>
<style scoped>
.top {
  background: #22a08a;
  color: white;
  height: 3rem;
  line-height: 3rem;
  display: flex;
}
.top > span:nth-of-type(1) {
  padding-left: 1rem;
  flex: 1;
}
.top > span:nth-of-type(2) {
  flex: 1.3;
}
.cen {
  background: #f2f3f5;
  height: 38.7rem;
}
.cen i {
  color: gray;
}
.center {
  display: flex;
  height: 4rem;
  line-height: 4rem;
  padding-left: 1rem;
}
.center > span:nth-of-type(1) {
  flex: 8;
}
.center > span:nth-of-type(2) {
  flex: 1;
}
.exit {
  color: #22a08a;
  background: white;
  text-align: center;
  height: 3rem;
  line-height: 3rem;
  border: 0.01rem solid gainsboro;
  border-left: none;
  border-right: none;
}
</style>
<script>
export default {
  methods: {
    update() {
      this.$toast("已经是最新版本啦！");
    },
  },
};
</script>