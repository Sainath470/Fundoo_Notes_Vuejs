<template>
  <header class="flex-container">
    <nav class="items">
      <button class="navbar-button">
        <menu-icon />
      </button>
    </nav>
    <div class="items flex-container">
      <img
        alt=""
        src="../assets/googlekeeplogo.png"
        style="width: 40px; height: 40px"
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
          <i class="material-icons"><RefreshIcon /></i>
        </button>
      </div>
      <div>
        <button class="icons-header view_list">
          <i class="material-icons"><ViewListIcon /></i>
        </button>
      </div>
      <div>
        <button class="icons-header">
          <i class="material-icons"><settingsIcon /></i>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import MenuIcon from "vue-material-design-icons/Menu.vue";
import SelectSearchIcon from "vue-material-design-icons/SearchWeb.vue";
import RefreshIcon from "vue-material-design-icons/Refresh.vue";
import ViewListIcon from "vue-material-design-icons/ViewList.vue";
import settingsIcon from "vue-material-design-icons/Nut.vue";

export default {
  name: "DashBoard",
  components: {
    MenuIcon,
    SelectSearchIcon,
    RefreshIcon,
    ViewListIcon,
    settingsIcon,
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/Dashboard.scss";
</style>

