<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

  <button @click="setComponent('OneComponent')">One Component</button>
  <button @click="setComponent('TwoComponent')">Two Component</button>
  <!-- <OneComponent v-if="selectedComponent === 'OneComponent'"></OneComponent> -->
  <!-- <TwoComponent v-if="selectedComponent === 'TwoComponent'"></TwoComponent> -->
  <keep-alive>
    <component :is="selectedComponent"></component>
  </keep-alive>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import OneComponent from "./components/OneComponent.vue";
import TwoComponent from "./components/TwoComponent.vue";

export default {
  name: "App",
  components: {
    OneComponent,
    TwoComponent,
  },
  data() {
    return {
      selectedComponent: "OneComponent",
    };
  },
  methods: {
    setComponent(comp) {
      this.selectedComponent = comp;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
