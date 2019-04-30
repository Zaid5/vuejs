<template>
  <div>
    <app-title v-for="title in 5"></app-title>
  </div>
</template>
<script>
  //local component
  import PageTitle from "./PageTitle";
  export default {
    components: {
      'app-title': PageTitle
    },
  }
</script>
