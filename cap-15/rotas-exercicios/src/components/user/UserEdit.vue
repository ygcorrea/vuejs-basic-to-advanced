<template>
  <div class="usuario-editar">
    <h3>User Edit</h3>
    <p><strong>Id:</strong> {{ id }} / {{ $route.params.id }}</p>
    <p><strong>Idiom:</strong> {{ $route.query.idiom }}</p>
    <p>
      <strong>is complete:</strong> {{ $route.query.isComplete ? "Yes" : "No" }}
    </p>
    <div id="footer">
      <h3>Vue course</h3>
    </div>
    <hr />
    <button primario @click="confirmed = true">Confirm leave</button>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      confirmed: false,
    };
  },
  beforeRouteLeave(to, from, next) {
    if (this.confirmed) {
      next();
    } else {
      if (confirm("Are you sure?")) {
        next();
      } else {
        next(false);
      }
    }
  },
};
</script>

<style>
#footer {
  margin-top: 100px;
}
</style>