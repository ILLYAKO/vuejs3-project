<template>
  <form @submit.prevent>
    <h4>Create post</h4>
    <my-input v-model="post.title" placeholder="Name" />
    <my-input v-model="post.body" placeholder="Description" />
    <my-button
      style="margin-top: 15px; align-self: flex-end"
      @click="createPost"
      >Create</my-button
    >
  </form>
</template>

<script>
import MyButton from "./UI/MyButton.vue";
export default {
  components: { MyButton },
  data() {
    return {
      post: {
        title: ``,
        body: ``,
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit(`create`, this.post);
      this.post = {
        title: ``,
        body: ``,
      };
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
</style>
