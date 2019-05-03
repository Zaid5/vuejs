<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <appQuote>
          <h1 slot="title">{{msgTitle}}</h1>
          <p slot="content">a wonderful day</p>
        </appQuote>
      </div>
    </div>
  </div>
</template>

<script>
  import Quote from './components/Quote.vue';
  export default {
    data(){
      return {
        msgTitle: 'the message'
      }
    },
    components: {
      appQuote: Quote
    }
  };
</script>

<style>
</style>
