<template>
  <div>
    <div v-show="log" id="login">
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
        <span @click="regi1">快速注册</span>
        <!-- <router-link to="/forget" tag="span">忘记密码</router-link> -->
      </div>
    </div>
    <div v-show="regi" id="register">
      <van-form class="form" @submit="onSubmit">
        <div class="input">
          <span><van-icon name="user-o" color="#cccdcf" /></span>
          <span>
            <van-field v-model="username" placeholder="请输入手机号" />
          </span>
        </div>
        <div class="input">
          <span><van-icon name="passed" color="#cccdcf" /></span>
          <span>
            <van-field v-model="sms" center placeholder="请输入验证码">
              <template #button>
                <van-button
                  size="small"
                  type="primary"
                  v-if="isSend"
                  @click="sendMsg"
                >
                  获取验证码
                </van-button>
                <van-button size="small" type="primary" v-else>
                  <span>({{ num }})</span>
                  <span>重新获取</span>
                </van-button>
              </template>
            </van-field>
          </span>
        </div>
        <div class="input">
          <span><van-icon name="eye-o" color="#cccdcf" /></span>
          <span>
            <van-field
              v-model="password"
              type="password"
              placeholder="请输入6-18位密码"
            />
          </span>
        </div>
        <div style="margin: 16px">
          <van-button
            round
            block
            type="info"
            native-type="submit"
            @click="sub1"
          >
            下一步
          </van-button>
        </div>
      </van-form>
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
.form > div:nth-of-type(2) > span:nth-of-type(2) van-field {
  width: 1rem;
}
.input {
  height: 3rem;
  line-height: 3rem;
  border-bottom: 0.1rem solid #d3d4d7;
  margin: 0 2rem;
  padding: 0.3rem 0;
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
.van-cell {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  box-sizing: border-box;
  width: 100%;
  padding: 10px 11px;
  overflow: hidden;
  color: #323233;
  font-size: 14px;
  line-height: 24px;
  background-color: #fff;
}
</style>
<script>
export default {
  data() {
    return {
      log: true,
      regi: false,
      from: {
        username: "",
        password: "",
      },
      username: "",
      password: "",
      sms: "",
      isSend: true, //发送验证码
      num: 60,
    };
  },
  methods: {
    // 登录
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
    // 注册页的下一步
    sub1() {
      var reg = /^1[0123456789]\d{9}$/;
      var reg1 = /^\w{6,18}$/;
      if (this.username == "") {
        this.$toast("手机号不能为空");
      } else if (reg.test(this.username) == false) {
        this.$toast("手机号为1开头的11位数字");
      } else if (this.password == "") {
        this.$toast("密码不能为空");
      } else if (reg1.test(this.password) == false) {
        this.$toast("密码长度必须要6-18位哦");
      } else {
        this.$toast("注册成功");
        this.regi = false;
        this.log = true;
      }
    },
    //倒计时
    sendMsg() {
      var reg = /^1\d{10}$/;
      var reg1 = /^\d{6,18}$/;
      if (this.username == "") {
        this.$toast("请输入手机号");
      } else if (reg.test(this.username) == false) {
        this.$toast("手机号为1开头的11位数字");
      } else if (this.username != "" && reg.test(this.username) == true) {
        this.isSend = false;
        let timer = setInterval(() => {
          this.num--;
          if (this.num <= 0) {
            this.isSend = true;
            clearInterval(timer);
            this.num = 60;
          }
        }, 1000);
      }
    },
    // 切换登录注册
    regi1() {
      this.regi = !this.regi;
      this.log = !this.log;
    },
  },
};
</script>