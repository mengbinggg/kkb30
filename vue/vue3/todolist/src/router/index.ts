import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Add from '../components/Add.vue'
import Delete from '../components/Delete.vue'
import Done from '../components/Done.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '',
        redirect: {
          name: 'Add',
        },
      },
      {
        path: 'add',
        name: 'Add',
        component: Add,
      },
      {
        path: 'delete',
        name: 'Delete',
        component: Delete,
      },
      {
        path: 'done',
        name: 'Done',
        component: Done,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
})

export default router
