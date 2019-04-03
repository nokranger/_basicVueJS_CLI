<template>
  <div id="single-blog">
    <h1>{{ blog.title }}</h1>
    <article>{{ blog.content }}</article>
    <p>Author : {{ blog.author }}</p>
    <ul>
      <li v-for="(catagory, index) in blog.categories" :key="index">{{ catagory }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      blog: {}
    }
  },
  created() {
    // alert('create')
    this.$http
      .get("https://thenok-1a0e9.firebaseio.com/posts/" + this.id + ".json").then(function(data) {
        return data.json();
        // this.blog = data.body;
      }).then(function(data){
        this.blog = data
      });
  }
}
</script>

<style scoped>
#single-blog {
  max-width: 960px;
  margin: 0 auto;  
}
</style>

