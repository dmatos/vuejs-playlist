<template>
  <div id="ninjas">
    <ul>
      <li v-for="ninja in ninjas" @click="ninja.show = !ninja.show">
        <h2>{{ninja.name}}</h2>
        <h3 v-show="ninja.show">{{ninja.speciality}}</h3>
      </li>
    </ul>
    <button @click="deleteNinjas">Delete ninja</button>
  </div>
</template>

<script>
export default{
  props:{
    ninjas: {
      type: Array,
      required: true
    }
  },
  data(){
    return {

    }
  },
  methods: {
    deleteNinjas() {
      this.ninjas.pop()
    }
  },
  /*
  //lifecycle hooks
  beforeCreate(){
    alert('beforeCreate');
  },
  created(){
    //good for fetch data
    alert('created');
  },
  beforeMount(){
    alert('beforeMount');
  },
  mounted(){
  //good for manipulate the DOM
    alert('mounted');
  },
  beforeUpdate(){
    alert('beforeUpdate');
  },
  updated(){
  //good for manipulate the DOM
    alert('updated');
  }
  */
}
</script>
<style>
#ninjas{
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}
ul{
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li{
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
  margin: 10px;
}
</style>
