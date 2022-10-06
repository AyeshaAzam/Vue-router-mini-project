<template>
  <div>
    <h1>This is Users view</h1>
    <p>This is User id : {{ $route.params.id }}</p>
    <button @click="goHome">Go Home</button>
  </div>
</template>

<script>
export default {
  name: "Users",
  data() {
    return {};
  },
  // 'to' which route are we navigating and 'from' which route we are coming
  watch: {
    $route(to, from) {
      // alert(to.params.id);
    },
  },
  created() {
    // alert("'this' component is created", this.$route.params.id);
  },
  methods: {
    goHome() {
      console.log("Clicked");
      // this.$router.push("/"); // do this way or the below way
      this.$router.push({ name: "home" });
    },
  },
  mounted() {
    console.log("router ", this.$router);
    console.log("route ", this.$route);
  },
};
</script>

<style scoped></style>
