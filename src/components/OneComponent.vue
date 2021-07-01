<template>
  <div>
    One Component
    <input type="text" ref="goal" />
    <button @click="setInputValue">set value</button>
    <teleport to="body">
      <ErrorAlert v-if="inputIsInvalid">
        <h1>Input is Invalid</h1>
        <p>Please Enter some characters</p>
        <button @click="confirmAlert">Okay</button>
      </ErrorAlert>
    </teleport>
  </div>
</template>

<script>
// import ErrorAlert from "./ErrorAlert.vue";
import ErrorAlert from "./ErrorAlert.vue"
export default {
  components: {
    ErrorAlert,
  },
  data() {
    return {
      inputIsInvalid: false,
    };
  },
  methods: {
    setInputValue() {
      const enteredValue = this.$refs.goal.value;
      if (enteredValue === "") {
        this.inputIsInvalid = true;
      }
    },
    confirmAlert() {
      this.inputIsInvalid = false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
