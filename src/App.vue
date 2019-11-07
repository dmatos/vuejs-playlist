<template>
  <!-- a div must be the root element inside which everthing will be -->
  <div>
    <app-header v-bind:title="title" @changeTitle="updateTitle($event)"></app-header>
    <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>
  <app-footer v-bind:title="title"></app-footer>
</div>
</template>

<script>
//register Ninjas under App as a component locally (nested hierarchy)
import Ninjas from './components/Ninjas.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  components:{
    'app-header': Header,
    'app-footer': Footer,
    'app-ninjas': Ninjas
    //'ninjas':Ninjas
  },
  data () {
    return {
      title: 'Vue Ninjas',
      ninjas: [
        {name: 'Ryu', speciality:'Vue Components',show:false},
        {name: 'Crystal', speciality:'HTML Wizardy',show:false},
        {name: 'Hitoshi', speciality:'Click Events',show:false},
        {name: 'Tango', speciality:'Conditionals',show:false},
        {name: 'Kami', speciality:'Webpack',show:false},
        {name: 'Yoshi', speciality:'Data Diggin',show:false}
      ]
    }
  },
  methods: {
    greetings (){
      return "hey yooooo!";
    },
    updateTitle(updatedTitle){
      this.title = updatedTitle;
    }
  }
}
</script>

<style scoped>
h1{
  color:purple
}
</style>
