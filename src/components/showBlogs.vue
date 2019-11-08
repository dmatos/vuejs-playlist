<template>
  <div v-theme:column="'narrow'" id="show-blogs">
    <h1>All Blog Articles</h1>
    <input type="text" v-model="search" placeholder="search blogs"/>
    <div v-for="blog in filteredBlogs" class="single-blog">
      <<router-link :to="'/blog/'+blog.id"><h2> {{blog.title | to-uppercase}}</h2></router-link>
      <article>
        {{blog.content | snippet}}
      </article>
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
    this.$http.get("https://vue-playlist-3e5f9.firebaseio.com/blogs.json").then(function(data){
      //console.log(data.json());
      return data.json();
    }).then(function(data){
      var blogsArray = [];
      for (let key in data){
        data[key].id = key;
        blogsArray.push(data[key]);
        //console.log(data[key]);
      }
      this.blogs = blogsArray;
      //console.log(data);
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
  mixins : [searchMixin]
}

</script>

<style scoped>
#show-blogs {
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
