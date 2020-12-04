import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vant from 'vant';
import 'vant/lib/index.css';
import echarts from "echarts"
import axios from 'axios';


Vue.use(Vant);
Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts
Vue.prototype.axios = axios;

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");