import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routers from './routers'
import App from './App.vue'
import store from './store'
require('./assets/css/reset.css')

Vue.use(VueResource)
Vue.http.interceptors.push((request, next) => {

	request.emulateJSON = true
	request.credentials = true

	next((response) => {

		return response
	});
});

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