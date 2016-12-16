import Vue from 'vue'
import VueRouter from 'vue-router'
import routers from './routers'
import App from './App.vue'
import store from './store'
require('./assets/css/reset.css')

Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes: routers
});

const app = new Vue({
	store,
	router,
	render: h => h(App)
}).$mount('#app')