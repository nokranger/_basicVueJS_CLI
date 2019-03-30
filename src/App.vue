<template>
  <div>
    <h1>{{ title }}</h1>
    <nok></nok>
  </div>
</template>

<script>
import Nokranger from "./views/Nok.vue";
export default {
  components: {
    nok: Nokranger
  },
  data() {
    return {
      title: "Nokranger App"
    };
  }
};
</script>

<style scoped>
h1 {
  color: purple;
}
</style>
