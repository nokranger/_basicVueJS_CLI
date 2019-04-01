<template>
  <div id="ranger">
    <u>
      <li v-for="(rangers, index) in ranger" :key="index" v-on:click="rangers.show = !rangers.show">
        <h2>{{ rangers.name }}</h2>
        <h3 v-show="rangers.show">{{ rangers.speciality }}</h3>
      </li>
    </u>
    <button v-on:click="deleteRanger">Delete</button>
  </div>
</template>

<script>
export default {
  props: {
    ranger: {
      type: Array,
      required: true
    }
  },
  data() {
    return {};
  },
  methods: {
    deleteRanger: function() {
      this.ranger.pop();
    }
  },
  beforeCreate(){
    alert('beforeCreate');
  },
  created(){
    alert('created');
  },
  beforeMount(){
    alert('beforeMount');
  },
  mounted(){
    alert('mounted');
  },
  beforeUpdate(){
    alert('beforeUpdate');
  },
  updated(){
    alert('updated');
  }
};
</script>

<style scoped>
#ranger {
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}
ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}

li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
  margin: 10px;
}

</style>
