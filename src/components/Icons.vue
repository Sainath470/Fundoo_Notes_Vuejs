<template>
  <div class="icons">
    <div class="first-icon">
      <i><bellIcon /></i>
    </div>
    <div class="second-icon">
      <i><CollaboratorIcon /></i>
    </div>
    <div class="third-icon">
      <i><ColorsIcon /></i>
    </div>
    <div class="fourth-icon">
      <i><ImageIcon /></i>
    </div>
    <div class="fifth-icon">
      <i><ArchiveIcon /></i>
    </div>
    <div class="sixth-icon">
      <i><DotsIcon /></i>
    </div>
  </div>
</template>

<script>
import bellIcon from "vue-material-design-icons/BellOutline.vue";
import CollaboratorIcon from "vue-material-design-icons/AccountPlus.vue";
import ColorsIcon from "vue-material-design-icons/InvertColors.vue";
import ImageIcon from "vue-material-design-icons/ImageOutline.vue";
import ArchiveIcon from "vue-material-design-icons/ArchiveArrowDownOutline.vue";
import DotsIcon from "vue-material-design-icons/DotsVertical.vue";

export default {
  components: {
    bellIcon,
    CollaboratorIcon,
    ColorsIcon,
    ImageIcon,
    ArchiveIcon,
    DotsIcon,
  },
};
</script>

<style lang="sass" scoped>
@import "../styles/Icons.scss"
</style>