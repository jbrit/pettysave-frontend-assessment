<template>
  <div
    class="min-h-screen flex items-center justify-center bg-indigo-100 big-gray-50 py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-md w-full space-y-8">
      <div>
        <div class="text-center text-3xl font-bold text-gray-900">
          Post Detail {{ $route.params.id }}
        </div>
        <div class="mb-4">
          <div class="font-bold">
            {{ post.title }}
          </div>
          <div class="mb-2">{{ post.body }}</div>
        </div>
        <ul>
          <div class="text-2xl font-bold">Comments</div>
          <li
            class="p-3 rounded-md mb-4 bg-white"
            v-for="comment in comments"
            :key="comment.id"
          >
            <div class="font-bold">
              {{ comment.name }}
              <br />
              {{ comment.email }}
            </div>
            <div class="mb-2">{{ comment.body }}</div>
          </li>
        </ul>
        <router-link class="text-indigo-500" :to="{ name: 'PostList' }">
          Go Back
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostDetail",
  methods: {
    getPost() {
      this.$store.dispatch("clearPost");
      this.$store.dispatch("clearComments");
      this.$store.dispatch("fetchPost", this.$route.params.id);
      this.$store.dispatch("fetchComments", this.$route.params.id);
    },
  },
  computed: {
    post() {
      return this.$store.state.post;
    },
    comments() {
      return this.$store.state.comments;
    },
  },
  mounted() {
    this.getPost();
  },
};
</script>
