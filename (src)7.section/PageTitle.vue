<template>
  <!--  one root element -->
  <div>
    <h1>Page Title: {{title}}</h1>
    <hr>
    <button @click="changeTitle">Change Title</button>
  </div>
  <!--  one root element -->
</template>
<script>
  // data as function so not conflict with data property of vue instance
  export default {
    data: function () {
      return {title: 'Welcome to Homepage'}
    },
    methods:{
      changeTitle(){
        this.title = 'Welcome again';
      }
    },
  }
</script>
