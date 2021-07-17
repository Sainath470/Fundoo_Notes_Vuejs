<template>
  <div class="main-container">
    <div class="btn-empty-trash">
      <button>Empty Trash</button>
    </div>
    <div class="container" id="blur">
      <div v-for="note in list" v-bind:key="note.id" class="notes-container">
        <div class="notes" id="notes">
          <h4>{{ note.title }}</h4>
          <p>{{ note.description }}</p>
          <div class="note-icons">
            <TrashIcons :cardId="note.id" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import service from "../Services/User";
import TrashIcons from "./IconsForTrash.vue";

export default {
  components: {
    TrashIcons,
  },
  data() {
    return {
      list: {},
      clickedCard: "",
    };
  },
  mounted() {
    service.userDisplayNotesInTrash().then((response) => {
      console.log(response);
      this.list = response.data;
    });
  },
};
</script>

<style lang="sass" scoped>
@import '../Styles/Trash.scss'
</style>
