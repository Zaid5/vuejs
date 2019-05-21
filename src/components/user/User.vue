<template>
  <div>
    <h1>The User Page</h1>
    <hr>
    <button class="btn btn-primary" @click="backToHome">Back to Home</button>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    methods:{
      backToHome(){
        this.$router.push({name: 'home' });
      }
    },
  }
</script>