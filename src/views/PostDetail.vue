<template>
  <div class="min-h-screen bg-indigo-50 big-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="w-full space-y-8">
      <div>
        <div
          class="text-center text-3xl font-semibold text-gray-900 relative mb-10"
        >
          <router-link
            class="absolute group flex justify-center py-1 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
            :to="{ name: 'PostList' }"
          >
            Go Back
          </router-link>
          Post Detail {{ $route.params.id }}
        </div>
        <div class="mb-10">
          <div class="font-semibold">
            {{ post.title }}
          </div>
          <div class="mb-2">{{ post.body }}</div>
        </div>
        <ul>
          <div class="text-2xl font-semibold">
            {{ comments.length }} Comments
          </div>
          <li class="p-3 mb-4" v-for="comment in comments" :key="comment.id">
            <div class="flex">
              <div
                style="height: 50px; width: 50px; background-color: grey;"
                class="rounded mr-2"
              ></div>
              <div class="details">
                <div class="font-semibold">
                  {{ comment.name }}
                </div>
                <a :href="'mailto:' + comment.email" class="text-indigo-500">{{
                  comment.email
                }}</a>
              </div>
            </div>
            <div class="mb-2 md:w-4/5">{{ comment.body }}</div>
          </li>
        </ul>
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
