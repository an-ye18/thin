<template>
  <div>
    <div class="top">
      <div class="top1">
        <router-link to="/mine" tag="span">
          <van-icon name="arrow-left" />
        </router-link>
        <span>商城</span>
      </div>
      <div class="top2">
        <p class="point">
          <van-icon name="points" style="vertical-align: top" />
          <span> 10</span>
        </p>
        <router-link tag="p" to="/point" class="more">
          点击查看积分数兑换打赏分详情 >
        </router-link>
      </div>
    </div>
    <div class="sec">
      <router-link tag="div" to="/shopMore">
        <img src="../assets/img/22.jpg" width="175rem" />
      </router-link>
      <div><img src="../assets/img/21.jpg" width="175rem" /></div>
      <div><img src="../assets/img/20.jpg" width="175rem" /></div>
    </div>
  </div>
</template>
<style scoped>
.top {
  background: #22a08a;
  color: white;
  text-align: center;
  height: 11rem;
  line-height: 3rem;
}
.top1 {
  display: flex;
}
.top1 > span:nth-of-type(1) {
  padding-left: 0.2rem;
  flex: 0.1;
}
.top1 > span:nth-of-type(2) {
  flex: 8;
}
.point {
  font-size: 2.5rem;
  margin: 1rem;
}
.more {
  margin-top: -1rem;
  font-size: 0.8rem;
}
.sec {
  background: #f2f3f5;
  height: 30.7rem;
}
.sec > div {
  display: inline-block;
  padding: 0.5rem 0 0 0.5rem;
}
</style>
<script>
export default {};
</script>