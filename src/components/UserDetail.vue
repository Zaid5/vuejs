<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>Username: {{name}}</p>
  </div>
</template>

<script>
  export default {
    // for transferring data from PARENT to CHILD we use PROPS(property set from outside i.e PARENT) property
    props: ['name']
  }
</script>

<style scoped>
  div {
    background-color: lightcoral;
  }
</style>
