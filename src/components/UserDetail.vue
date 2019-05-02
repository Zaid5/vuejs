<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
<!--    <p>Username: {{myName}}</p>-->
    <p>Username: {{switchName()}}</p>
  </div>
</template>

<script>
  export default {
    // for transferring data from PARENT to CHILD we use PROPS(property set from outside i.e PARENT) property
    props: {
      //adding a default
      myName:{
        type:String,
        default: 'zaid iqbal'
      }
    },
    methods:{
      switchName(){
        return this.myName.split("").reverse().join("");
      }
    }
  }
</script>

<style scoped>
  div {
    background-color: lightcoral;
  }
</style>
