import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

import Routes from './routes'

//import Ninjas globally
//import Ninjas from './Ninjas.vue'

//set Ninjas as global component
//Vue.component('ninjas',Ninjas);

Vue.use(VueResource);
Vue.use(VueRouter);

// routing
const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})

// Filters
Vue.filter('to-uppercase', function(value){
  return value.toUpperCase();
})


Vue.filter('snippet', function(value){
  return value.slice(0,100) + '...';
})

// Custom directivs
Vue.directive('rainbow', {
  bind(el, binding, vnode){
    //binding refers to info about the connection
    //el refers to the element itself
    el.style.color = "#" + Math.random().toString().slice(2,8);
  }
})

Vue.directive('theme', {
  bind(el, binding, vnode){
    if(binding.value === 'wide'){
      el.style.maxWidth = "1200px"
    } else if(binding.value === 'narrow'){
      el.style.maxWidth = "560px"
    }
    if(binding.arg === 'column'){
      el.style.background = '#ddd';
      el.style.padding = '20px';
    }
  }
})

Vue.directive('search', function(){

})

export const bus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
