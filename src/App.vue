<template>
  <div>
    <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
    <app-article v-bind:ranger="ranger"></app-article>
    <app-footer v-bind:title="title"></app-footer>
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
      ranger: [
        {
          name: "Ryu",
          speciality: "Vue Components",
          show: false
        },
        {
          name: "Crystal",
          speciality: "HTML Wizardry",
          show: false
        },
        {
          name: "Hitoshi",
          speciality: "Click Events",
          show: false
        },
        {
          name: "Tango",
          speciality: "Conditionals",
          show: false
        },
        {
          name: "Kami",
          speciality: "Webpack",
          show: false
        },
        {
          name: "Yoshi",
          speciality: "Data Diggin",
          show: false
        }
      ],
      title: "Vue Nok"
    };
  },
  methods: {
    updateTitle: function(updateTitle){
      this.title = updateTitle;
    }
  }
};
</script>

<style scoped>
h1 {
  color: purple;
}
</style>
