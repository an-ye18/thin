<template>
  <div id="login">
    <van-form class="form" @submit="onSubmit">
      <div class="input">
        <span><van-icon name="user-o" color="#cccdcf" /></span>
        <span>
          <van-field v-model="from.username" placeholder="请输入手机号" />
        </span>
      </div>
      <div class="input">
        <span><van-icon name="eye-o" color="#cccdcf" /></span>
        <span>
          <van-field
            v-model="from.password"
            type="password"
            placeholder="请输入6-18位密码"
          />
        </span>
      </div>
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit" @click="sub">
          登录
        </van-button>
      </div>
    </van-form>
    <div class="form1">
      <router-link to="/register" tag="span">快速注册</router-link>
      <router-link to="/forget" tag="span">忘记密码</router-link>
    </div>
  </div>
</template>
<style scoped>
.form {
  margin-top: 10rem;
}
.input {
  height: 3rem;
  line-height: 3rem;
  border-bottom: 0.1rem solid #d3d4d7;
  margin: 0 2rem;
  padding: 0 0.8rem;
}
.input > span {
  float: left;
}
.van-button--info {
  color: #6bd4bc;
  background-color: white;
  border: 0.1rem solid #6bd4bc;
  font-weight: bold;
}
.van-button--round {
  border-radius: 0.5rem;
}
.van-button--block {
  display: block;
  width: 17rem;
  margin: 3.2rem 2rem 0;
}
.form1 {
  color: #6bd4bc;
  font-weight: bold;
  margin: 0 3.5rem 0 3rem;
}
.form1 > span:nth-of-type(2) {
  float: right;
}
</style>
<script>
export default {
  data() {
    return {
      from: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    sub() {
      var reg = /^1\d{10}$/;
      var reg1 = /^\w{6,18}$/;
      if (this.from.username == "") {
        this.$toast("手机号不能为空");
      } else if (reg.test(this.from.username) == false) {
        this.$toast("手机号为1开头的11位数字");
      } else if (this.from.password == "") {
        this.$toast("密码不能为空");
      } else if (reg1.test(this.from.password) == false) {
        this.$toast("密码长度必须要6-18位哦");
      } else {
        var user = localStorage.setItem("user", JSON.stringify(this.from));
        this.$router.push({
          path: "/index",
        });
      }
    },
  },
};
</script>