<template>
  <div>
    <h1>Hello {{ username }}</h1>
    <button class="btn" @click="logout">Logout</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: window.username,
    };
  },
  methods: {
    logout() {
      window.username = null;
      this.$router.push({ name: "login" });
    },
  },
};
</script>
