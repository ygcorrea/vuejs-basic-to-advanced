<template>
  <div>
    <input type="text" v-model="fruit" @keydown.enter="addFruit" />
    <br />
    <button @click="addFruit">Add Fruit</button>
    <br />
    <ul>
      <li v-for="(fruit, i) in fruits" :key="i">{{ fruit }}</li>
    </ul>
  </div>
</template>

<script>
import frutasMixin from "./frutasMixin";
export default {
  mixins: [frutasMixin],
  data() {
    return {};
  },
  created() {
    console.log("Created - Fruits.vue");
  },
};
</script>

<style>
</style>