import Vue from 'vue'
import App from './App.vue'


Vue.directive('highlight',{
  bind(el,binding,vnode){
    // el.style.backgroundColor = 'lightgreen';
    // el.style. backgroundColor = binding.value;  //user determine the bg color
    if (binding.arg == 'background') {
      el.style.backgroundColor = binding.value;
    }
    else{
        el.style.color = binding.value;
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
});
