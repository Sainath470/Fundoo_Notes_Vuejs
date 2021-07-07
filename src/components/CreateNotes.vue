<template>
  <div class="container">
    <div class="input-box">
      <input type="text" placeholder="Take a note.." />
      <span class="first-image"
        ><i><CheckboxIcon /></i
      ></span>
      <span class="second-image"
        ><i><paintBurshIcon /></i
      ></span>
      <span class="third-image"
        ><i><ImageIcon /></i
      ></span>
    </div>
    <div class="createNote">
      <form class="create-notes">
        <input name="title" placeholder="Title" />
        <textarea name="content" placeholder="Take a note . ."></textarea>
        <div class="icons">
          <button>Close</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import paintBurshIcon from "vue-material-design-icons/Brush.vue";
import ImageIcon from "vue-material-design-icons/Image.vue";
import CheckboxIcon from "vue-material-design-icons/CheckBoxOutline.vue";

export default {
  name: "createNote",
  components: {
    paintBurshIcon,
    ImageIcon,
    CheckboxIcon,
  },
};
</script>

<style lang="sass" scoped>
@import "@/styles/CreateNotes.scss"
</style>
