<template>
<div>
    <h1> {{message}}</h1>

    <h2>Add post</h2>
    <form v-on:submit = "addPost">
        <input type="text" v-model = "newPost.title" placeholder="Enter title">
        <input type="text" v-model = "newPost.body" placeholder="Enter body">
        <select v-model = "newPost.userId">
            <option value = "1" >Dor</option>
            <option value = "2">Moshe</option>
            <option value = "3">Yaniv</option>
        </select>
        <input type="submit" value="Submit">
    </form>
    <hr>

    <h2> Current posts</h2>
    <ul v-for = "post in posts" :key="post.id">
        <li>userId: {{post.userId}}</li>
        <li>postId: {{post.id}}</li>
        <li>title: {{post.title}}</li>
        <li>body: {{post.body}}</li>
        
    </ul>
</div>
</template>

<script>
export default {
  name: "Posts",
  data() {
    return {
      newPost: {},
      currentId: 2
    }
  },
  methods:{
    addPost: function(event) {
        this.$http.post('https://jsonplaceholder.typicode.com/posts',{
            userId: this.newPost.userId,
            title: this.newPost.title,
            body: this.newPost.body
        })
        .then(function(data){
            console.log(data)
        })
        
        event.preventDefault();
    }
  } ,
  created: function(){

  },
  computed: {
      posts() {
          return this.$store.state.posts
      },
      message() {
          return this.$store.getters.getMessageExtra
      }
  }
};
</script>

<style scoped>
</style>