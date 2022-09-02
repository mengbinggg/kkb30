<!--
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-08-15 15:30:54
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-08-16 16:22:43
 * @Descripttion: 
-->
<template>
    <li class="menu" v-if="!menu.hidden">
        <div
            class="menu_title"
            v-if="menu.children && menu.children.length > 0"
            @click="handleFoldMenu(menu)"
        >
            <svg-icon v-if="menu.meta.icon" :icon="menu.meta.icon" />
            <span class="title">{{ menu.meta.title }}</span>
            <span class="floder-icon">
                {{ isFold ? "+" : "-" }}
            </span>
        </div>
        <div class="menu_link" v-else>
            <router-link :to="pathResolve(menu.path)">
                {{ menu.meta.title }}
            </router-link>
        </div>

        <ul
            class="menus"
            v-if="menu.children && menu.children.length > 0"
            v-show="!isFold"
        >
            <m-menu-item
                v-for="subMenu in menu.children"
                :menu="subMenu"
                :key="subMenu.path"
                :basePath="menu.path"
            ></m-menu-item>
        </ul>
    </li>
</template>
<script>
import path from "path";
export default {
    name: "mMenuItem",
    props: {
        menu: {
            type: Object,
            require: true
        },
        basePath: {
            type: String,
            default: "/"
        }
    },
    data() {
        return {
            isFold: this.menu.isFold || true
        };
    },
    methods: {
        pathResolve(currentPath) {
            return path.resolve(this.basePath, currentPath);
        },
        handleFoldMenu() {
            this.isFold = !this.isFold;
        }
    }
};
</script>
<style scoped>
ul,
li {
    list-style: none;
}

.menu_title,
.menu_link {
    cursor: pointer;
}
</style>
