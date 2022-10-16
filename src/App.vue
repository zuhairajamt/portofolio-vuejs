<script>
//import { RouterLink, RouterView } from 'vue-router';
import DefaultView from './layouts/DefaultView.vue';

export default {
  name: 'App',
  components: {
    DefaultView
  }
}
</script>


<template>
  <DefaultView>
  <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav> -->
  <RouterView /> 
  </DefaultView>
</template>
