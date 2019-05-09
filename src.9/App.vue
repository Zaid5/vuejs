<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <button style="background: red" @click="selectedComponent = 'appQuote'">Quote</button>
        <button style="background: skyblue" @click="selectedComponent = 'appAuthor'">Author</button>
        <button style="background: lightgreen" @click="selectedComponent = 'appNew'">New</button>
        <p>{{selectedComponent}}</p>
        <keep-alive>
          <component :is="selectedComponent"><p>Default</p></component>
        </keep-alive>
<!--        <appQuote>-->
<!--          <h1 slot="title">{{msgTitle}}</h1>-->
<!--          <p slot="content">a wonderful day</p>-->
<!--        </appQuote>-->
      </div>
    </div>
  </div>
</template>

<script>
  import Quote from './components/Quote.vue';
  import Author from './components/Author.vue';
  import New from './components/New.vue';
  export default {
    data(){
      return {
        msgTitle: 'the message',
        selectedComponent: 'appQuote'
      }
    },
    components: {
      appQuote: Quote,
      appAuthor: Author,
      appNew: New,
    }
  };
</script>

<style>
</style>
