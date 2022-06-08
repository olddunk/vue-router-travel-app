<template>
  <TheNavigation />
  <div class="container">
    <router-view />
  </div>
</template>
<script>
import TheNavigation from "@/components/TheNavigation.vue";
export default {
  components: {
    TheNavigation,
  },
};
</script>

<style lang="css">
#nav .vue-school-active-link {
  color: red;
  border-bottom: 1px solid red;
}
</style>
