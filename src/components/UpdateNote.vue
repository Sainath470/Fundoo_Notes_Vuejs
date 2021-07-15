<template>
  <div class="update-container">
    <form class="update-note" @submit.prevent="">
      <input name="title" id="title-name" v-model="title" placeholder="Title" />
      <textarea
        id="input-description"
        name="description"
        v-model="description"
        placeholder="Take a note.."
      ></textarea>
      <div class="bottom-icons">
        <Icons id="Icons-hover" />
      </div>
      <button id="update-close" type="submit" @click="handleSubmit()">
        Close
      </button>
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
  props: ["cardId", "cardContent"],
  data() {
    return {
      title: "",
      description: "",
    };
  },
  created() {
    this.title = this.cardContent.title;
    this.description = this.cardContent.description;
  },
  methods: {
    changeState() {
      this.state = !this.state;
    },
    handleSubmit() {
      let userDate = {
        id: this.cardId,
        title: this.title,
        description: this.description,
      };
      service
        .userUpdateNote(userDate)
        .then((response) => {
          if (response.data.status == 201) {
            alert("Note update successfully");
            location.reload();
          }
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