<template>
  <div>
    <div class="top">
      <router-link to="/set" tag="span">
        <van-icon name="arrow-left" />
      </router-link>
      <span>常见问题</span>
    </div>
    <div>
      <van-collapse v-model="activeNames">
        <van-collapse-item
          title="Q∶为什么我的手机（安卓）连接不上智能秤?"
          name="1"
        >
          1、请检查WFi网络是否畅通<br />
          2、请检查蓝牙是否正常开启<br />
          3、请检查您的安卓手机是否在兼容列表内<br />
          4、系统版本是否达到Android4.3<br />
          5、您的秤是否在有效连接范围内，手机和智能秤之间的距离不要大于2米<br />
          6、检测2米内其他用户手机是否开启软件并已连接瘦啦秤
        </van-collapse-item>
        <van-collapse-item
          title="Q∶为什么连接后体重出来了，而BMI值没有测出来?"
          name="2"
        >
          1、本秤是采用的生物电阻原理，您需脱掉袜子光脚站在秤上才可以计算出身体的8项指标哦<br />
          2、试试退出程序再打开，重新称一次体重
        </van-collapse-item>
        <van-collapse-item title="Q∶为什么使用时突然就退出程序了?" name="3">
          如果您遇到这种情况影响了您的正常使用，可以联系我们的瘦啦顾问，她会跟您了解详细情况并帮您解决问题!
        </van-collapse-item>
        <van-collapse-item title="Q∶这个秤测出来的各项数据准确么?" name="4">
          在硬件方面我们采用最好的传感器，以提高测量的灵敏度，出厂前所有的产品必须通过几十项测试,使用的是日本市场出货标准检验，亲可以放心!
        </van-collapse-item>
        <van-collapse-item title="Q∶为什么我觉得称出来的体重不准确?" name="5">
          如果您遇到这种情况影响了您的正常使用，可以联系我们的瘦啦顾问，她会跟您了解详细情况并帮您解决问题!
        </van-collapse-item>
        <van-collapse-item title="Q∶为什么使用时突然就退出程序了?" name="6">
          1、检查瘦啦秤放置地面，是否安装地毯脚垫（一定要放置在平整地面进行称重)<br />
          2、称重过程中是否有外力影响<br />
          3、瘦啦秤校准过程是否完成（每次称重需要间隔2-5秒等待校准，然后再进行称重)
        </van-collapse-item>
        <van-collapse-item
          title="Q∶为什么瘦啦秤的数据与我在健身房的数据不同呢?"
          name="7"
        >
          因健身房的仪器是健身教练根据自身的运动量来调试的，其算法也是根据高运动量的人来设置,所以与真实测量结果会有些偏差，您可根据不同情况下以一方为主。
        </van-collapse-item>
        <van-collapse-item
          title="Q:为什么我明明比我老公瘦，我的脂肪率比我老公还高啊?"
          name="8"
        >
          因为男女体质不同，同一标准下的女性脂肪含量都会高于男性至少5%，简单来说，想想看为什么女性比男性线条柔和就知道了。
        </van-collapse-item>
        <van-collapse-item title="Q:访客记录为什么无法保存?" name="9">
          访客模式就是为了滿足有人想用亲的手机测量，只需短暂使用一次时设置的哦，所以结果是一次性的，如果想保存记录，亲可以把该账号设置为家庭成员即可哦。
        </van-collapse-item>
        <van-collapse-item title="Q:一台秤可以几个人使用?" name="10">
          一台瘦啦秤可以对应多部手机，同时供12个人一起使用，每个人都可以用自己的手机登自己的账号然后使用。同时，一台手机上主账号下面又可以添加11个家庭成员。可以全家人用一个账号登录测量,一个APP，全家健康一手掌握。
        </van-collapse-item>
      </van-collapse>
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
</style>
<script>
export default {
  data() {
    return {
      activeNames: ["0"],
    };
  },
};
</script>