<template>
  <div class="container" @submit.prevent="handleSubmit()">
    <div v-for="Note in Notes" :key="Note.id" class="notes-container">
      <div class="notes">
        <h4>{{ Note.title }}</h4>
        <p>{{ Note.description }}</p>
        <div class="note-icons"><Icons /></div>
      </div>
      <div class="display-icons">
        <button v-if="state == false" type="button">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
import service from "../Services/User";
import Icons from "./Icons.vue";

export default {
  name: "DisplayNotes",
  components: {
    Icons,
  },
  data() {
    return {
      state: true,
      default_state: true,
      Notes: [
        {
          id: 1,
          title: "Fundoo",
          description: "Notes",
        },
      ],
    };
  },
  methods: {
    changeState() {
      this.state = !this.state;
    },
    async handleSubmit() {
      service.userDisplayNotes().then((response) => {
        this.Notes.push(...response.data);
      });
    },
  },
};
</script>

<style lang="sass" scoped>
@import "../styles/DisplayNotes.scss"
</style>