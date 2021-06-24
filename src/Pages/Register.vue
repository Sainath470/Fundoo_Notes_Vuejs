<template>
  <div class="main">
    <form>
      <div class="head">
        <h2>
          <title><h2>Fundoo</h2></title>
        </h2>
        <h3>Create your Fundoo Account</h3>
      </div>
      <div class="name">
        <input type="name" required pattern="[A-Za-z]{3,10}" />
        <label>First name</label>
      </div>
      <div class="name">
        <input type="name" required pattern="[A-Za-z]{3,10}" />
        <label>Last name</label>
      </div>
      <div class="email">
        <input
          type="email"
          value="@gmail.com"
          pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          required/>
        <label>email</label>
      </div>
        <a class="">You can use letters, numbers & periods</a>
      <div class="password">
        <input
          type="password"
          required
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"/>
        <label>Password</label>
      </div>
      <div class="password">
        <input
          type="password"
          required
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"/>
        <label>Confirm</label>
      </div>
      <a class="">Use 8 or more characters with a mix of letters,numbers & symbols></a>
      <a href="http://localhost:8080/login">Sign in instead</a>
      <input type="submit" value="Next">
    </form>
    <div class="side-logo">
         <img src="../assets/googlesidelogo.jpg" alt="side-image">
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


