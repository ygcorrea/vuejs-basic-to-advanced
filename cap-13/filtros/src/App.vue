<template>
  <div id="app">
    <h3>Filtros & Mixins</h3>
    <hr />
    <p>{{ cpf | cpf | reverse }}</p>
    <input type="text" :value="cpf | cpf" />
    <hr />
    <hr />
    <Fruits />
    <hr />
    <div>
      <input type="text" v-model="fruit" @keydown.enter="addFruit" />
      <br />
      <button @click="addFruit">Add Fruit</button>
      <br />
      <ul>
        <li v-for="(fruit, i) in fruits" :key="i">{{ fruit }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import frutasMixin from "./frutasMixin";
import userMixin from "./userMixin";
import Fruits from "./Fruits.vue";
export default {
  mixins: [frutasMixin, userMixin],
  components: { Fruits },
  filters: {
    cpf(value) {
      const arr = value.split("");
      arr.splice(3, 0, ".");
      arr.splice(7, 0, ".");
      arr.splice(11, 0, "-");
      return arr.join("");
    },
  },
  data() {
    return {
      cpf: "60070080090",
    };
  },
  created() {
    console.log("Created - App.vue");
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 2.5rem;
}
input {
  font-size: 2.5rem;
}
</style>
