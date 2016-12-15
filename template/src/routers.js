export default [{
	path: '/',
	name: 'index',
	title: '首页',
	component: (resolve) => {
		require(['./views/index.vue'], resolve)
	}
}, {
	path: '/test',
	name: 'test',
	title: 'test',
	component: (resolve) => {
		require(['./views/test.vue'], resolve)
	}
}, {
	path: '/test1',
	name: 'test1',
	title: 'test1',
	component: (resolve) => {
		require(['./views/test1.vue'], resolve)
	}
}];