<template>
  <div>
    <h1>List of Ranger</h1>
    <ul>
      <li v-for="(rangers, index) in ranger" :key="index">
        {{ index }}.{{ rangers }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ranger: ["Nok", "Boom", "Black"]
    };
  }
};
</script>

<style scoped>
h1 {
  color: green;
}
</style>
