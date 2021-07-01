<template>
  <div>
    <form @submit.prevent="">
      <div class="container">
        <h2><Title /></h2>
        <h3>Create your Google Account</h3>
      </div>
      <div class="user-details">
        <div class="input-box">
          <input type="name" v-model="firstName" required />
          <label>First name</label>
        </div>
        <div class="input-box">
          <input type="name" v-model="lastName" required />
          <label>Last name</label>
        </div>
        <div class="user-name">
          <input
            type="username"
            v-model="email"
            required
            value="@gmail.com"
            pattern="^(?!\\.)[A-Za-z0-9]+([._%+-]?[0-9])?@gmail.com"
          />
          <label>Username</label>
        </div>
        <a class="a-tag-1">You can use letters, numbers & periods</a>
        <a class="a-tag-2">Use my current email address instead</a>
        <div class="pass">
          <input
            :type="password_type"
            class="password"
            v-model="password"
            required
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$"
          />
          <label>Password</label>
        </div>
        <div class="pass">
          <input
            :type="password_type"
            class="password"
            v-model="password_confirmation"
            required
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$"
          />
          <label>Confirm</label>
        </div>
        <div class="iconeye">
          <img
            src="../assets/eyehide.png"
            alt="eye-icon"
            class="eye"
            @click="togglePassword()"
          />
        </div>
        <a class="a-tag-3"
          >Use 8 or more characters with a mix of letters, numbers & symbols</a
        >
        <a href="http://localhost:8080/login" class="a-tag-4"
          >Sign in instead</a
        >
        <input type="submit" value="Next" @click="handleSubmit()" />
      </div>
    </form>
    <div class="side-image">
      <img src="../assets/sidelogo.png" alt="google-image" class="side-logo" />
    </div>
  </div>
</template>

<script>
import Title from "./Title.vue";
import service from "../Services/User";

export default {
  name: "Register",
  components: {
    Title,
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      password_confirmation: "",
      password_type: "password",
      error: "",
    };
  },
  methods: {
    togglePassword() {
      this.password_type =
        this.password_type === "password" ? "text" : "password";
    },
    clearForm() {
      this.firstName = null;
      this.lastName = null;
      this.email = null;
      this.password = null;
      this.password_confirmation = null;
    },
    handleSubmit() {
      let userData = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation,
      };
      service.userRegister(userData).then((response) => {
        if (response.data.status == 201) {
          alert("This email already exist");
          this.clearForm();
          return response;
        }
        if (response.data.status == 403) {
          alert("Password doesn't match");
          this.clearForm();
          return response;
        }
        if (response.data.status == 200) {
          alert("Successfully registered...!");
          this.$router.push("/login");
          return response;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/Register.scss";
</style>
