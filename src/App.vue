<template>
  <!-- a div must be the root element inside which everthing will be -->
  <div>
  <h1>{{title}}</h1>
  <ninjas></ninjas>
    <p>{{greetings()}}</p>
  </div>
</template>

<script>
//register Ninjas under App as a component locally (nested hierarchy)
import Ninjas from './Ninjas.vue'

export default {
  components:{
    'ninjas':Ninjas
  },
  data () {
    return {
    title: 'Ninja App'
    }
  },
  methods: {
    greetings (){
      return "hey yooooo!";
    }
  }
}
</script>

<style scoped>
h1{
  color:purple
}
</style>
