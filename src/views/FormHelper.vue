<template>
    <div>
        <h1>Please fill out our form...</h1>
        <form action="">
            <div id="form-header">
                <slot name="form-header"></slot>
            </div>
            <div id="form-filed">
                <slot name="form-fileds"></slot>
            </div>
            <div id="form-controls">
                <slot name="form-controls"></slot>
            </div>
            <div id="useful-link">
                <slot name="useful-link"></slot>
            </div>
            <ul>
                <li><a href="#">Link 1</a></li>
                <li><a href="#">Link 2</a></li>
                <li><a href="#">Link 3</a></li>
                <li><a href="#">Link 4</a></li>
                <li><a href="#">Link 5</a></li>
            </ul>
        </form>
    </div>
</template>

<script>
export default {
    components: {

    },
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>

<style scoped>
h1 {
  text-align: center;  
}
form {
  width: 100%;
  max-width: 960;
  margin: 0 auto;  
}
#useful-link ul {
  padding: 0;
}
#useful-link li {
  display: inline-block;
  margin-right: 10px;  
}
form > div {
    padding: 20px;
    background: #eee;
    margin: 20px 0;
}
#form-header {
    background: #ddd;
    border: 1px solid #bbb;
}
</style>
