<template>
  <!-- a div must be the root element inside which everthing will be -->
  <div id="single-blog">
    <h1>{{blog.title}}</h1>
    <article>
      {{blog.body}}
    </article>
    <p>Author: {{ blog.author }}</p>
    <p>Categories:</p>
    <ul>
      <li v-for="category in blog.categories">{{ category }}</li>
    </ul>
  </div>

  
</template>


<script>
export default{

  data(){
    return {
      id: this.$route.params.id,
      blog: {
      }
    }
  },
  methods: {

  },
  created(){
    this.$http.get("https://vue-playlist-3e5f9.firebaseio.com/blogs/"+this.id+".json").then(
      function(data){
        return data.json();
      }
    ).then(function(data){
      this.blog = data;
    })
  }
}
</script>

<style scoped>
#single-blog{
  max-width: 960px;
  margin: 0 auto;
}
</style>
