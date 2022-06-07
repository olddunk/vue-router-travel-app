<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/brazil">Brazil</router-link>
    <router-link to="/hawaii">Hawaii</router-link>
    <router-link to="/panama">Panama</router-link>
    <router-link to="/jamaica">Jamaica</router-link>
  </div>
  <div class="container">
    <router-view />
  </div>
</template>

<style>
</style>
