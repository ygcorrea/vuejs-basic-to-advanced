<template>
  <div id="app">
    <h3>Filtros & Mixins (Desafio)</h3>
    <hr />
    <!-- Exercício 1 -->
    <!-- Construir um filtro local que troca espaços por vírgula -->
    <span>{{ phrase | changeSpaceForComma }}</span>
    <hr />
    <!-- Exercício 2 -->
    <!-- Filtro global que conta o tamanho de cada palavra e adiciona o 
			valor na string final -->
    <!-- "Pedro é legal" => "Pedro (5) é (1) legal (5)" -->
    <span>{{ phrase | countWordSize }}</span>
    <hr />
    <!-- Exercício 3 -->
    <!-- Implementar os exercicios 1 e 2 com propriedade computada -->
    <p>{{ phrase }}</p>
    <p>{{ phraseWithComma }}</p>
    <p>{{ phraseWithSizes }}</p>

    <!-- Exercício 4 -->
    <!-- Compartilhe a propriedade computada via mixin -->
  </div>
</template>

<script>
import propsMixin from "./propsMixin";
export default {
  mixins: [propsMixin],
  data() {
    return {
      phrase: "Essa é a frase de teste",
    };
  },
  filters: {
    changeSpaceForComma(value) {
      return value.replace(/\s/g, ",");
    },
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
</style>
