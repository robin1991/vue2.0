<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
.child-view {
  position: absolute;
  transition: all .5s cubic-bezier(.55,0,.1,1);
  width: 100%;
  overflow-x: hidden;
}
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
}
</style>
<template>
<div>
<transition :name="transitionName">
    <keep-alive>
        <router-view class="child-view"></router-view>
    </keep-alive>
</transition>
</div>
</template>
<script>
export default{
	data () {
    	return {
        	transitionName: 'fade'
        }
    },
	watch: {
	    '$route' (to, from) {
			const toDepth = to.path.split('/').length;
	      	const fromDepth = from.path.split('/').length;
	      	const toDepthName = to.name;
	      	const fromDepthName = from.name;

	      	if(toDepthName === 'index' && fromDepthName){
	      		this.transitionName = 'slide-right';
	      	}else{
	      		if(toDepth < fromDepth){
		      		this.transitionName = 'slide-right';
		      	}else if(toDepth > fromDepth){
		      		this.transitionName = 'slide-left';
		      	}else{
	      			if(fromDepthName === 'index'){
		      			this.transitionName = 'slide-left';
			      	}else{
	      				this.transitionName = 'fade';
			      	}
		      	}
	      	}
			
	    }
  	}
}	
</script>
