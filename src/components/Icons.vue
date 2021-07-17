<template>
  <div class="icons">
    <div class="first-icon">
      <i class="fas fa-bell"></i>
    </div>
    <div class="second-icon">
      <i class="fas fa-user-plus"></i>
    </div>
    <div class="third-icon">
      <i class="fas fa-palette"></i>
    </div>
    <div class="fourth-icon">
      <i class="fas fa-image"></i>
    </div>
    <div class="fifth-icon">
      <i
        class="fas fa-archive"
        @click="moveToArchive()"
        v-on:click.right="restoreNoteToDisplay"
      ></i>
    </div>
    <div class="sixth-icon">
      <i @click="clickedFunction" class="fas fa-ellipsis-v"></i>
      <div ref="myDropdown" class="dropdown-content">
        <div v-if="state == true">
          <a @click="handleSubmit()">Delete note</a>
          <a @click="changeState()">Add Label</a>
          <a>Edit Label</a>
        </div>
      </div>
    </div>
    <div ref="myDropdown" v-if="state == false" class="createLabel-container">
      <div class="create-label">
        <h1>Label note</h1>
        <input v-model="label_name" placeholder="Enter label name" />
        <div class="create-label-icon">
          <i class="fas fa-plus"></i>
        </div>
        <div class="labels-display">
          <GetLabel v-if="flag == true" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import service from "../Services/User";
import GetLabel from "./GetLabel.vue";

export default {
  props: ["cardId"],
  components: {
    GetLabel,
  },
  data() {
    return {
      clickedCard: "",
      state: true,
      flag: true,
    };
  },
  methods: {
    changeState() {
      this.state = !this.state;
    },
    clickedFunction(event) {
      this.$refs.myDropdown.classList.toggle("show");
      return event;
    },
    handleSubmit() {
      let userData = {
        id: this.cardId,
      };
      service
        .userDeleteNote(userData)
        .then((response) => {
          if (response.data.status == 201) {
            console.log(response);
            alert("Note moved to trash");
            location.reload();
            return response;
          }
        })
        .catch((error) => {
          alert("Error");
          return error;
        });
    },
    moveToArchive() {
      let userDate = {
        id: this.cardId,
      };
      console.log(userDate);
      service
        .userMoveNoteToArchive(userDate)
        .then((response) => {
          console.log(response);
          alert("Note moved to Archive");
          location.reload();
        })
        .catch((error) => {
          alert("Error");
          return error;
        });
    },
    restoreNoteToDisplay() {
      let userDate = {
        id: this.cardId,
      };
      console.log(userDate);
      service
        .userRestoreFromArchive(userDate)
        .then((response) => {
          console.log(response);
          alert("Note Unarchived");
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
@import "../styles/Icons.scss"
</style>
