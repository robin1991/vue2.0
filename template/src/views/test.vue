<template>
<div class="box">
	<router-link to="/">回到首页</router-link>
	<router-link to="/test1">去test1</router-link>
	<div>当前：\{{nums}}</div>
	<a href="javascript:;"  @click="addNum(2)">点击数字+2</a>
</div>	
</template>
<script>
import { mapGetters, mapActions} from 'vuex'
export default{
	mounted: function(){
		this.$http.post('/api/product/detail-cdn',{
			ProductID: 4134981
		}).then(function(res){
			if(res.data.flag === 1){
				console.log(res)
			}
		});
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

.box a {
    color: #42b983;
}
</style>