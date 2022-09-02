/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-08-15 10:35:14
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-08-16 16:44:32
 * @Descripttion: 路由配置信息
 */
import Layout from "@/components/layout";

import Login from "@/views/Login";
import Home from "@/views/Home";
import My from "@/views/My";
import Blog from "@/views/Blog";
import Forum from "@/views/Forum";
import About from "@/views/About";

export const constRoutes = [
    {
        path: "/",
        component: Layout,
        redirect: "/home",
        meta: {
            title: "首页",
            icon: "home"
        },
        children: [
            {
                path: "home",
                component: Home,
                meta: {
                    title: "主页"
                }
            },
            {
                path: "my",
                component: My,
                meta: {
                    title: "我的"
                }
            }
        ]
    },
    {
        path: "/about",
        component: About,
        hidden: true, // 自定义属性，用于区别导航菜单是否显示
        meta: {
            title: "关于"
        }
    },
    {
        path: "/login",
        component: Login,
        hidden: true,
        meta: {
            title: "登录"
        }
    }
];

export const permissionRoutes = [
    {
        path: "/blog",
        component: Layout,
        redirect: "/blog/index",
        meta: {
            title: "博客",
            icon: "blog",
            roles: ["admin"]
        },
        children: [
            {
                path: "index",
                component: Blog,
                meta: {
                    title: "我的博客",
                    roles: ["admin"]
                }
            }
        ]
    },
    {
        path: "/forum",
        component: Layout,
        redirect: "/forum/index",
        meta: {
            title: "论坛",
            icon: "forum",
            roles: ["admin"]
        },
        children: [
            {
                path: "index",
                component: Forum,
                meta: {
                    title: "论坛天地",
                    roles: ["admin"]
                }
            }
        ]
    }
];
