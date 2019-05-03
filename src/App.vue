<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <appQuote>
          <h1>the message</h1>
          <p>a wonderful day</p>
        </appQuote>
      </div>
    </div>
  </div>
</template>

<script>
  import Quote from './components/Quote.vue';
  export default {
    components: {
      appQuote: Quote
    }
  };
</script>

<style>
</style>
