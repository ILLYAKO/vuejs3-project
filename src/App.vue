<template>
  <div class="app">
    <h1>Page of Posts</h1>
    <my-input v-model="searchedQuery" placeholder="Name Search..." />
    <div class="app__btns">
      <my-button @click="showDialog">Create Post</my-button>
      <my-select v-model="selectedSort" :options="sortOptions" />
    </div>

    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost"
    /></my-dialog>
    <post-list
      :posts="sortedAndSearchedPosts"
      @remove="removePost"
      v-if="!isPostsLoading"
    />
    <div v-else>Loading...</div>
    <div class="page__wrapper">
      <div
        v-for="pageNumber in totalPages"
        v-bind:key="pageNumber"
        class="page"
        :class="{ 'current-page': page === pageNumber }"
        @click="changePage(pageNumber)"
      >
        {{ pageNumber }}
      </div>
    </div>
  </div>
</template>
<script>
import PostForm from "./components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import axios from "axios";
export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      modificatorValue: "",
      isPostsLoading: false,
      page: 1,
      limit: 5,
      totalPages: 0,
      selectedSort: "",
      searchedQuery: "",
      sortOptions: [
        { value: "title", name: "Name" },
        { value: "body", name: "Description" },
      ],
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
    async fetchPosts() {
      try {
        this.isPostsLoading = true;
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: { _page: this.page, _limit: this.limit },
          }
        );
        this.totalPages = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );
        this.posts = response.data;
        this.isPostsLoading = false;
      } catch (error) {
        alert(error);
      } finally {
        this.isPostsLoading = false;
      }
    },
    changePage(pageNumber) {
      this.page = pageNumber;
      // this.fetchPosts();
    },
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) => {
        return post1[this.selectedSort]?.localeCompare(
          post2[this.selectedSort]
        );
      });
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(this.searchedQuery.toLowerCase())
      );
    },
  },
  watch: {
    page() {
      this.fetchPosts();
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
.app__btns {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}
.page__wrapper {
  display: flex;
  margin-top: 15px;
}
.page {
  border: 1px solid black;
  padding: 10px;
}
.current-page {
  border: 2px solid teal;
}
</style>
<!-- Single file component. -->
