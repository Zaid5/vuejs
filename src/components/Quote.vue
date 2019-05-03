<template>
  <div>
    <p> {{quote}} </p>
  </div>
</template>

<script>
  export default {
    props: ['quote']
  }
</script>
<style scoped>
  div{
    border: 1px solid olivedrab;
    box-shadow: 1px 1px 2px chartreuse;
    padding: 30px;
    margin: 30px auto;
    text-align: center;
  }
</style>