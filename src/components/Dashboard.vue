<template>
  <div>
    <header class="flex-container">
      <nav class="items">
        <button class="navbar-button">
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
    <aside class="sidebar" id="sidebar">
      <li>
        <i class="material-icons"><LightBulbIcon /></i>
        <a href="#"><span id="A">Notes</span></a>
      </li>
      <li>
        <i class="material-icons"><bellIcon /></i>
        <a href="#"><span id="B">Reminders</span></a>
      </li>
      <li>
        <i class="material-icons"><EditLabelIcon /></i>
        <a href="#"><span id="C">Edit labels</span></a>
      </li>
      <li>
        <i class="material-icons"><ArchiveIcon /></i>
        <a href="#"><span id="D">Archive</span></a>
      </li>
      <li>
        <i class="material-icons"><TrashIcon /></i>
        <a href="#"><span id="E">Trash</span></a>
      </li>
    </aside>
    <CreateNotes />
  </div>
</template>

<script>
import MenuIcon from "vue-material-design-icons/Menu.vue";
import SelectSearchIcon from "vue-material-design-icons/SearchWeb.vue";
import ProfileIcon from "vue-material-design-icons/AccountCircle.vue";
import LightBulbIcon from "vue-material-design-icons/Lightbulb.vue";
import bellIcon from "vue-material-design-icons/BellAlertOutline.vue";
import EditLabelIcon from "vue-material-design-icons/Pen";
import ArchiveIcon from "vue-material-design-icons/ArchiveArrowDown.vue";
import TrashIcon from "vue-material-design-icons/TrashCan.vue";
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
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "../styles/Dashboard.scss";
</style>

