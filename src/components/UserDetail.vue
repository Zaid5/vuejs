<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
<!--    <p>Username: {{myName}}</p>-->
    <p>User name: {{switchName()}}</p>
    <p>User age: {{userAge}}</p>
    <button @click="resetName">Reset Name</button>
    <button @click="resetFn()">Reset Name 2</button>
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
      //callback function to communicate with parent (User)
      resetFn: Function,
      userAge: Number
    },
    methods:{
      switchName(){
        return this.myName.split("").reverse().join("");
      },
      //custom event to communicate with parent (User)
      resetName(){
        this.myName = 'zaidu';
        this.$emit('nameWasReset', this.myName);
      },
    },
    created() {
      eventBus.$on('ageWasEdited', (age) => {
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
