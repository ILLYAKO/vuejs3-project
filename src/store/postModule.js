import axios from "axios";
export const postModule = {
  state: () => ({
    posts: [], //
    // dialogVisible: false,
    // modificatorValue: "",
    isPostsLoading: false, //
    page: 1, //
    limit: 10, //
    totalPages: 0, //
    selectedSort: "", //
    searchQuery: "", //
    sortOptions: [
      { value: "title", name: "Name" },
      { value: "body", name: "Description" },
    ], //
    // like: 1,
  }),
  getters: {
    sortedPosts(state) {
      return [...state.posts].sort((post1, post2) => {
        return post1[state.selectedSort]?.localeCompare(
          post2[state.selectedSort]
        );
      });
    },
    sortedAndSearchedPosts(state, getters) {
      return getters.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    },
  }, // computed properties
  mutations: {
    // posts: [],
    setPosts(state, posts) {
      state.posts = posts;
    },
    // isPostsLoading: false,
    setLoading(state, isPostsLoading) {
      state.isPostsLoading = isPostsLoading;
    },
    // page: 1,
    setPage(state, page) {
      state.page = page;
    },
    // limit: 10,
    // totalPages: 0,
    setTotalPages(state, totalPages) {
      state.totalPages = totalPages;
    },
    // selectedSort: "",
    setSelectedSort(state, selectedSort) {
      state.selectedSort = selectedSort;
    },
    // searchedQuery: "",
    setSearchQuery(state, searchQuery) {
      state.searchQuery = searchQuery;
    },
    // sortOptions: [
    //   { value: "title", name: "Name" },
    //   { value: "body", name: "Description" },
    // ],
  },
  actions: {
    async fetchPosts({ state, commit }) {
      try {
        // this.isPostsLoading = true;
        commit("setLoading", true);
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: { _page: state.page, _limit: state.limit },
          }
        );
        commit(
          "setTotalPages",
          Math.ceil(response.headers["x-total-count"] / state.limit)
        );
        commit("setPosts", response.data);
      } catch (error) {
        console.log(error);
      } finally {
        commit("setLoading", false);
      }
    },
    async loadMorePosts({ state, commit }) {
      try {
        this.page += 1;
        commit("setPage", state.page + 1);
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: { _page: state.page, _limit: state.limit },
          }
        );
        commit(
          "setTotalPages",
          Math.ceil(response.headers["x-total-count"] / state.limit)
        );
        this.posts = [...state.posts, ...response.data];
        commit("setPosts", [...state.posts, ...response.data]);
        commit("setLoading", false);
      } catch (error) {
        console.log(error);
      }
    },
  },
  namespaced: true,
};
