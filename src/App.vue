<template>
  <div id="appVue">
    <h3>Link to the router course:</h3>
    <p>https://vueschool.io/courses/vue-router-4-for-everyone.</p>
    <p>ROUTE NAVIGATION & PARAMETERS | VueJS | Learning the Basics</p>
    <p>Computed Properties vs Watch in Vue JS</p>
    <p>48. Implement Vuejs Routing setup using Vue Router in Vue js | Vue 3</p>
    <p>
      https://www.youtube.com/watch?v=n-uQFFj7b4A&list=PL_euSNU_eLbeABjD3xmOrNmNXLbV6kCyp&index=5
    </p>
    <p>
      To navigate to a different URL, use router.push. Read more:
      https://router.vuejs.org/guide/essentials/navigation.html
    </p>
    <p>
      https://router.vuejs.org/guide/essentials/history-mode.html#firebase-hosting
    </p>

    <hr />
    <!-- <a href="/">HOME</a> -->

    <!-- best practice to do as below, take 'name' and not 'path' -->
    <router-link :to="{ name: 'home' }">Home</router-link>
    <!-- <router-link to="/">Home</router-link> -->
    <router-link to="/users/10" class="about"
      >users with id {{ $route.params.id }}</router-link
    >
    <router-link to="/users/12" class="about"
      >users with id {{ $route.params.id }}</router-link
    >
    <hr />
    <Navigation />
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div>
            <router-view></router-view>
          </div>
          <div>
            <router-view name="footer"></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "./views/Navigation.vue";
export default {
  name: "App",
  components: {
    Navigation,
  },
};
</script>

<style scoped>
#appVue {
  text-align: center;
}
.about {
  padding: 10px;
}
</style>
