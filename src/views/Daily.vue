<template>
  <div>
    <div class="top">
      <router-link to="/mine" tag="span">
        <van-icon name="arrow-left" />
      </router-link>
      <span>随诊日志</span>
    </div>
    <div class="img">
      <img src="../assets/img/15.jpg" width="375rem" />
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
  flex: 1.5;
}
.img {
  background: #f8f8f8;
  height: 38.7rem;
}
</style>
<script>
export default {
    
}
</script>