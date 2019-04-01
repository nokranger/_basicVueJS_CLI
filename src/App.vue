<template>
  <div>
    <add-blog></add-blog>
    <!-- <keep-alive>
    <component v-bind:is="component"></component>
    </keep-alive>
    <button v-on:click="component = 'form-one'">Show form one</button>
    <button v-on:click="component = 'form-two'">Show form Two</button> -->
  </div>
</template>

<script>
import formOne from './views/formOne.vue'
import formTwo from './views/formTwo.vue'
import AddBlog from './views/AddBlog.vue'

export default {
  components: {
    'form-one': formOne,
    'form-two': formTwo,
    'add-blog': AddBlog
  },
  data() {
    return {
      component: 'form-two',
    };
  },
  methods: {

  }
};
</script>

<style scoped>

</style>
