import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/', //在这里配置路由
    name: 'home',
    component: () => import('@views/loading'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
