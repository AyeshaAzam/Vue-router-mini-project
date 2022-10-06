<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Vue Router Project</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item nav-link">
              <router-link to="/">Home</router-link>
            </li>

            <li class="nav-item nav-link">
              <router-link to="/posts">Posts</router-link>
            </li>
            <li class="nav-item nav-link">
              <router-link to="/createpost">CreatePost</router-link>
            </li>
            <li class="nav-item nav-link">
              <router-link to="/brazil">Brazil</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
a.router-link-active {
  background: #e6e6e6;
  padding: 10px;
}
</style>
