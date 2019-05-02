<template>
  <div class="component">
    <h1>The User Component</h1>
    <p>I'm an awesome User!</p>
    <button @click="changeName">Change Name</button>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <!-- :name refers to name property in data -->
        <app-user-detail :myName="name"
                         @nameWasReset="name = $event"
                         :resetFn = "resetName"
        >
        </app-user-detail>
        <!-- for more clearance -->
        <!-- can double check by removing @nameWasReset="name = $event" from above element -->
        <p>my name is {{name}}</p>
      </div>
      <div class="col-xs-12 col-sm-6">
        <app-user-edit></app-user-edit>
      </div>
    </div>
  </div>
</template>

<script>
  import UserDetail from './UserDetail.vue';
  import UserEdit from './UserEdit.vue';

  export default {
    data: function(){
      return{
        name: 'zaid'
      };
    },
    methods:{
      changeName: function () {
        this.name = 'bhatti';
      },
      resetName(){
        this.name = 'zaidi';
      }
    },
    components: {
      appUserDetail: UserDetail,
      appUserEdit: UserEdit
    }
  }
</script>

<style scoped>
  div {
    background-color: lightblue;
  }
</style>
