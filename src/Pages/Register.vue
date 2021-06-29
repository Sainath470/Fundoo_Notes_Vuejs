<template>
  <div class="container">
    <div class="title">
      <h2><Title /></h2>
      <h3>Create your Fundoo Account</h3>
    </div>
    <form @submit.prevent="">
      <div class="user-details">
        <div class="input-box">
          <input type="firstName"  v-model="firstName" required pattern="[A-Za-z]{3,10}" />
          <label>First Name</label>
        </div>
        <div class="input-box">
          <input type="lastName" v-model="lastName" required pattern="[A-Za-z]{3,10}" />
          <label>Last name</label>
        </div>
        <div class="input-box-email">
          <input
            type="username"
            v-model="email"
            required
            pattern="^(?!\\.)[A-Za-z0-9]+([._%+-]?[0-9])?@gmail.com"
          />
          <label>Username</label>
        </div>
        
        <a class="a-tag-1">You can use letters, numbers & periods</a>
        <a class="a-tag-2">Use my current email address instead</a>
        <div class="input-box-password">
          <input :type="password_type" class="password" v-model="password" required/>
          <label>Password</label>
        </div>
        <div class="input-box-password">
          <input :type="password_type" class="password" v-model="password_confirmation" required />
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
        <input class="Next-btn" type="submit" @click="handleSubmit();"  value="Next" />
      </div>
    </form>
    <div class="google-side-image">
      <img src="../assets/googlesidelogo.png" alt="" class="side-logo" />
    </div>
  </div>
</template>

<script>
import Title from "./Title.vue";
import axios from "axios";
import Vue from 'vue'
import service from '../Services/User'

Vue.use(axios)
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
    },
     async handleSubmit() {

        let userData = {
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                password: this.password,
                password_confirmation: this.password_confirmation
            }
            service.userRegister(userData).then(response =>{
              alert("User successfully registered");
              return response;
            })
    },
  },
};
</script>

<style lang="scss">
@import "../styles/Register.scss";
</style>
