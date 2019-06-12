<template>
  <div>
    <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
  </div>
</template>

<script>
  import Stock from './Stock.vue';
  export default {
    data(){
      return{
        stocks: [
          {id: 1, name: 'BMW', price: 11},
          {id: 2, name: 'Google', price: 13},
          {id: 3, name: 'Facebook', price: 15},
          {id: 4, name: 'Descon', price: 16},
        ]
      }
    },
    components:{
      appStock: Stock
    }
  }
</script>