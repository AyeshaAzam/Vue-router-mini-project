<template>
  <div class="row">
    <div class="col-md-8">
      <h3>Show Posts details</h3>
      <table class="table-data">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
            <th>Child-routes</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="post in postDetails" :key="post.id">
            <td>{{ post.id }}</td>
            <td>{{ post.title }}</td>
            <td>{{ post.body }}</td>
            <td>
              <!--here we will send the POST id ( coming from main.js: path: '/posts/:id', component: PostItem) -->
              <router-link :to="`/posts/${post.id}`" class="btn btn-primary"
                >Show Details</router-link
              >
            </td>
            <td>
              <router-link :to="`/posts/${post.id}`" class="btn btn-success"
                >Show Post Rightside
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="col-md-4">
      <!-- <post-item-as-child /> -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import PostItemAsChild from "./PostItemAsChild.vue";

export default {
  name: "Posts",
  components: { PostItemAsChild },
  data() {
    return {
      postDetails: [],
    };
  },

  mounted() {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then((response) => {
      this.formatPosts(response.data);
      console.log(response.data);
    });
  },
  methods: {
    formatPosts(postsData) {
      for (let key in postsData) {
        this.postDetails.push({ ...postsData[key], id: key });
      }
    },
  },
};
</script>

<style scoped>
.table-data {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

.table-data td,
.table-data th {
  border: 1px solid #ddd;
  padding: 8px;
}

.table-data tr:nth-child(even) {
  background-color: #f2f2f2;
}

.table-data tr:hover {
  background-color: #ddd;
}
.table-data th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04aa6d;
  color: white;
}
</style>
