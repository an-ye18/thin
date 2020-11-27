import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    routes: [{
        path: "/",
        component: () =>
            import ("./views/Index.vue")
    }, {
        path: "/login1",
        component: () =>
            import ("./views/Login1.vue")
    }, {
        path: "/register",
        component: () =>
            import ("./views/Register.vue")
    }, {
        path: "/forget",
        component: () =>
            import ("./views/Forget.vue")
    }]
});