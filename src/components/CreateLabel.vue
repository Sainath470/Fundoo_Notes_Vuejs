<template>
  <div class="container">
    <div class="label-container">
      <h1 class="label">Edit labels</h1>
      <input type="text" placeholder="Create new label" v-model="label_name" />
      <div class="create-icon">
        <i class="fas fa-check" @click="createLabel()"></i>
      </div>
      <div class="btn-done">
        <button>Done</button>
      </div>
    </div>
  </div>
</template>

<script>
import service from "../Services/User";

export default {
  data() {
    return {
      label_name: "",
    };
  },
  methods: {
    createLabel() {
      let userData = {
        label_name: this.label_name,
      };
      console.log(userData);
      service
        .userCreateLabel(userData)
        .then((response) => {
          console.log(response);
          if (response.data.status == 201) {
            alert("Label created successfully");
            localStorage.getItem("token", response.data.token);
            return response;
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
@import "../styles/CreateLabel.scss"
</style>
