<template>
  <div>
    <van-tabs
      v-model="active"
      title-active-color="white"
      title-inactive-color="white"
      background="#22a08a"
      color="white"
      line-width="70px"
    >
      <div class="return">
        <router-link to="/mine" tag="span">
          <van-icon name="arrow-left" />
        </router-link>
      </div>
      <div class="tabOne">
        <van-tab title="活动任务">
          <img src="../assets/img/3.png" width="356rem" />
        </van-tab>
      </div>
      <div>
        <van-tab title="每日任务">
          <div class="day">
            <div>
              <span>以下为每日任务清单</span><br />
              <span class="font color">积极参与任务，赢积分咯</span>
            </div>
            <div>
              <img src="../assets/img/4.png" width="150rem" />
            </div>
          </div>
          <div class="day day1 font">
            <div>
              <van-icon name="star-o" color="#22a08a" /> 记录板块内容发表
            </div>
            <div class="color">可获得10积分</div>
          </div>
          <div class="day day1 font">
            <div>
              <van-icon name="star-o" color="#22a08a" /> 分享板块内容发表
            </div>
            <div class="color">可获得10积分</div>
          </div>
        </van-tab>
      </div>
    </van-tabs>
  </div>
</template>
<style scoped>
.top {
  background: #22a08a;
  color: white;
  height: 3rem;
  line-height: 3rem;
}
.return {
  color: white;
  position: absolute;
  top: 1rem;
  left: 1rem;
}
.tabOne {
  padding: 0.6rem;
}
.day {
  display: flex;
  padding-left: 1rem;
  border-bottom: 1px solid rgb(197, 195, 195);
  height: 5rem;
  line-height: 2rem;
}
.day > div {
  flex: 1;
}
.day1 {
  height: 3rem;
  line-height: 3rem;
}
.font {
  font-size: 0.6rem;
}
.color {
  color: #22a08a;
}
</style>
<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
};
</script>