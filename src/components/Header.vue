<template>
  <!-- a div must be the root element inside which everthing will be -->

    <header>
      <h1 @click="changeTitle()">{{title}}</h1>
    </header>

</template>


<script>
import {bus} from '../main';

export default{
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data(){
  },
  methods: {
    changeTitle(){
      //this.$emit('changeTitle', 'Vue Wizards');
      this.title = "Vue Wizards";
      //bus.$emit("changeTitle", "Vue Wizards");
      bus.$emit('titleChanged', this.title);
    }
  }
}
</script>

<style scoped>
header{
  background: lightgreen;
  padding: 10px;
}
h1{
  color:#222;
  text-align: center;
}
</style>
