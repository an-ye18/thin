import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    routes: [{
            path: "/",
            component: () =>
                import ("./views/Index.vue"),
            children: [{
                    // 瘦啦
                    path: "thin",
                    component: () =>
                        import ("./views/Thin.vue"),
                }, {
                    // 资讯
                    path: "info",
                    component: () =>
                        import ("./views/Info.vue"),
                }, {
                    // 顾问
                    path: "adviser",
                    component: () =>
                        import ("./views/Adviser.vue"),
                }, {
                    // 瘦啦
                    path: "mine",
                    component: () =>
                        import ("./views/Mine.vue"),
                },
                {
                    // 重定向到瘦啦主页
                    path: '/',
                    redirect: '/thin'
                }
            ]
        },
        {
            //登录
            path: "/login",
            component: () =>
                import ("./views/Login.vue")
        },
        {
            //登录1
            path: "/login1",
            component: () =>
                import ("./views/Login1.vue")
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
        }
    ]
});