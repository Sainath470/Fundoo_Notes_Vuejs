<template>
  <div class="main-container">
    <div class="container" id="blur">
      <div v-for="note in list" v-bind:key="note.id" class="notes-container">
        <div class="notes" id="notes">
          <h4
            @click="
              changeState();
              toggle(note.id, note.title, note.description);
            "
          >
            {{ note.title }}
          </h4>
          <p
            @click="
              changeState();
              toggle(note.id, note.title, note.description);
            "
          >
            {{ note.description }}
          </p>
          <div class="note-icons">
            <Icons :cardId="note.id" />
          </div>
        </div>
      </div>
    </div>
    <div class="update-component" id="pop" v-if="state">
      <UpdateNotes :cardId="clickedCard" :cardContent="cardContent" />
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
      value: undefined,
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
    toggle(id, title, description) {
      var blur = document.getElementById("blur");
      blur.classList.toggle("active");
      this.cardContent = { title, description };
      this.clickedCard = id;
      console.log(this.clickedCard);
      console.log(this.cardContent);
      var pop = document.getElementById("pop");
      pop.classList.toggle("active");
    },
  },
};
</script>

<style lang="sass" scoped>
@import "../styles/DisplayNotes.scss"
</style>