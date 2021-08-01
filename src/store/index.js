import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

var axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/"
})

Vue.use(Vuex);

const state = {
  userprofile: [],
  posts: []
};

const getters = {
  getuserDetails: (state, getters) => { getters.userprofile }
};

const actions = {
  async AuthenticateUser({ commit }, userprofile) {
    console.log("User instance ===== ", userprofile);
    try {
      let response = await axiosInstance.get("users", userprofile)
      console.log("Response ", response.data);
      var userdata = []
      for (var i of response.data) {
        if (userprofile.EMAIL_ID == i.email) {
          userdata = i
          sessionStorage.setItem("EMAIL_ID", i.email)
          sessionStorage.setItem("userId", i.id)
        }
      }
      if (userdata.length != 0) {
        commit('user', userdata)

        return userdata
      } else {
        return "User dosenot exist"
      }

    } catch (exception) {
      console.log("Error ==== ", exception)
      return exception
    }
  },
  async ViewAllPost() {
    try {
      let response = await axiosInstance.get("posts")
      console.log("Response ", response.data);
      return response.data
    } catch (exception) {
      console.log("Error ==== ", exception)
      return exception
    }
  },
  async CreatePosts({ commit }, posts) {
    console.log("post ",posts);
    try {
      let response = await axiosInstance.post("posts", posts)
      console.log("Response",response.data);
      commit("createposts", response.data)
    } catch (exception) {
      return exception
    }
  }
};

const mutations = {
  user(state, userDetails) {
    state.userprofile.push(userDetails)
  },
  createposts(state, postDetails) {
    state.posts.push(postDetails)
  },
};
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
