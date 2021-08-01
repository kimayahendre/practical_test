<template>
  <div id="header">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li v-show="user != null" class="nav-item">
            <router-link to="/viewpost" class="nav-item nav-link"
              >View Post</router-link
            >
          </li>
          <li v-show="user != null" class="nav-item">
            <router-link to="/createpost" class="nav-item nav-link"
              >Create Post</router-link
            >
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li v-show="user == null" class="nav-item active">
            <router-link to="/" class="nav-item nav-link">
              <button class="btn btn-success rounded-0">LOGIN</button>
            </router-link>
          </li>
          <li v-show="user != null" class="nav-item">
            <a href="#" class="nav-item nav-link">
              <button
                class="btn btn-success rounded-0"
                type="button"
                @click="logout()"
              >
                LOGOUT
              </button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Header",
  computed: {
    ...mapGetters(["getuserDetails"]),
  },
  data() {
    return {
      user: null,
    };
  },
  methods: {
    logout() {
      sessionStorage.clear();
      this.$router.push("/");
    },
  },
  mounted() {
    // this.$store.$getters("getuserDetails");
    if (sessionStorage.getItem("EMAIL_ID") != null) {
      this.user = sessionStorage.getItem("EMAIL_ID");
    }
  },
};
</script>
<style scoped>
</style>