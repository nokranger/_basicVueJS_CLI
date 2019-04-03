<template>
    <div id="add-blog">
        <h1>Add a New Blog Post</h1>
        <form v-if="!submitted">
            <label for="">Blog title : </label>
            <input type="text" v-model.lazy="blog.title" required><br>
            <label for="">Blog Content</label><br>
            <textarea v-model.lazy="blog.content"></textarea>
            <div id="checkbox">
                <label>Ninja</label>
                <input type="checkbox" value="ninja" v-model="blog.categories" />
                <label>Wizards</label>
                <input type="checkbox" value="wizards" v-model="blog.categories" />
                <label>Mario</label>
                <input type="checkbox" value="mario" v-model="blog.categories" />
                <label>Cheese</label>
                <input type="checkbox" value="cheese" v-model="blog.categories" />
            </div>
            <label>Author</label>
            <select v-model="blog.author">
                <option v-for="(author, index) in authors" :key="index">{{ author }}</option>
            </select>
            <button v-on:click.prevent="post">Add blog</button>
        </form>
        <div v-if="submitted">
          <h3>Thank for adding your post</h3>
        </div>
        <div id="preview">
            <h1>Preview Blog</h1>
            <p>Blog Title : {{ blog.title }}</p>
            <p>Blog Content</p>
            <p>{{ blog.content }}</p>
            <p>Blog Categories</p>
            <ul>
                <li v-for="(category, index) in blog.categories" :key="index">{{ category }}</li>
            </ul>
            <p>Author : {{ blog.author}}</p>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            blog: {
                title: "",
                content: "",
                categories: [],
                author: ""
            },
            authors: ['Nokranger','Boomranger','Blckranger'],
            submitted: false,
        }
    },
    methods: {
      post: function(){
        this.$http.post('https://thenok-1a0e9.firebaseio.com/posts.json', this.blog).then(function(data){
          console.log(data)
          this.submitted = true
        });
      }
    }
}
</script>

<style scoped>
#add-blog *{
  box-sizing: border-box;  
}
#add-blog {
  margin: 20px auto;
  max-width: 500;
}
label {
  display: block;  
}
input[type="text"],textarea {
  display: block;
  width: 100%;  
}
#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px;
}
h3 {
    margin-top: 10px;
}
#checkbox input{
  display: inline-block;
  margin-right: 10px;  
}
#checkbox label {
  display: inline-block;   
}
</style>

