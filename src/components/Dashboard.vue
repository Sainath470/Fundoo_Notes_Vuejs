<template>
  <div>
    <div class="main-container" id="blur">
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
          <div class="label-display">
            <GetLabel />
          </div>
          <div class="logo-name-three">
            <span @click="change()">Edit Labels</span>
          </div>
          <div class="logo-name-four">
            <span @click="changeArchive()">Archive</span>
          </div>
          <div class="logo-name-five">
            <span @click="changeTrash()">Trash</span>
          </div>
        </div>
      </aside>
      <CreateNotes v-if="state == true" />
      <DisplayNotes v-show="state == true" />
      <Trash v-if="flag == false" />
      <Archive v-if="temp == false" />
      <GetLabel />
    </div>
    <div class="create-label" id="pop">
      <CreateLabel v-if="bool == false" />
    </div>
  </div>
</template>

<script>
import CreateNotes from "./CreateNotes.vue";
import DisplayNotes from "./DisplayNotes.vue";
import Trash from "./Trash.vue";
import Archive from "./Archive.vue";
import GetLabel from "./GetLabel.vue";
import CreateLabel from "./CreateLabel.vue";

export default {
  name: "Dashboard",
  components: {
    CreateNotes,
    DisplayNotes,
    Trash,
    Archive,
    GetLabel,
    CreateLabel,
  },
  data() {
    return {
      visibility: false,
      flag: true,
      temp: true,
      state: true,
      bool: true,
    };
  },
  methods: {
    toggle() {
      var blur = document.getElementById("blur");
      blur.classList.toggle("active");
      var popup = document.getElementById("popup");
      popup.classList.toggle("active");
    },
    change() {
      this.bool = !this.bool;
    },
    changeVisibility() {
      this.visibility = !this.visibility;
    },
    changeTrash() {
      this.state = !this.state;
      this.flag = !this.flag;
    },
    changeArchive() {
      this.state = !this.state;
      this.temp = !this.temp;
    },
    changeState() {
      this.state = !this.state;
    },
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
@import "@/styles/Dashboard.scss";
</style>
