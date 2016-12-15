<template>
  <div class="box">
    <img src="../assets/images/logo.png">
    <h1>\{{ msg }}</h1>
    <h2>vue-route</h2>
    <ul>
        <li><router-link to="test">第二个页面</router-link></li>
    </ul>
    <h2>vuex</h2>
    <ul>
        <li>当前：\{{nums}} <a href="javascript:;"  @click="addNum(1)">点击数字+1</a></li>
    </ul>
    <h2>Essential Links</h2>
    <ul>
        <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
        <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
        <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
        <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
        <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
        <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
        <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
        <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions} from 'vuex'

export default {
    data () {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    computed: mapGetters({
        nums: 'getNumsSelf'
    }),
    methods: mapActions([
        'addNum'
    ])
}
</script>

<style scoped>
.box {
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    font-size: 18px;
    line-height: 35px;
}

.box li {
    display: inline-block;
    margin: 0 10px;
}

.box a {
    color: #42b983;
}
</style>
