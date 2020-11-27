<template>
  <div id="index">
    <div class="top">
      <p>Anye</p>
      <van-field
        class="control"
        readonly
        clickable
        :value="value"
        placeholder="0.0kg"
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
  </div>
</template>
<style scoped>
.top {
  background: linear-gradient(to bottom right,#1492A1,#22A08A);
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
  margin:2rem auto 5rem ;
  background-color: white;
}
</style>
<style>
.control .van-field__control {
  text-align: center;
}
</style>
<script>
export default {
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