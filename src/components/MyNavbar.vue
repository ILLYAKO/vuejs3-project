<template>
  <div class="navbar">
    <div @click="$router.push('/')">VUE 3</div>
    <div class="navbar__btns">
      <my-button @click="$router.push('/about')">About</my-button>
      <my-button @click="$router.push('/posts')">Posts</my-button>
      <my-button @click="$router.push('/storage')"
        >Posts With Storage</my-button
      >
      <my-button @click="$router.push('/composition')">Composition</my-button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  height: 50px;
  background-color: lightgray;
  box-shadow: 2px, 2px, 4px, gray;
  display: flex;
  align-items: center;
  padding: 0px 15px;
}
.navbar_btns {
  margin-left: auto;
}
</style>
