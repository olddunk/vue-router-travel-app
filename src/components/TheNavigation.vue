<template>
  <div id="nav">
    <AppLink id="logo" to="/">Vue School Travel App</AppLink>
    <AppLink
      v-for="destination in destinations"
      :to="{
        name: 'destination.show',
        params: { id: destination.id, slug: destination.slug },
      }"
      :key="destination.id"
    >
      {{ destination.name }}
    </AppLink>
    <AppLink to="/protected">Dashboard</AppLink>
    <AppLink to="https://vueschool.io/">Vue School</AppLink>
  </div>
</template>
<script>
import sourceData from "@/data.json";
import AppLink from "./AppLink.vue";
export default {
  data() {
    return {
      destinations: sourceData.destinations,
    };
  },
  components: { AppLink },
};
</script>
