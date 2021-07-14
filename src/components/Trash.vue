<template>
  <div class="main-container">
    <h1><i>Notes in Trash are deleted after 7 days. </i></h1>
    <div class="btn-empty-trash">
      <button>Empty Trash</button>
    </div>
    <div class="container" id="blur">
      <div v-for="note in list" v-bind:key="note.id" class="notes-container">
        <div class="notes" id="notes">
          <h4>{{ note.title }}</h4>
          <p>{{ note.description }}</p>
        </div>
        <div class="note-icons">
          <i class="fas fa-trash-alt" @click="moveToTrash(note.id)"></i>
        </div>
        <div class="note-icons">
          <i class="fas fa-trash-restore-alt" @click="restoreNote(note.id)"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import service from "../Services/User";
export default {
  data() {
    return {
      list: {},
    };
  },
  mounted() {
    service.userDisplayNotesInTrash().then((response) => {
      console.log(response);
      this.list = response.data;
    });
  },
  methods: {
    moveToTrash(clickedId) {
      let userDate = {
        id: clickedId,
      };
      console.log(userDate);
      service
        .userDeleteNoteForever(userDate)
        .then((response) => {
          console.log(response);
          alert("Note deleted forever");
        })
        .catch((error) => {
          alert("Error");
          return error;
        });
    },
    restoreNote(clickedId) {
      let userDate = {
        id: clickedId,
      };
      console.log(userDate);
      service
        .userRestoreNote(userDate)
        .then((response) => {
          console.log(response);
          alert("Note restored");
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
@import '../Styles/Trash.scss'
</style>
