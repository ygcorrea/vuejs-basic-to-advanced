<template>
  <div class="usuario-detalhe">
    <h3>User Detail</h3>
    <hr />
    <p><strong>Id:</strong>{{ id }}</p>
    <!-- <router-link tag="button" primario :to="`/user/${id}/edit`">
      Edit 1
    </router-link> -->
    <router-link
      tag="button"
      primario
      :to="{
        name: 'Edit',
        params: { id },
        query: { isComplete: true, idiom: 'pt' },
        hash: '#footer',
      }"
    >
      Edit 2
    </router-link>
  </div>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    console.log("dentro do componente userDetail");
    // next((vm) => {
    //   console.log(vm.id);
    // });
    const isAuth = true;
    isAuth ? next() : next(false);
  },
  props: ["id"],
  //   watch: {
  //     $route(to, from) {
  //       this.id = to.params.id;
  //     },
  //   },
};
</script>

<style>
</style>