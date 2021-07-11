<template>
  <div>
    <header class="flex-container">
      <nav class="items">
        <button class="fas fa-bars" @click="hide" @dblclick="show"></button>
      </nav>
      <div class="items flex-container">
        <img
          class="img-keep"
          alt="google-logo"
          src="../assets/googlekeeplogo.png"
        />
        <h1 class="title">FundooNotes</h1>
      </div>

      <div class="options items flex-container">
        <div class="search">
          <button class="icons-header">
            <i class="fas fa-search"></i>
          </button>
          <input type="text" class="text-search" placeholder="Search" />
        </div>
        <div>
          <button class="icons-header">
            <i class="fas fa-user-circle"></i>
          </button>
        </div>
      </div>
    </header>
    <aside class="sidebar">
      <li>
        <a href=""><i class="fas fa-lightbulb"></i></a>
      </li>
      <li>
        <a href=""><i class="fas fa-bell"></i></a>
      </li>
      <li>
        <a href=""><i class="fas fa-pen-square"></i></a>
      </li>
      <li>
        <a href=""><i class="fas fa-archive"></i></a>
      </li>
      <li>
        <a href=""><i class="fas fa-trash-alt"></i></a>
      </li>
      <div class="logo-names" id="logo">
        <div class="logo-name-one">
          <span>Notes</span>
        </div>
        <div class="logo-name-two">
          <span>Reminders</span>
        </div>
        <div class="logo-name-three">
          <span>Edit Labels</span>
        </div>
        <div class="logo-name-four">
          <span>Archive</span>
        </div>
        <div class="logo-name-five">
          <span>Trash</span>
        </div>
      </div>
    </aside>
    <CreateNotes />
    <DisplayNotes />
  </div>
</template>

<script>
import CreateNotes from "./CreateNotes.vue";
import DisplayNotes from "./DisplayNotes.vue";

export default {
  name: "Dashboard",
  components: {
    CreateNotes,
    DisplayNotes,
  },
  methods: {
    hide() {
      document.getElementById("logo").style.display = "none";
    },
    show() {
      document.getElementById("logo").style.display = "block";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/Dashboard.scss";
</style>

