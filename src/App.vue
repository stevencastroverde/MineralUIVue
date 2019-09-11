<template>
  <div id="app">
   <m-button disabled prepend-icon="account_box">Disabled</m-button>
  </div>
</template>

<script>
import MButton from './components/MButton/MButton.vue';

export default {
  name: 'app',
  components: {
    MButton,
  },
};
</script>

<style lang="scss">
*,
::before,
::after {
  padding: 0;
  margin: 0;
  box-sizing: inherit
}
html {
  box-sizing: border-box;
}
#app {
  font-family: 'Open Sans' sans-serif;
}
</style>
