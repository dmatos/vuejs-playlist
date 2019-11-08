<template>
  <div v-theme:column="'narrow'" id="list-blogs">
    <h1>List Blog Titles</h1>
    <input type="text" v-model="search" placeholder="search blogs"/>
    <div v-for="blog in filteredBlogs" class="single-blog">
      <h2 v-rainbow> {{blog.title | to-uppercase}}</h2>
      <!--article>
        {{blog.body | snippet}}
      </article-->
    </div>
  </div>
</template>

<script>
//register Ninjas under App as a component locally (nested hierarchy)
//import formHelper from './components/FormHelper.vue'
import searchMixin from '../mixins/searchMixin';

export default {
  data () {
    return {
      blogs: [],
      search: ""
    }
  },
  methods: {

  },
  created(){
    this.$http.get("http://jsonplaceholder.typicode.com/posts").then(function(data){
      console.log(data);
      this.blogs = data.body.slice(0,10);
    })
  },
  computed: {
  },
  filters: {
    toUppercase(value){
      return value.toUpperCase(value);
    }
  },
  //directive local instead of globally inserted into App.vue
  directives: {
    'rainbow' : {
      bind(el, binding, vnode){
          el.style.color = "#" + Math.random().toString().slice(2,8);
      }
    }
  },
  mixins: [searchMixin]
}

</script>

<style scoped>
#list-blogs {
  max-width: 800px;
  margin: 0 auto;
}
.single-blog{
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>
