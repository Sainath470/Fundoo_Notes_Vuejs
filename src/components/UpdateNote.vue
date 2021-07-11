<template>
  <div class="update-container">
    <form class="update-note">
      <input name="title" v-model="title" placeholder="Title" />
      <textarea
        name="description"
        v-model="description"
        placeholder="Take a note.."
      ></textarea>
      <div class="bottom-icons">
        <Icons />
      </div>
      <button type="submit" @click="handleSubmit()">Close</button>
    </form>
  </div>
</template>

<script>
import Icons from "./Icons.vue";
import service from "../Services/User";

export default {
  components: {
    Icons,
  },
  props: ["selectedNote", "noteContent"],
  data() {
    return {
      title: "",
      description: "",
    };
  },
  created() {
    this.title = this.noteContent.title;
    this.description = this.noteContent.description;
  },
  methods: {
    handleSubmit() {
      let userDate = {
        id: this.selectedNote,
        title: this.title,
        description: this.description,
      };
      service
        .userUpdateNote(userDate)
        .then((response) => {
          alert("Note update successfully");
          return response;
        })
        .catch((error) => {
          alert("Error");
          return error;
        });
    },
  },
};
</script>

<style lang="sass" scoped>
@import '../Styles/UpdateNote.scss'
</style>