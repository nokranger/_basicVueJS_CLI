<template>
    <div id="add-blog">
        <h1>Add a New Blog Post</h1>
        <form action="">
            <label for="">Blog title : </label>
            <input type="text" v-model.lazy="blog.title" required><br>
            <label for="">Blog Content</label><br>
            <textarea v-model.lazy="blog.content"></textarea>
        </form>
        <div id="preview">
            <h1>Preview Blog</h1>
            <p>Blog Title : {{ blog.title }}</p>
            <p>Blog Content</p>
            <p>{{ blog.content }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            blog: {
                title: "",
                content: ""
            }
        }
    },
    methods: {

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
</style>

