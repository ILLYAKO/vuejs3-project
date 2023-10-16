<template>
  <form @submit.prevent>
    <h4>Create post</h4>
    <input
      v-bind:value="post.title"
      @input="post.title = $event.target.value"
      class="input"
      type="text"
      placeholder="Name"
    />
    <input
      v-bind:value="post.body"
      @input="post.body = $event.target.value"
      class="input"
      type="text"
      placeholder="Description"
    />
    <button class="btn" @click="createPost">Create</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: ``,
        body: ``,
      },
    };
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
.input {
  /* width: 100%; */
  border: 2px solid teal;
  padding: 10px 15px;
  margin-top: 15px;
}
.btn {
  margin-top: 15px;
  align-self: flex-end;
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 1px solid teal;
}
</style>
