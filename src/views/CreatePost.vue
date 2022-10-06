<template>
  <div class="createpost">
    <h3 class="title">Create Posts</h3>
    <form @submit.prevent="onCreatePost()">
      <div class="form-group title">
        <label>Title </label>
        <input type="text" class="form-control" v-model="title" />
      </div>
      <div class="form-group title">
        <label>Description </label>
        <textarea type="text" class="form-control" v-model="description">
        </textarea>
      </div>

      <div>
        <button type="submit" class="btn btn-primary">Create Post</button>
      </div>

      <div>
        <div><strong> Post Title: </strong> {{ title }}</div>
        <div><strong> Post Desc: </strong> {{ description }}</div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "CreatePost",

  data() {
    return {
      title: "",
      description: "",
    };
  },

  methods: {
    onCreatePost() {
      axios
        .post(`https://jsonplaceholder.typicode.com/posts`, {
          title: this.title,
          body: this.description,
        })
        .then((response) => {
          console.log("Res", response.data);
          this.$router.push("/posts");
        })
        .catch(function (error) {
          console.log("Error", error);
        });
    },
  },
};
</script>

<style scoped>
.createpost {
  width: 100%;
  margin: 10px auto;
}
.title {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
}
</style>
