/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-08-15 10:26:57
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-08-17 14:10:04
 * @Descripttion:
 */
import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// 引入elementUI
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

// 引入svg
import "./icons";

// 引入路由权限控制
import "./permission";

// 引入自定义指令
import directives from "./directives";
Vue.use(directives);

new Vue({
    el: "#app",
    router,
    store,
    components: { App },
    template: "<App/>"
});
