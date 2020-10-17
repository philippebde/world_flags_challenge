import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import {routes} from './routes'

export const router = new VueRouter({
  base: '/',
  mode: 'history',
  routes
});

Vue.use(VueRouter);
Vue.use(VueResource);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
