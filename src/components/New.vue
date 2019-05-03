<template>
  <div>
    <h3> new quote </h3>
    <button @click="counter++">Counter</button>
    <p>{{counter}}</p>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        counter: 0
      };
    },
    destroyed() {
      console.log('destroyed!');
    },
    deactivated() {
      console.log('deactivated');
    },
    activated() {
      console.log('activated');
    }
  }
</script>
<style>
</style>