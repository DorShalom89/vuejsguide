// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router';
import HelloWorld from './components/HelloWorld'
import Test from './components/Test'
import Posts from './components/Posts'
import vueResource from 'vue-resource'
import {store} from './store'


Vue.use(VueRouter)
Vue.use(vueResource)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: HelloWorld
    },
    {
      path: '/test/:id',
      component: Test
    },
    {
      path: '/posts',
      component: Posts
    }
  ]
});
/* eslint-disable no-new */
new Vue({
store: store,
router,
template: `
<div id="app">
  <ul>
    <li> <router-link to="/" > Hello </router-link></li>
    <li> <router-link to="/test/2" > Test </router-link></li>
    <li> <router-link to="/posts" > Posts </router-link></li>
  </ul>
  <router-view></router-view>
</div>
`
}).$mount('#app')
