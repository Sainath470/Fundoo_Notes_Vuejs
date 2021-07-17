<template>
  <div class="trash-icons">
    <div class="first-icon">
      <i class="fas fa-trash" @click="moveToTrash()"></i>
    </div>
    <div class="second-icon">
      <i class="fas fa-trash-restore-alt" @click="restoreNote()"></i>
    </div>
  </div>
</template>

<script>
import service from "../Services/User";

export default {
  props: ["cardId"],
  data() {
    return {
      state: false,
      clickedCard: "",
    };
  },
  methods: {
    moveToTrash() {
      let userDate = {
        id: this.cardId,
      };
      console.log(userDate);
      service
        .userDeleteNoteForever(userDate)
        .then((response) => {
          console.log(response);
          alert("Note deleted forever");
          location.reload();
        })
        .catch((error) => {
          alert("Error");
          return error;
        });
    },
    restoreNote() {
      let userDate = {
        id: this.cardId,
      };
      console.log(userDate);
      service
        .userRestoreNote(userDate)
        .then((response) => {
          console.log(response);
          alert("Note restored");
          location.reload();
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
@import "../styles/IconsForTrash.scss"
</style>
