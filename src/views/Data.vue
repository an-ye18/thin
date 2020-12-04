<template>
  <div>
    <div class="top">
      <router-link to="/mine" tag="span">
        <van-icon name="arrow-left" />
      </router-link>
      <span>数据管理</span>
    </div>
    <div class="data">
      <ul v-for="(nums, index) in num.slice(0, 12)" :key="index">
        <li>{{ nums.money }}</li>
      </ul>
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
.data {
  margin: 1rem;
}
.data > ul {
  width: 8.6rem;
  border: 1px solid;
  float: left;
  padding: 0.5rem 1rem;
}
</style>
<script>
export default {
  data: function () {
    return {
      search: "",
      num: "",
    };
  },
  created() {
    this.axios
      .get("http://yapi.dapengjiaoyu.com/mock/380/order")
      .then((res) => {
        console.log(res.data.data);
        this.num = res.data.data;
      });
  },
};
</script>