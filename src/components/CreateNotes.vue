<template>
  <div class="container">
    <div class="input-box" v-if="state == true">
      <input
        type="text"
        v-on:click="changeState()"
        placeholder="Take a note.."
      />
      <div class="icons">
        <span class="first-image"><i class="fas fa-check-square"></i></span>
        <span class="second-image"><i class="fas fa-paint-brush"></i></span>
        <span class="third-image"><i class="fas fa-image"></i></span>
      </div>
    </div>
    <div class="createNote" v-if="state == false">
      <form class="create-notes" @submit.prevent="">
        <input name="title" v-model="title" placeholder="Title" size="50" />
        <textarea
          name="content"
          v-model="description"
          placeholder="Take a note . ."
        ></textarea>
        <div class="bottom-icons">
          <Icons />
        </div>
        <div class="bottom-close">
          <button
            type="submit"
            @click="changeState()"
            v-on:click="handleSubmit()"
          >
            Close
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import service from "../Services/User";
import Icons from "./Icons.vue";

export default {
  name: "createNotes",
  components: {
    Icons,
  },
  data() {
    return {
      state: true,
      title: "",
      description: "",
      error: "",
    };
  },
  methods: {
    clearForm() {
      this.title = "";
      this.description = "";
    },
    changeState() {
      this.state = !this.state;
    },
    handleSubmit() {
      let userData = {
        title: this.title,
        description: this.description,
      };
      this.clearForm();
      service.userCreateNote(userData).then((response) => {
        if (response.data.status == 201) {
          localStorage.getItem("token", response.data.token);
          alert("Note created successfully");
          location.reload();
          return response;
        }
        if (response.data.status == 403) {
          alert("Token is invalid");
          return response;
        }
      });
    },
  },
};
</script>

<style lang="sass" scoped>
@import "@/styles/CreateNotes.scss"
</style>
