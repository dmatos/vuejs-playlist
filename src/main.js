import Vue from 'vue'
import App from './App.vue'
//import Ninjas globally
//import Ninjas from './Ninjas.vue'

//set Ninjas as global component
//Vue.component('ninjas',Ninjas);

export const bus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})
