<template>
  <div>
    <div class="top">
      <div class="top1">
        <span>我的</span> <router-link tag="span" to="/set">设置</router-link>
      </div>
      <div class="top2">
        <img src="../assets/img/3.jpg" width="50rem" class="img3" />
        <p><van-icon name="flower-o" /> Anye</p>
        <p>您共有10积分！</p>
        <p class="top2-1">编辑资料</p>
      </div>
    </div>
    <div class="list">
      <router-link to="/task" tag="p">
        <van-icon name="sign" size="2.5rem" color="#EF44DE" />
        <span>任务</span>
      </router-link>
      <router-link to="/data" tag="p">
        <van-icon name="records" size="2.5rem" color="#36A98E" />
        <span>数据管理</span>
      </router-link>
      <router-link to="/daily" tag="p">
        <van-icon name="chart-trending-o" size="2.5rem" color="#687FF6" />
        <span>随诊日志</span>
      </router-link>
      <p>
        <van-icon name="friends-o" size="2.5rem" color="#FE5D86" />
        <span>饮食记录</span>
      </p>
      <p>
        <van-icon name="notes-o" size="2.5rem" color="#F29825" />
        <span>家庭账号</span>
      </p>
      <router-link to="/shop" tag="p">
        <van-icon name="description" size="2.5rem" color="#F5D05E" />
        <span>商城</span>
      </router-link>
      <p>
        <van-icon name="comment-o" size="2.5rem" color="#F75AA0" />
        <span>生理期</span>
      </p>
      <p>
        <van-icon name="flower-o" size="2.5rem" color="#F55F5E" />
        <span>消息</span>
      </p>
      <p>
        <van-icon name="shop-o" size="2.5rem" color="#3FA991" />
        <span>我的草稿</span>
      </p>
    </div>
    <Footer></Footer>
  </div>
</template>
<style scoped>
.top {
  background: #22a08a;
  color: white;
  text-align: center;
  height: 15rem;
  line-height: 3rem;
}
.top1 {
  display: flex;
}
.top1 span {
  flex: 1;
  text-align: center;
}
.top1 span:nth-of-type(2) {
  font-size: 0.9rem;
  position: absolute;
  right: 1rem;
}
.img3 {
  border-radius: 50%;
}
.top2 {
  line-height: 0.5rem;
}
.top2-1 {
  width: 6rem;
  height: 1.7rem;
  line-height: 1.7rem;
  color: #6bd4bc;
  background: white;
  border-radius: 1rem;
  font-size: 0.9rem;
  margin: 0 auto;
}
.list i {
  width: 4.5rem;
}
.list > p {
  font-size: 0.9rem;
  width: 4.5rem;
  text-align: center;
  float: left;
  padding-left: 2.5rem;
}
</style>
<script>
import Footer from "../components/Footer";
export default {
  components: {
    Footer,
  },
  data() {
    return {
      show: false,
      show1: true,
      index: 0,
      images: ["https://img.yzcdn.cn/vant/apple-2.jpg"],
    };
  },
  methods: {
    onChange(index) {
      this.index = index;
    },
  },
};
</script>