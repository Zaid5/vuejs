<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>Username: {{myName}}</p>
    <p>Age: {{userAge}}</p>
<!--    <p>Username: {{switchName()}}</p>-->
    <button @click="resetName">Reset Name</button>
    <button @click="resetFn">p-resetFn Name</button>
  </div>
</template>

<script>
  import {eventBus} from "../main";

  export default {
    // for transferring data from PARENT to CHILD we use PROPS(property set from outside i.e PARENT) property
    props: {
      myName:{
        type:String,
      },
      resetFn: Function,
      userAge: Number
    },
    methods:{
      // switchName(){
      //   return this.myName.split("").reverse().join("");
      // },
      resetName(){
        this.myName = 'zaidu';
        // this.$emit("nameWasChanged", this.myName);
      },
    },
    created() {
      eventBus.$on('ageWasChanged', (age) => {
        this.userAge = age;
      });
    }
  }
</script>

<style scoped>
  div {
    background-color: lightcoral;
  }
</style>
