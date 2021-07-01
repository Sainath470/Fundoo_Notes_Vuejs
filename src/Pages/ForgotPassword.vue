<template>
  <div class="container">
    <div class="inner-box">
      <form>
      <div>
        <h3>Forgot Password</h3>
        <input
          type="email"
          v-model="email"
          placeholder="Email Address"
          pattern="^(?!\\.)[A-Za-z0-9]+([._%+-]?[0-9])?@gmail.com"
        />
      </div>
        <button type="submit" class="btn-link" @click="handleSubmit();">
          Send Reset Link
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import service from "../Services/User";

export default {
  name: "ForgotPassword",
  data() {
    return {
      email: "",
    };
  },
  methods: {
    handlesubmit() {
      let userData = {
        email: this.email,
      };
      service
        .userForgotPassword(userData)
        .then((response) => {
          localStorage.getItem("data", response.data.email);
          console.log("forgot password", response);
          alert("reset link sent successfully");
          this.$router.push("/resetPassword");
          return response;
        })
        .catch((error) => {
          alert("Email is not registered");
          return error;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/ForgotPassword.scss";
</style>
