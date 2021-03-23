import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    comments: [],
    posts: [],
    post: {},
  },
  mutations: {
    setComments(state, payload) {
      state.comments = [...payload];
    },
    setPosts(state, payload) {
      state.posts = [...payload];
    },
    setPost(state, payload) {
      state.post = { ...payload };
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
    async fetchPost({ commit }, id) {
      const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
      let post = {};
      try {
        const response = await fetch(url);
        const json = await response.json();
        post = { ...json };
      } catch (err) {
        // TODO: Handle Error
        console.log("fetch failed", err);
      }
      commit("setPost", post);
    },
    async fetchComments({ commit }, id) {
      const url = `https://jsonplaceholder.typicode.com/posts/${id}/comments/`;
      let comments = [];
      try {
        const response = await fetch(url);
        const json = await response.json();
        comments = [...json];
      } catch (err) {
        // TODO: Handle Error
        console.log("fetch failed", err);
      }
      commit("setComments", comments);
    },
    clearPost({ commit }) {
      commit("setPost", {});
    },
    clearComments({ commit }) {
      commit("setComments", []);
    },
  },
});
