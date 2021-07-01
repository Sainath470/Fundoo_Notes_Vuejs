<template>
  <form @submit.prevent="">
    <div class="container">
      <h3>Reset Password</h3>
      <div class="reset-form">
        <input
          type="password"
          v-model="password"
          placeholder="new password"
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$"
        />
      </div>
      <div class="reset-form">
        <input
          type="password"
          v-model="password_confirmation"
          placeholder="confirm password"
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$"
        />
      </div>
      <button type="submit" @click="handleSubmit();" class="update-button">update</button>
    </div>
  </form>
</template>

<script>
import service from "../Services/User";

export default {
  name: "ResetPassword",
  components: {
  },
  data() {
    return {
      password: "",
      password_confirmation: "",
    };
  },
  methods: {
    handleSubmit() {
      let userData = {
        password: this.password,
        password_confirmation: this.password_confirmation,
      };
      service.userRegister(userData).then((response) => {
        if(response.data.status == 201){
          alert("Reset token has been expired");
        }
        if(response.data.status == 200){
        alert("Password reset successfull..!");
        this.$router.push('/login');
        return response;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/ResetPassword.scss";
</style>
