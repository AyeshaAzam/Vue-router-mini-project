<template>
  <div>
    <h1>This is home page/view</h1>
    <p>Some teste here ....</p>
    <button @click="onPostPage()">Go to Post Page</button>
  </div>
</template>

<script>
export default {
  name: "Home",

  methods: {
    onPostPage() {
      console.log(this.$router);
      this.$router.push({ path: "/posts", query: { id: "10" } }); // with query '?'
    },
  },
};
</script>

<style scoped></style>
