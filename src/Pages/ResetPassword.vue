<template>
  <form @submit.prevent="">
    <div class="container">
      <h3>Reset Password</h3>
      <div class="reset-form">
        <input
          type="password"
          v-model="new_password"
          placeholder="new password"
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$"
        />
      </div>
      <div class="reset-form">
        <input
          type="password"
          v-model="confirm_password"
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
      new_password: "",
      confirm_password: "",
    };
  },
  methods: {
    handleSubmit() {
      let userData = {
        new_password: this.new_password,
        confirm_password: this.confirm_password,
        token: this.$route.params.token
      };
      service.userResetPassword(userData).then((response) => {
        console.log(response.data.token);
        if(response.data.status == 401){
          alert("Reset token has been expired");
        }
        if(response.data.status == 201){
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
