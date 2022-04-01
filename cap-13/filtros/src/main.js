import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('reverse', function (value) {
	return value.split('').reverse().join('')
})
Vue.mixin({
	// raramente usado, pela quantidade de execuções.
	created() {
		console.log('Created -mixin global');
	}
})

new Vue({
	render: h => h(App)
}).$mount('#app')
