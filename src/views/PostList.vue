<template>
  <div
    class="min-h-screen flex items-center justify-center bg-indigo-50 big-gray-50 py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="w-full space-y-8">
      <div>
        <div class="text-center text-3xl font-bold text-gray-900">
          List of Posts
        </div>
      </div>
      <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <li
          class="p-3 rounded-md mb-4 bg-indigo-100"
          v-for="post in posts"
          :key="post.id"
        >
          <div class="font-bold">
            {{ post.title }}
          </div>
          <div class="mb-2">{{ post.body }}</div>
          <router-link
            class="text-indigo-500"
            :to="{ name: 'PostDetail', params: { id: post.id } }"
          >
            View Comments
          </router-link>
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
    currentPosts() {
      return this.$store.state.posts.slice(
        0 + 10 * (this.page - 1),
        10 + 10 * (this.page - 1)
      );
    },
  },
  mounted() {
    this.getPosts();
  },
};
</script>
