<template>
<<<<<<< HEAD
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/brazil">Brazil</router-link>
    <router-link to="/hawaii">Hawaii</router-link>
    <router-link to="/panama">Panama</router-link>
    <router-link to="/jamaica">Jamaica</router-link>
  </div>
=======
  <TheNavigation />
>>>>>>> lesson2
  <div class="container">
    <router-view />
  </div>
</template>
<script>
import TheNavigation from '@/components/TheNavigation.vue'
  export default {
  components: {
      TheNavigation,
      }
}
</script>

<style lang="css">
#nav .vue-school-active-link {
  color: red;
  border-bottom: 1px solid red;
}
</style>
