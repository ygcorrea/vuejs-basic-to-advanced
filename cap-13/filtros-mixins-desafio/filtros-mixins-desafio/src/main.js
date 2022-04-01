import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter(
	'countWordSize', function (value) {
		const text = value.split(' ')
		return text.map(item => `${item} (${item.length})`).join(' ')

	}
)

new Vue({
	render: h => h(App),
}).$mount('#app')
