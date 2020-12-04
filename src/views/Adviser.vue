<template>
  <div>
    <div class="title">私人顾问</div>
    <div class="top">
      <img src="../assets/img/7.jpg" width="48rem" class="img7" />
      <span style="vertical-align: top"> 佳佳老师</span>
    </div>
    <div class="myAd">我的健康顾问</div>
    <div>
      <van-field
        readonly
        clickable
        :value="value"
        placeholder="点击添加新顾问"
        @click="showPicker = true"
      />
      <van-popup v-model="showPicker" round position="bottom">
        <van-picker
          show-toolbar
          :columns="columns"
          @cancel="showPicker = false"
          @confirm="onConfirm"
        />
      </van-popup>
    </div>
    <div class="myAd1">
      秀域健康顾问专门为秀域顾客提供专属的瘦身服务。<br />
      如果您遇到减肥方面的问题可以找她咨询哦~<br />
      (每位顾客最少可以绑定2个顾问哦)
    </div>
    <Footer></Footer>
  </div>
</template>
<style scoped>
.title {
  background: #22a08a;
  color: white;
  text-align: center;
  line-height: 3rem;
}
.img7 {
  border-radius: 50%;
}
.top {
  padding: 1rem 0 0.5rem 1rem;
  border-bottom: 0.1rem solid gainsboro;
}
.myAd {
  background: #f2f3f5;
  font-size: 0.5rem;
  color: gray;
  padding: 0.2rem 1rem;
}
.myAd1 {
  background: #f2f3f5;
  font-size: 0.5rem;
  color: gray;
  padding: 0.5rem 1rem;
  line-height: 1.3rem;
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
      value: "",
      showPicker: false,
      columns: [
        {
          text: "北京市",
          children: [
            {
              text: "东城区",
              children: [
                { text: "北京东直门店秀花1" },
                { text: "北京东直门店秀花2" },
              ],
            },
            {
              text: "西城区",
              children: [
                { text: "北京宣武店秀花1" },
                { text: "北京马连道店秀花2" },
              ],
            },
          ],
        },
        {
          text: "天津市",
          children: [
            {
              text: "和平区",
              children: [
                { text: "天津云南路秀花3" },
                { text: "天津云南路秀花4" },
              ],
            },
            {
              text: "河东区",
              children: [{ text: "天津新开路店秀花1" }, { text: "米淑阁" }],
            },
            {
              text: "河西区",
              children: [
                { text: "天津凯旋门店秀花2" },
                { text: "天津凯旋门店秀花3" },
                { text: "周翠丽" },
                { text: "白瑞丽" },
              ],
            },
            {
              text: "南开区",
              children: [
                { text: "天津华苑店秀花1" },
                { text: "天津华苑店秀花2" },
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    },
  },
};
</script>