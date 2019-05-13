export const fruitMixin = {
  data(){
    return{
      fruits: ['apple','banana','mango','cherry'],
      filterText:'',
    }
  },
  computed:{
    filteredFruits(){
      return this.fruits.filter((element)=>{
        return element.match(this.filterText);
      });
    }
  }
};