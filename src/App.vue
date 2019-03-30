<template>
  <div>
    <app-header></app-header>
    <app-article></app-article>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Article from "./components/Article.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    "app-header": Header,
    "app-article": Article,
    "app-footer": Footer
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
