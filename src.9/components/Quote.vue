<template>
  <div>
    <div style="background-color: burlywood" class="title">
      <slot name="title"></slot>
      <span style="color: deeppink;"><slot name="subtitle">subtile</slot></span>
    </div>
    <div style="background-color: palevioletred">
      <slot name="content"></slot>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
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
  h1{
    color: red;
  }
  .title{
    font-style: italic;
  }
</style>