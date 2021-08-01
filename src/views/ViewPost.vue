<template>
  <div id="viewpost" class="bg-light">
    <Header />
    <div class="container mt-5 bg-color-view">
      <div class="row box_shadow">
        <div class="col-md-12">
          <h1 class="text-center h1-font pt-5">
            <strong>View Posts</strong>
          </h1>
          <div class="row">
            <div
              v-for="(posts, index) in all_posts"
              :key="index"
              class="col-md-4 mt-3"
            >
              <div class="card rounded-0">
                <div class="card-body">
                  <h5 class="card-title text-info text-left">
                    {{ posts.title }}
                  </h5>
                  <div class="body-card">
                    <p class="card-text text-left">
                      {{ posts.body }}
                    </p>
                  </div>
                </div>
              </div>
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
  name: "ViewPost",
  components: {
    Header,
  },
  data() {
    return {
      all_posts: [],
    };
  },
  methods: {
    ...mapActions(["ViewAllPost"]),
  },
  mounted() {
    if(this.all_posts.length == 0){
    this.ViewAllPost().then((res) => {
      this.all_posts = res;
      console.log("Res", this.all_posts);
    });
    }
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
.bg-color-view{
  background-color: #fff1f4;
}
</style>
