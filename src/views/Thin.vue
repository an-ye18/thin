<template>
  <div id="index">
    <div class="top">
      <p>Anye</p>
      <div class="top1">
        <div class="top1-1">
          <van-icon name="smile" color="white" size="2.2rem" />
          <br /><span>胖瘦指数</span>
        </div>
        <div>
          <van-field
            class="control"
            readonly
            clickable
            :value="value"
            placeholder="0.0kg"
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
        <div class="top1-1">
          <van-icon
            name="add"
            color="white"
            size="2.2rem"
            @click="showPicker = true"
          />
          <br /><span>添加体重</span>
        </div>
      </div>
    </div>
    <div class="sec">
      <IndexOne></IndexOne>
      <div class="sec1">
        <span
          ><van-icon name="shop-collect" color="#6bd4bc" size="2rem" />
          <br />推荐早餐
        </span>
        <span>白粥（100克）+水煮鸡蛋（1个）</span>
        <span>饮食记录</span>
      </div>
      <div>
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item>
            <img src="../assets/img/1.png" class="doll" />
          </van-swipe-item>
          <van-swipe-item>
            <img src="../assets/img/2.png" class="doll" />
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
  </div>
</template>
<style scoped>
.top {
  background: linear-gradient(to bottom right, #1492a1, #22a08a);
  overflow: hidden;
  height: 50%;
}
.top > p:nth-of-type(1) {
  color: white;
  text-align: center;
}
.control {
  box-shadow: white 0rem 0rem 4rem;
  width: 5rem;
  height: 5rem;
  line-height: 3.5rem;
  text-align: center;
  border-radius: 50%;
  margin: 2rem auto 5rem;
  background-color: white;
}
.top1 {
  display: flex;
  align-items: center;
}
.top1 > div :nth-of-type(1) {
  vertical-align: text-bottom;
}
.top1 > div {
  flex: 1;
}
.top1-1 {
  color: white;
  font-size: 0.5rem;
  text-align: center;
}
.sec {
  background: #f2f3f5;
  padding-top: 0.5rem;
}
.sec1 {
  border: 0.08rem solid rgb(204, 204, 204);
  border-radius: 0.2rem;
  margin: 0.5rem 0.7rem 0.5rem 0.5rem;
  padding: 0.2rem 0;
  background: white;
  overflow: hidden;
  display: flex;
  align-items: center;
}
.sec1 > span {
  text-align: center;
  font-size: 0.5rem;
}
.sec1 > span:nth-of-type(1) {
  flex: 1;
}
.sec1 > span:nth-of-type(2) {
  flex: 3;
}
.sec1 > span:nth-of-type(3) {
  flex: 1;
  background: #6bd4bc;
  color: white;
  padding: 0.5rem 0;
  margin-right: 0.5rem;
}
.doll {
  width:23.5rem;
  height: 10.5rem;
}
.my-swipe .van-swipe-item {
  text-align: center;
  height: 10.5rem;
}
</style>
<style>
.control .van-field__control {
  text-align: center;
}
</style>
<script>
import IndexOne from "../components/IndexOne";
export default {
  components: {
    IndexOne,
  },
  props: {
    value: {
      type: String,
      defaut: "0.0kg",
    },
  },
  data() {
    return {
      value: "",
      showPicker: false,
      columns: [
        // 第一列
        {
          values: [
            "40",
            "41",
            "42",
            "43",
            "44",
            "45",
            "46",
            "47",
            "48",
            "49",
            "50",
          ],
          defaultIndex: 2,
        },
        // 第二列
        {
          values: [
            "0kg",
            "1kg",
            "2kg",
            "3kg",
            "4kg",
            "5kg",
            "6kg",
            "7kg",
            "8kg",
            "9kg",
          ],
          defaultIndex: 1,
        },
      ],
      images: [require("../assets/img/1.png"), require("../assets/img/2.png")],
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