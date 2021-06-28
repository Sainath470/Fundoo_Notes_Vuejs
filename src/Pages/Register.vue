<template>
  <div class="container">
    <div class="title">
      <h2><Title /></h2>
      <h3>Create your Fundoo Account</h3>
    </div>
    <form>
      <div class="user-details">
        <div class="input-box">
          <input type="name" required pattern="[A-Za-z]{3,10}" />
          <label>First Name</label>
        </div>
        <div class="input-box">
          <input type="name" required pattern="[A-Za-z]{3,10}" />
          <label>Last name</label>
        </div>
        <div class="input-box-email">
          <input
            type="username"
            required
            pattern="^(?!\\.)[A-Za-z0-9]+([._%+-]?[0-9])?"
          />
          <label>Username</label>
        </div>
        <label class="a-email">@gmail.com</label>
        <a class="a-tag-1">You can use letters, numbers & periods</a>
        <a class="a-tag-2">Use my current email address instead</a>
        <div class="input-box-password">
          <input
            :type="password_type"
            class="password"
            required
          />
          <label>Password</label>
        </div>
        <div class="input-box-password">
          <input
            :type="password_type"
            class="password"
            required
          />
          <label>Confirm</label>
        </div>
        <div class="iconeye">
          <img
            src="../assets/eyeshow.png"
            @click="togglePassword()"
            class="show-eye"
            id="eye-1"
          />
          <img
            src="../assets/eyehide.png"
            @click="togglePassword()"
            class="hide-eye"
            id="eye-2"
          />
        </div>
        <a class="a-tag-3"
          >Use 8 or more characters with a mix of letters, numbers & symbols</a
        >
        <a class="a-tag-4">Sign in instead</a>
        <input class="Next-btn" type="submit" value="Next" />
      </div>
    </form>
    <div class="google-side-image">
      <img src="../assets/googlesidelogo.png" alt="" class="side-logo" />
    </div>
  </div>
</template>

<script>
import Title from "./Title.vue";
export default {
  name: "Register",
  components: {
    Title,
  },
  data() {
    return {
      password_type: "password",
    };
  },
  methods: {
    togglePassword() {
      var showEye = document.getElementById("eye-1");
      var hideEye = document.getElementById("eye-2");

      if (this.password_type === "password") {
        this.password_type = "text";
        showEye.style.display = "block";
        hideEye.style.display = "none";
      } else {
        this.password_type = "password";
        showEye.style.display = "none";
        hideEye.style.display = "block";
      }
    }
  },
};
</script>

<style lang="scss">
@import "../styles/Register.scss";
</style>
