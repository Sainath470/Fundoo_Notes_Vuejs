<template>
  <div>
    <header class="flex-container">
      <nav class="items">
        <button class="navbar-button" @click="hide" @dblclick="show">
          <menu-icon />
        </button>
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
            <i class="material-icons"><SelectSearchIcon /></i>
          </button>
          <input type="text" class="text-search" placeholder="Search" />
        </div>
        <div>
          <button class="icons-header">
            <i class="material-icons"><ProfileIcon /></i>
          </button>
        </div>
      </div>
    </header>
    <aside class="sidebar">
      <li>
        <i class="material-icons"><LightBulbIcon /></i>
        <a href=""></a>
      </li>
      <li>
        <i class="material-icons"><bellIcon /></i>
        <a href="#"></a>
      </li>
      <li>
        <i class="material-icons"><EditLabelIcon /></i>
        <a href="#"></a>
      </li>
      <li>
        <i class="material-icons"><ArchiveIcon /></i>
        <a href="#"></a>
      </li>
      <li>
        <i class="material-icons"><TrashIcon /></i>
        <a href="#"></a>
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
  </div>
</template>

<script>
import MenuIcon from "vue-material-design-icons/Menu.vue";
import SelectSearchIcon from "vue-material-design-icons/SearchWeb.vue";
import ProfileIcon from "vue-material-design-icons/AccountCircleOutline.vue";
import LightBulbIcon from "vue-material-design-icons/LightbulbOutline.vue";
import bellIcon from "vue-material-design-icons/BellAlertOutline.vue";
import EditLabelIcon from "vue-material-design-icons/PencilOutline.vue";
import ArchiveIcon from "vue-material-design-icons/ArchiveArrowDownOutline.vue";
import TrashIcon from "vue-material-design-icons/TrashCanOutline.vue";
import CreateNotes from "./CreateNotes.vue";

export default {
  name: "Dashboard",
  components: {
    MenuIcon,
    SelectSearchIcon,
    ProfileIcon,
    LightBulbIcon,
    bellIcon,
    EditLabelIcon,
    ArchiveIcon,
    TrashIcon,
    CreateNotes,
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

