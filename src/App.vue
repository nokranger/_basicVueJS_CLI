<template>
  <div>
    <!-- <show-blog></show-blog>
    <list-blog></list-blog> -->
    <router-view></router-view>
    <!-- <add-blog></add-blog> -->
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
import showBlog from './views/showBlog.vue'
import listBlog from './views/listBlogs.vue'

export default {
  components: {
    'form-one': formOne,
    'form-two': formTwo,
    'add-blog': AddBlog,
    'show-blog': showBlog,
    'list-blog': listBlog
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
