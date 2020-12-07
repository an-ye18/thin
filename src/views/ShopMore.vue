<template>
  <div>
    <div class="top">
      <div class="top1">
        <router-link to="/shop" tag="span">
          <van-icon name="arrow-left" />
        </router-link>
        <span>商品详情</span>
      </div>
    </div>
    <div class="sec">
      <img src="../assets/img/23.jpg" width="375rem" height="172rem" />
    </div>
    <div class="sec1">
      <p>
        <span class="left">秀域冰晶嗜喱</span>
        <span><span class="right">6000 </span>&nbsp;<span> 积分</span></span>
      </p>
      <p>
        商品简介:<br />
        修复皮肤损伤<br /><br />
        兑换流程:<br />
        1、确认已赚够6000瘦啦积分<br />
        2、点击屏幕下方立即兑换，在弹出的对话框中确认兑换信息。<br />
        3、兑换完成，请耐心等待客服人员与您联系。 <br /><br />
        重要说明︰<br />
        商品兑换请参照“兑换流程”详细说明,除商品不能正常兑换外，其他情况下，商品一经兑换,一律不退还积分哦。<br /><br />
        活动及商品由瘦啦提供,最终解释权归瘦啦所有。
      </p>
    </div>
    <div class="bottom" @click="con">立即兑换</div>
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
.point {
  font-size: 2.5rem;
  margin: 1rem;
}
.more {
  margin-top: -1rem;
  font-size: 0.8rem;
}
.sec1 {
  color: gray;
}
.sec1 p span:nth-of-type(1) {
  float: left;
  padding-left: 1rem;
}
.sec1 p span:nth-of-type(2) {
  float: right;
  padding-right: 1rem;
}
.left {
  color: black;
}
.right {
  color: #22a08a;
  font-weight: bold;
}
.sec1 p:nth-of-type(2) {
  clear: both;
  padding: 1rem;
  line-height: 1.33rem;
}
.bottom {
  background: #22a08a;
  color: white;
  height: 3rem;
  line-height: 3rem;
  text-align: center;
}
</style>
<script>
export default {
  methods: {
    con() {
      this.$dialog
        .confirm({
          message: "亲爱的，您确定要兑换吗？",
        })
        .then(() => {
          // on confirm
          this.$toast("亲爱的，您的积分不够哦！");
        })
        .catch(() => {
          // on cancel
        });
    },
  },
};
</script>