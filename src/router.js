import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
        if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
        return originalPush.call(this, location).catch(err => err)
    } //解决版本问题const originalPush = Router.prototype.push

const router = new VueRouter({
    routes: [{
            //登录
            path: "/",
            redirect: "/login"
        }, {
            // 登录
            path: "/login",
            component: () =>
                import ("./views/Login.vue")
        }, {
            // 主页
            path: "/index",
            component: () =>
                import ("./views/Index.vue"),
        }, {
            // 资讯
            path: "/info",
            component: () =>
                import ("./views/Info.vue"),
        }, {
            // 顾问
            path: "/adviser",
            component: () =>
                import ("./views/Adviser.vue"),
        }, {
            // 瘦啦
            path: "/mine",
            component: () =>
                import ("./views/Mine.vue"),
        },
        {
            // 注册
            path: "/register",
            component: () =>
                import ("./views/Register.vue")
        },
        {
            // 忘记密码
            path: "/forget",
            component: () =>
                import ("./views/Forget.vue")
        },
        {
            // 设置
            path: "/set",
            component: () =>
                import ("./views/Set.vue")
        },
        {
            // 常见问题
            path: "/question",
            component: () =>
                import ("./views/Question.vue")
        },
        {
            // 任务
            path: "/task",
            component: () =>
                import ("./views/Task.vue")
        },
        {
            // 数据管理
            path: "/data",
            component: () =>
                import ("./views/Data.vue")
        },
        {
            // 随诊日志
            path: "/daily",
            component: () =>
                import ("./views/Daily.vue")
        },
        {
            // 商城
            path: "/shop",
            component: () =>
                import ("./views/Shop.vue")
        },
        {
            // 商品详情
            path: "/shopMore",
            component: () =>
                import ("./views/ShopMore.vue")
        },
        {
            // 积分告知
            path: "/point",
            component: () =>
                import ("./views/Point.vue")
        }
    ]

});
export default router;
router.beforeEach((to, from, next) => { // 当前路由
    let isLogin = JSON.parse(localStorage.getItem("user"));
    if (isLogin) {
        next() // 放行的意思  next({ ...to, replace: true })
    } else {
        if (to.path === '/login') { // 要去的路由
            next()
                //   next({ path: '/' })保存在store中路由不为空则放行 
                // (动态路由添加后需要保存在某个地方，防止页面被刷新后找不到路由)
        } else {
            next('/login')
        }
    }
})