<template>
  <div id="home" class="bg-light">
    <Header />
    <div class="container">
      <div class="row m-5 bg-white box_shadow">
        <div class="col-md-6 mt-5">
          <h1 class="text-center h1-font pt-4">
            <i class="fa fa-sign-in mr-2" aria-hidden="true"></i>LOGIN
          </h1>
          <div class="row mt-5 login-form">
            <div class="col-md-12 text-left">
              <form @submit="onSubmit($event)" class="m-4">
                <!-- Label for email -->
                <div class="row">
                  <div class="col">
                    <label for="email"
                      ><i class="fa fa-envelope mr-2" aria-hidden="true"></i>
                      Email Id / Username</label
                    >
                  </div>
                </div>
                <!-- Input for email -->
                <div class="row mt-3">
                  <div class="col">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      v-model="EMAIL_ID"
                      placeholder="Enter Email Id / Username"
                    />
                    <p v-if="email_empty" class="text-danger pt-2">
                      Email Id or Username is required.
                    </p>
                  </div>
                </div>
                <!-- Submit Button -->
                <div class="row mt-3">
                  <div class="col-md text-center">
                    <button type="submit" class="btn login-btn">LOGIN</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <img src="@/assets/login/login.png" class="img_login" alt="login" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Home",
  computed: {
    ...mapGetters(["getuserDetails"]),
  },
  components: {
    Header,
  },
  data() {
    return {
      EMAIL_ID: null,
      email_empty: false,
    };
  },
  watch: {
    EMAIL_ID() {
      if (this.EMAIL_ID == null || this.EMAIL_ID == "") {
        this.email_empty = true;
      } else {
        this.email_empty = false;
      }
    },
  },
  methods: {
    ...mapActions(["AuthenticateUser"]),
    onSubmit(e) {
      e.preventDefault();
      if (this.EMAIL_ID == null || this.EMAIL_ID == "") {
        this.email_empty = true;
      } else {
        this.email_empty = false;
        const userprofile = {
          EMAIL_ID: this.EMAIL_ID,
        };
        this.$store.dispatch("AuthenticateUser", userprofile).then((res) => {
          // console.log("res ====>>> ", res);
          if(res != "User dosenot exist"){
            this.$router.push("/viewpost")
          }
          else{
            alert(res)
          }
        });
      }
    },
  },
  mounted(){
    if (sessionStorage.getItem("EMAIL_ID") != null) {
      this.$router.push("/viewpost")
    }
  }
};
</script>
<style scoped>
.h1-font {
  font-size: 24px;
}
.img_login {
  height: 500px;
  width: 500px;
}
.box_shadow {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
input {
  border: none;
  border-bottom: 2.5px solid pink;
  width: 100%;
}
input:focus {
  outline: none;
}
.login-btn {
  background-color: pink;
  text-transform: capitalize;
  font-weight: 600;
  font-size: 18px;
}
</style>
