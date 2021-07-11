<template>
  <div class="container">
    <div v-for="note in list" v-bind:key="note.id" class="notes-container">
      <div class="notes" @click="changeState">
        <h4>{{ note.title }}</h4>
        <p>{{ note.description }}</p>
        <div class="note-icons"><Icons /></div>
      </div>
    </div>
    <div class="update-component">
      <UpdateNotes
        v-if="state == false"
        :noteId="selectedNote"
        :noteContent="noteContent"
      />
    </div>
  </div>
</template>

<script>
import service from "../Services/User";
import UpdateNotes from "./UpdateNote.vue";
import Icons from "./Icons.vue";

export default {
  name: "DisplayNotes",
  components: {
    Icons,
    UpdateNotes,
  },
  data() {
    return {
      state: true,
      list: {},
      selectedNote: "",
      noteContent: {},
    };
  },
  methods: {
    changeState() {
      this.state = !this.state;
    },
  },
  mounted() {
    if (localStorage.getItem("reloaded")) {
      localStorage.removeItem("reloaded");
    } else {
      localStorage.setItem("reloaded", "1");
      location.reload();
    }
    service.userDisplayNotes().then((response) => {
      this.list = response.data;
    });
  },
};
</script>

<style lang="sass" scoped>
@import "../styles/DisplayNotes.scss"
</style>