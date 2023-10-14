<template>
  <div></div>
  <button v-on:click="addLike">Likes</button>
  <button @click="addDislike">DisLikes</button>

  <div>
    Likes: <strong>{{ likes }}</strong>
  </div>
  <div>
    Dislikes: <strong>{{ dislikes }}</strong>
  </div>
</template>
<script>
export default {
  data() {
    return {
      likes: 0,
      dislikes: 0,
    };
  },
  methods: {
    addLike() {
      this.likes += 1;
    },
    addDislike() {
      this.dislikes += 1;
    },
  },
};
</script>
<style></style>
<!-- Single file component. -->
