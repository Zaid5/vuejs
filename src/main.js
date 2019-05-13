import Vue from 'vue'
import App from './App.vue'


Vue.directive('highlight',{
  bind(el,binding,vnode){
    // el.style.backgroundColor = 'lightgreen';
    el.style. backgroundColor = binding.value;  //user determine the bg color
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
});
