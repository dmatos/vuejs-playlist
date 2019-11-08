<template>
  <!-- a div must be the root element inside which everthing will be -->
  <div>
    <app-header></app-header>
    <router-view></router-view>
</div>
</template>

<script>
//register Ninjas under App as a component locally (nested hierarchy)
//import formHelper from './components/FormHelper.vue'
import addBlog from './components/addBlog.vue';
import showBlogs from './components/showBlogs.vue';
import listBlogs from './components/listBlogs.vue';
import header from './components/Header.vue';

export default {
  components:{
    'add-blog':addBlog,
    'show-blogs':showBlogs,
    'list-blogs': listBlogs,
    'app-header': header
  },
  data () {
    return {

    }
  },
  methods: {

  }
}

</script>

<style scoped>
body{
  margin:0;
  font: 'Nunito SemiBold';
}

</style>
