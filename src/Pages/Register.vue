<template>
  <div class="main">
    <form class="" action="Register.vue">
      <div class="head">
        <h3>Create your Google Account</h3>
      </div>
      <div class="name">
        <input type="name" name="" value="" required />
        <label>First name</label>
      </div>
      <div class="name">
        <input type="name" required />
        <label>Last name</label>
      </div>
      <div class="user-name">
        <input type="username" required />
        <label>Username</label>
        <span class="gmail">@gmail.com</span>
      </div>
      <a class="line1">You can use letters, numbers & periods</a>
      <a  class="line2">Use my current email address instead</a>
      <div class="pass">
        <input type="password" class="password" id="pass" required />
        <label>Password</label>
      </div>
      <div class="pass">
        <input type="password" class="password" id="pass" required />
        <label>Confirm</label>
      </div>
      <div class="iconeye">
        <img src="../assets/eyelogo.png" id="eye" />
      </div>
      <a class="line3"
        >Use 8 or more characters with a mix of letters, numbers & symbols</a
      >
      <a href="http://localhost:8080/login" class="line4">Sign in instead</a>
      <input type="submit" value="Next" />
    </form>
    <div class="side-image">
      <img src="../assets/googlesidelogo.png" alt="" id="side-logo" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import "../styles/Register.scss";
</style>
