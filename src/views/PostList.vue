<template>
  <div
    class="min-h-screen flex items-center justify-center bg-indigo-100 big-gray-50 py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-md w-full space-y-8">
      <div>
        <div class="text-center text-3xl font-bold text-gray-900">
          List of Posts
        </div>
      </div>
      <ul>
        <li
          class="p-3 rounded-md mb-4 bg-white"
          v-for="post in posts"
          :key="post.id"
        >
          <div class="font-bold">
            {{ post.title }}
          </div>
          <div class="mb-2">{{ post.body }}</div>
          <a class="text-indigo-500" href="#">View Comments</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostList",
  data() {
    return {
      page: 1,
    };
  },
  methods: {
    getPosts() {
      this.$store.dispatch("fetchPosts");
    },
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
  },
  mounted() {
    this.getPosts();
  },
};
</script>
