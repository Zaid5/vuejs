<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link to="/" class="navbar-brand">Stock Trader</router-link>

    <div class="collapse navbar-collapse">
      <ul class="nav navbar-nav">
        <router-link to="/portfolio" active-class="active" tag="li"><a>Portfolio</a></router-link>
        <router-link to="/stocks" active-class="active" tag="li"><a>Stocks</a></router-link>
      </ul>
      <strong class="navbar-text navbar-right">Funds: {{funds}}</strong>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="">End Day</a></li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle"
             href="#"
             id="navbarDropdown"
             role="button"
             data-toggle="dropdown"
             aria-haspopup="true"
             aria-expanded="false"
          >
            Save & Load
          </a>
          <div class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Save Data</a></li>
            <li><a class="dropdown-item" href="#">Load Data</a></li>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    computed:{
      funds(){
        return this.$store.getters.funds;
      }
    }
  }
</script>