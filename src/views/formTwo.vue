<template>
  <div>
    <form-helper>
      <div slot="form-header">
        <h3>Form Two - log in</h3>
        <p>Enter your details to log-in</p>
      </div>
      <div slot="form-fileds">
        <input type="text" placeholder="username" required>
        <input type="password" placeholder="password" required>
      </div>
      <div slot="form-controls">
        <button v-on:click="handleSubmit">Login</button>
      </div>
    </form-helper>
  </div>
</template>

<script>
import formHelper from './FormHelper.vue'
export default {
    components: {
    'form-helper' : formHelper
    },
    data() {
        return {
            conter: 0
        }
    },
    methods: {
        handleSubmit: function (){
            alert('Thank for logging in (form two)')
        }
    }
}
</script>

<style>
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
