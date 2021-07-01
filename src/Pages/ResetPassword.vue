<template>
  <form @submit.prevent="handlesubmit">
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
      <button type="submit" class="update-button">update</button>
    </div>
  </form>
</template>

<style lang="scss" scoped>
@import "@/styles/ResetPassword.scss";
</style>
