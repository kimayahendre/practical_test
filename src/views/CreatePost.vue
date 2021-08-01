<template>
  <div id="createpost" class="bg-light">
    <Header />
    <div class="container bg-white">
      <div class="row box_shadow">
        <div class="col-md-12">
          <h1 class="text-center h1-font pt-5">
            <strong
              ><i class="fa fa-plus mr-2" aria-hidden="true"></i> Create
              Post</strong
            >
          </h1>
          <div class="row mt-5 mb-5">
            <div class="col-md-10 offset-1">
              <form @submit="onSubmit($event)" class="text-left">
                <div v-if="all_empty" class="row mt-2">
                  <div class="col-md">
                    <p class="text-danger">
                      All * marked fields are mandatory.
                    </p>
                  </div>
                </div>
                <!-- Title lable -->
                <div class="row">
                  <div class="col-md">
                    <label for="title">
                      <strong
                        >Title of Post
                        <span class="text-danger">*</span></strong
                      ></label
                    >
                  </div>
                </div>
                <!--  Title input -->
                <div class="row mt-2">
                  <div class="col-md">
                    <input
                      type="text"
                      name="title"
                      id="title"
                      v-model="title"
                      placeholder="Enter Title"
                    />
                    <p v-if="title_empty" class="text-danger pt-2">
                      Title is Required
                    </p>
                  </div>
                </div>
                <!-- Body Label -->
                <div class="row mt-3">
                  <div class="col-md">
                    <label for="body">
                      <strong
                        >Description of Post
                        <span class="text-danger">*</span></strong
                      ></label
                    >
                  </div>
                </div>
                <!--  Body input -->
                <div class="row mt-2">
                  <div class="col-md">
                    <textarea
                      name="body"
                      id="body"
                      v-model="body"
                      rows="10"
                      placeholder="Enter Description"
                    ></textarea>
                    <p v-if="body_empty" class="text-danger pt-2">
                      Description is Required
                    </p>
                  </div>
                </div>
                <!-- Submit Post -->
                <div class="row mt-3">
                  <div class="col-md text-center">
                    <button type="submit" class="btn btn-primary">
                      SUBMIT
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import { mapActions } from "vuex";
export default {
  name: "CreatePost",
  components: {
    Header,
  },
  data() {
    return {
      body: null,
      title: null,
      userId: null,
      all_empty: true,
      title_empty: false,
      body_empty: false,
    };
  },
  methods: {
    ...mapActions(["CreatePosts"]),
    onSubmit(e) {
      e.preventDefault();
      if (
        (this.title == null && this.body == null) ||
        (this.title == "" && this.body == "")
      ) {
        this.all_empty = true;
      } else if (this.title == null || this.title == "") {
        this.all_empty = false;
        this.title_empty = true;
      } else if (this.body == null || this.body == "") {
        this.all_empty = this.title_empty = false;
        this.body_empty = true;
      } else {
        this.all_empty = this.title_empty = this.body_empty = false;
        const posts = {
          userId: this.userId,
          title: this.title,
          body: this.body,
        };
        this.$store.dispatch("CreatePosts", posts);
        alert("Your post has been posted successfully");
      }
    },
  },
  mounted() {
    this.userId = sessionStorage.getItem("userId");
  },
};
</script>
<style scoped>
.h1-font {
  font-size: 24px;
}
.box_shadow {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
input {
  border: none;
  border-bottom: 2px solid pink;
  width: 95%;
}
input:focus {
  outline: none;
}
textarea:focus {
  outline: none;
}
textarea {
  border: none;
  border: 2px solid pink;
  width: 95%;
  padding: 5px;
}
</style>