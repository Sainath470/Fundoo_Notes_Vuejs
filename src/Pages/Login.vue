<template>
  <div class="container">
    <h1>Login</h1>
    <form @submit.prevent = "">
      <div class="text-field">
        <input
          type="text"
          v-model="email"
          placeholder="Username"
          required
          pattern="^(?!\\.)[A-Za-z0-9]+([._%+-]?[0-9])?@gmail.com"
        />
      </div>
      <div class="text-field">
        <input
          type="password"
          v-model="password"
          placeholder="Password"
          required
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$"
        />
      </div>
      <button class="btn-sign-in" @click="handleSubmit()" type="submit">Sign in</button>
      <div class="signup-link">
        <a href="/register">Create account</a>
      </div>
      <div class="forgot-password">
        <a href="http://localhost:8080/forgotPassword">Forgot Password</a>
      </div>
    </form>
  </div>
</template>

<script>
import service from "../Services/User";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
    handleSubmit() {
      let userData = {
        email: this.email,
        password: this.password,
      };
      service
        .userLogin(userData)
        .then((response) => {
          alert("Log in successfull");
          localStorage.setItem('token', response.data.token);
          return response;
        }).catch((error) => {
          alert("Please enter the valid credentials");
          return error;
        });
    },
  },
};
</script>

<style lang="sass" scoped>
@import '../styles/Login.scss';
</style>
