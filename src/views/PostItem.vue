<template>
  <div>
    <h2>Post Item Details</h2>
    <div>
      <div>Id: {{ id }}</div>
      <div><strong> Title : </strong>{{ post.title }}</div>
      <div><strong> Description: </strong> {{ post.body }}</div>
    </div>

    <div>
      <router-link to="/posts/3"> Go to PostId : 3 </router-link>
    </div>
    <br />
    <div>
      <router-link class="btn btn-warning" to="/posts"
        >Back to Posts</router-link
      >
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "PostItem",
  components: {},
  data() {
    return {
      post: "",
      id: "",
    };
  },

  // watching for the route and when clicked on id 3 then the details also changes with of Id 3
  created() {
    // this.$watch(
    //   () => this.$route.params,
    //   () => {
    //     //console.log(params);
    //     this.getPostDetails();
    //   }
    // );
    this.getPostDetails();
  },

  watch: {
    $route() {
      console.log("Watch called ", this.$route.params);
      this.getPostDetails();
    },
  },

  methods: {
    getPostDetails() {
      // you have to use the same name as you wrote in routes[ {path: '/posts/:id'}],
      /* In the case of why i need to have zero '[0]' it's really simple, 
     this api returns an array type response, since in this part you are only waiting to retrieve a post, 
     you only read the first index in the array.
    */

      this.id = this.$route.params.id; // i got the ID
      axios
        .get(`https://jsonplaceholder.typicode.com/posts?id=${this.id}`)
        .then((response) => {
          console.log("from Post Item", response.data);
          this.post = response.data[0]; // We are just waiting for a post
          console.log("ID", this.id);
        });
    },
  },
};
</script>

<style scoped></style>
