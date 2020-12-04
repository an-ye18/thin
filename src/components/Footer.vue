<template>
  <div id="footer">
    <ul>
      <router-link tag="li" to="/index">
        <van-icon name="orders-o" size="1.5rem" /><br />瘦啦
      </router-link>
      <router-link tag="li" to="/info">
        <van-icon name="edit" size="1.5rem" /><br />资讯
      </router-link>
      <router-link tag="li" to="/adviser">
        <van-icon name="friends-o" size="1.5rem" /><br />顾问
      </router-link>
      <router-link tag="li" to="/mine">
        <van-icon name="smile-o" size="1.5rem" /><br />我的
      </router-link>
    </ul>
  </div>
</template>
<style scoped>
#footer {
  margin-top: 2.6rem;
}
#footer {
  width: 100%;
  height: 50px;
  background: white;
  position: fixed;
  left: 0;
  bottom: -0.03rem;
  font-size: 0.8rem;
}
#footer ul {
  display: flex;
  text-align: center;
  height: 50px;
  align-items: center;
}
#footer ul li {
  flex: 1;
  height: 40px;
}
#footer li.active {
  color: #6bd4bc;
}
#footer li.router-link-active {
  color: #6bd4bc;
}
</style>
<script>
export default {
};
</script>