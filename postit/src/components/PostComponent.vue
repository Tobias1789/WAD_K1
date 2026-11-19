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
    <button class="like" type="button">Like</button>
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
  }
}
</script>