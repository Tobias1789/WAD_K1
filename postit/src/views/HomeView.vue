<template>
  <main>
    <aside></aside>
    <section class="feed">
      <PostComponent
        v-for="post in posts"
        :key="post.id"
        :post="post"
      />
    </section>
    <aside></aside>
  </main>
</template>

<script>
import PostComponent from "@/components/PostComponent.vue"

export default {
  name: "HomeView",
  components: {
    PostComponent
  },
  computed: {
    // Hangib andmed otse Vuex Store'ist (Task 4.1 nõue)
    posts() {
      return this.$store.state.postsList
    }
  }
}
</script>