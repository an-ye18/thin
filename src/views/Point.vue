<template>
  <div>
    <div class="top">
      <div class="top1">
        <router-link to="/shop" tag="span">
          <van-icon name="arrow-left" />
        </router-link>
        <span>积分告知</span>
      </div>
    </div>
    <div class="top2">
      积分告知内容∶<br />
      一∶ 瘦啦积分调整告知∶<br />
      最新版本将取消瘦啦打赏分和被打赏分，统一兑换成积分，兑换比例为1:1。例︰瘦啦打赏分1500分，瘦啦被打赏分500分，兑换积分为2000分。<br />
      二∶ 积分获得途径∶<br />
      积分签到,连续签到3天可额外获赠10积分,第四天重新开始，用户在资讯板块-记录和分析板块发表内客,后台审核通过后均可以获得积分奖励，累计足够的积分，可以直接兑换积分商城奖品。
    </div>
  </div>
</template>
<style scoped>
.top {
  background: #22a08a;
  color: white;
  text-align: center;
  height: 3rem;
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
.top2 {
  color: black;
  padding: 0.5rem;
  font-size: 0.9rem;
  line-height: 1.5rem;
}
</style>
<script>
export default {};
</script>