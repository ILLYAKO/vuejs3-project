<template>
  <div class="app">
    <post-form />
    <post-list :posts="posts" />
  </div>
</template>
<script>
import PostForm from "./components/PostForm.vue";
import PostList from "@/components/PostList.vue";
export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      posts: [
        { id: 1, title: "JavaScript 1", body: "Post Description 1" },
        { id: 2, title: "JavaScript 2", body: "Post Description 2" },
        { id: 3, title: "JavaScript 3", body: "Post Description 3" },
      ],
      likes: 0,
      dislikes: 0,
      title: "",
      body: "",
    };
  },
  methods: {
    createPost() {
      const newPost = {
        id: Date.now(),
        title: this.title,
        body: this.body,
      };
      this.posts.push(newPost);
      this.title = ``;
      this.body = ``;
    },
    inputTitle(event) {
      this.title = event.target.value;
    },
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: 0;
}
.app {
  padding: 20px;
}
</style>
<!-- Single file component. -->
