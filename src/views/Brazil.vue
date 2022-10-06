<template>
  <div>
    <h1>Welcome to Brazil guide</h1>
    <div class="destinations">
      <router-link
        v-for="destination in destinations"
        :key="destination.id"
        :to="destination.slug"
      >
        <h2>{{ destination.name }}</h2>
        <img
          :src="`/images/${destination.image}`"
          :alt="destination.name"
          class="images"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
import sourseData from "@/data.json";

export default {
  name: "Brazil",

  data() {
    return {
      destinations: sourseData.destinations,
    };
  },

  mounted() {
    console.log(sourseData);
  },
};
</script>

<style scoped>
.destinations {
  display: flex;
  justify-content: center;
}

.images {
  padding: 10px;
}
</style>
