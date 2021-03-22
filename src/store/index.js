import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    posts: [],
  },
  mutations: {
    setPosts(state, payload) {
      state.posts = [...payload];
    },
  },
  actions: {
    async fetchPosts({ commit }) {
      const url = `https://jsonplaceholder.typicode.com/posts`;
      let list = [];
      try {
        const response = await fetch(url);
        const json = await response.json();
        list = [...json];
      } catch (err) {
        // TODO: Handle Error
        console.log("fetch failed", err);
      }
      commit("setPosts", list);
    },
  },
});
