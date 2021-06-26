<template>
  <form>
    <h2 class="login">Login</h2>

    <input
      type="email"
      name="email"
      pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
      placeholder="Email"
    />
    <input
      type="password"
      name="Password"
      pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$"
      placeholder="Password"
    />
    <button class="btn-sign">Sign In</button>
    <a href="/register">Create account</a>

    <div class="forgotPassword">
      <a href="http://localhost:8080/forgot">Forgot password</a>
    </div>
  </form>
</template>
<script></script>

<style lang="scss">
@import "../styles/Login.scss";
</style>
