<template>
  <div class="container">
    <div v-on:click="changeState()" class="input-box" v-if="state == true">
      <input type="text" placeholder="Take a note.." />
      <div class="icons">
        <span class="first-image"
          ><i><CheckboxIcon /></i
        ></span>
        <span class="second-image"
          ><i><paintBurshIcon /></i
        ></span>
        <span class="third-image"
          ><i><ImageIcon /></i
        ></span>
      </div>
    </div>
    <div class="createNote" v-if="state == false">
      <form class="create-notes" @submit.prevent="">
        <input name="title" v-model="title" placeholder="Title" />
        <textarea
          name="content"
          v-model="description"
          placeholder="Take a note . ."
        ></textarea>
        <div>
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
import paintBurshIcon from "vue-material-design-icons/Brush.vue";
import ImageIcon from "vue-material-design-icons/Image.vue";
import CheckboxIcon from "vue-material-design-icons/CheckBoxOutline.vue";
import service from "../Services/User";

export default {
  name: "createNotes",
  components: {
    paintBurshIcon,
    ImageIcon,
    CheckboxIcon,
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
