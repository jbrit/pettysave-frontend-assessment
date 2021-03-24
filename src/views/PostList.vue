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
      <div class="flex justify-between">
        <button
          class="flex justify-center py-1 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
          @click="decreasePage"
        >
          Previous
        </button>
        <div>Page {{ page }} of {{ totalPages }}</div>
        <button
          class="flex justify-center py-1 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
          @click="increasePage"
        >
          Next
        </button>
      </div>
      <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <li
          class="p-3 rounded-md mb-4 bg-indigo-100"
          v-for="post in currentPosts"
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
    increasePage() {
      if (this.hasNext) this.page += 1;
    },
    decreasePage() {
      if (this.hasPrev) this.page -= 1;
    },
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
    totalPages() {
      return parseInt(this.$store.state.posts.length / 10);
    },
    hasPrev() {
      return this.page > 1;
    },
    hasNext() {
      return this.page < this.totalPages;
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
