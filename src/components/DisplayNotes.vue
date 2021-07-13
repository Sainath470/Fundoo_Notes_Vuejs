<template>
  <div class="container">
    <div
      v-for="note in list"
      v-bind:key="note.id"
      class="notes-container"
      @click="toggle(note.id)"
    >
      <div class="notes" id="notes">
        <h4 @click="changeState()">
          {{ note.title }}
        </h4>
        <p @click="changeState()">
          {{ note.description }}
        </p>
        <div class="note-icons"><Icons :cardId="note.id" /></div>
      </div>
    </div>
    <div class="update-component" id="pop" v-if="state">
      <UpdateNotes :cardId="clickedCard" :cardContent="noteDetails" />
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
      state: false,
      list: {},
      clickedCard: "",
      cardContent: {},
    };
  },
  created() {
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
  methods: {
    changeState() {
      this.state = !this.state;
    },
    toggle(id) {
      // var blur = document.getElementById("blur");
      // blur.classList.toggle("active");
      this.clickedCard = id;
      // var pop = document.getElementById("pop");
      // pop.classList.toggle("active");
    },
  },
};
</script>

<style lang="sass" scoped>
@import "../styles/DisplayNotes.scss"
</style>