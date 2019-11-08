<template>
  <!-- a div must be the root element inside which everthing will be -->
  <div id='add-blog'>
    <h2>Add a New Blog Post</h2>
    <form v-if="!submitted">
      <label>Blog Title:</label>
      <input type="text" v-model.lazy="blog.title" required />
      <textarea v-model.lazy="blog.content" placeholder="Insira seu texto"></textarea>
      <div id="checkboxes">
        <label>Ninjas</label>
        <input type="checkbox" value="ninjas" v-model="blog.categories"/>
        <label>Wizards</label>
        <input type="checkbox" value="wizards" v-model="blog.categories"/>
        <label>Warriors</label>
        <input type="checkbox" value="warriors" v-model="blog.categories"/>
        <label>Barbarians</label>
        <input type="checkbox" value="barbarians" v-model="blog.categories"/>
      </div>
      <label>Author:</label>
      <select v-model="blog.author">
        <option v-for="author in authors">{{author}}</option>
      </select>
      <button @click.prevent="post()">Add Blog</button>
    </form>
    <div v-if="submitted">
      <h3>Thanks for adding your post</h3>
    </div>
    <div id='preview'>
      <h3>Preview Blog</h3>
      <p>
        Blog title:{{blog.title}}
      </p>
      <p>
        Blog content:
      </p>
      <p>
        {{blog.content}}
      </p>
      <p>
        Blog categories:
      </p>
      <ul>
        <li v-for="category in blog.categories"> {{category}} </li>
      </ul>
      <p>
        Author: {{blog.author}}
      </p>
    </div>
</div>
</template>

<script>
//register Ninjas under App as a component locally (nested hierarchy)
//import formHelper from './components/FormHelper.vue'

export default {
  components:{

  },
  data () {
    return {
      blog : {
        title:"",
        content:"",
        categories: [],
        author: ""
      },
      authors:['maria','jose','judas'],
      submitted: false,
    }
  },
  methods: {
    post(){
      this.$http.post("https://vue-playlist-3e5f9.firebaseio.com/blogs.json", this.blog).then(function(data){
        console.log(data);
        this.submitted = true;
      });
    }
  }
}
</script>

<style scoped>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}

#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#checkboxes input{
  display: inline-block;
  margin-right: 10px;
}

#checkboxes label{
  display: inline-block;
}
</style>
