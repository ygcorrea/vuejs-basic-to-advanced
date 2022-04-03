<template>
  <div class="user">
    <h1>Users</h1>
    <hr />
    <router-view />
    <button sucesso @click="goToMain">Voltar</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToMain() {
      //   this.$router.push("/");
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style>
</style>