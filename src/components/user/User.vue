<template>
  <div>
    <h1>The User Page</h1>
    <hr>
    <p>Loaded Id: {{id }}</p>
    <button class="btn btn-primary" @click="backToHome">Back to Home</button>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        id: this.$route.params.id
      }
    },
    methods:{
      backToHome(){
        this.$router.push('/');
      }
    },
  }
</script>