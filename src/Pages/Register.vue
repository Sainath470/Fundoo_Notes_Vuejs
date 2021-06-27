<template>
  <div class="container">
    <div class="title">
      <h2><Title /></h2>
      <h3>Create your Fundoo Account</h3>
    </div>
    <form>
      <div class="user-details">
        <div class="input-box">
          <input type="name" required />
          <label>First Name</label>
        </div>
        <div class="input-box">
          <input type="name" required />
          <label>Last name</label>
        </div>
        <div class="input-box-email">
          <input type="username" required />
          <label>Username</label>
        </div>
        <label class="a-email">@gmail.com</label>
        <a class="a-tag-1">You can use letters, numbers & periods</a>
        <a href="" class="a-tag-2">Use my current email address instead</a>
        <div class="input-box-password">
          <input type="password" class="password" id="pass1" required />
          <label>Password</label>
        </div>
        <div class="input-box-password">
          <input type="password" class="password" id="pass2" required />
          <label>Confirm</label>
        </div>
        <div class="iconeye">
          <img
            src="../assets/eyehide.png"
            id="eye"
            @click="passwordToggleButton()"
          />
        </div>
        <a class="a-tag-3"
          >Use 8 or more characters with a mix of letters, numbers & symbols</a
        >
        <a href="" class="a-tag-4">Sign in instead</a>
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
};
</script>

<style lang="scss">
@import "../styles/Register.scss";
</style>
