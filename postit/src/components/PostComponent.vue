<template>
  <article>
    <div class="post-info">
      <div class="author-info">
        <span class="avatar"></span>
        <span>{{ post.author }}</span>
      </div>
      <time>{{ post.date }}</time>
    </div>
    <img v-if="post.image" :src="'/' + post.image" alt="Post image" />
    <p>{{ post.text }}</p>
    <button class="like" type="button" @click="likePost">
      Like {{ post.likes }}
    </button>
  </article>
</template>

<script>
export default {
  name: "PostComponent",
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  methods: {
    likePost() {
      this.$store.commit("INCREMENT_LIKES", this.post.id)
    }
  }
}
</script>