<template>
  <div>
    <h3>Show Children PostItems details</h3>
    <div>Id: {{ id }}</div>
    <div>Title: {{ post.title }}</div>
    <div>Description: {{ post.body }}</div>
  </div>
</template>

<script>
//import axios from "axios";

export default {
  name: "PostItemAsChild",

  data() {
    return {
      post: "",
      id: "",
    };
  },

  created() {
    // this.id = this.$route.params.id; // i got the ID
    // axios
    //   .get(`https://jsonplaceholder.typicode.com/posts?id=${this.id}`)
    //   .then((response) => {
    //     console.log("Child", response.data);
    //     this.post = response.data[0];
    //   });
  },
};
</script>

<style scoped></style>
