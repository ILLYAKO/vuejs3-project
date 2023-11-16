<template>
  <div>
    <h1>Likes: {{ likes }}</h1>
    <button @click="addLike">Add likes</button>
    <h1>Post Page Composition API</h1>
    <my-input v-focus v-model="searchedQuery" placeholder="Name Search..." />
    <div class="app__btns">
      <my-button @click="showDialog">Create Post</my-button>
      <my-select v-model="selectedSort" :options="sortOptions" />
    </div>

    <!-- <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost"
    /></my-dialog> -->
    <post-list
      :posts="sortedAndSearchedPosts"
      @remove="removePost"
      v-if="!isPostsLoading"
    />
    <div v-else>Loading...</div>
    <div v-intersection="loadMorePosts" class="observer"></div>
  </div>
</template>

<script>
// import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import { usePosts } from "@/hooks/usePosts";
import useSortedPosts from "@/hooks/useSortedPosts";
import useSortedAndSearchedPosts from "@/hooks/useSortedAndSearchedPosts";
// import { ref } from "vue";

export default {
  components: {
    // PostForm,
    PostList,
  },
  data() {
    return {
      dialogVisible: false,
      sortOptions: [
        { value: "title", name: "Name" },
        { value: "body", name: "Description" },
      ],
    };
  },
  // eslint-disable-next-line no-unused-vars
  setup(props) {
    const { posts, totalPages, isPostsLoading } = usePosts(10);
    const { sortedPosts, selectedSort } = useSortedPosts(posts);
    const { searchQuery, sortedAndSearchedPosts } =
      useSortedAndSearchedPosts(sortedPosts);
    return {
      posts,
      totalPages,
      isPostsLoading,
      sortedPosts,
      selectedSort,
      searchQuery,
      sortedAndSearchedPosts,
    };
  },
};
</script>
<style scoped></style>
