<template>
  <div id="app">
    <m-button-group>
      <m-button  prepend-icon="Icon3DRotation" size="jumbo">Testing 1</m-button>
      <m-button  prepend-icon="Icon3DRotation" size="jumbo"> Testing 2</m-button>
   
    </m-button-group>
  </div>
</template>

<script>
import MButtonGroup from './components/MButtonGroup/MButtonGroup.vue';
import MButton from './components/MButton/MButton.vue';

export default {
  name: 'app',
  components: {
    MButton,
    MButtonGroup,
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
