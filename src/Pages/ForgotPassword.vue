<template>
  <div class="container">
    <div class="inner-box">
      <form @submit.prevent="">
        <div>
          <h3>Forgot Password</h3>
          <input
            type="email"
            v-model="email"
            placeholder="Email Address"
            pattern="^(?!\\.)[A-Za-z0-9]+([._%+-]?[0-9])?@gmail.com"
          />
        </div>
        <button type="submit" class="btn-link" @click="handleSubmit()">
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
      error: "",
    };
  },
  methods: {
    clearForm() {
      this.email = null;
    },
    handleSubmit() {
      let userData = {
        email: this.email,
      };
      service
        .userForgotPassword(userData)
        .then((response) => {
          if (response.data.status == 401) {
            this.clearForm();
            alert("Email is not registered");
            return response;
          }
          if (response.data.status == 200) {
            localStorage.getItem("data", response.data.email);
            this.clearForm();
            alert("reset link sent successfully");
            return response;
          }
        })
        .catch((error) => {
          return error;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/ForgotPassword.scss";
</style>
