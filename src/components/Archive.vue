<template>
  <div class="main-container">
    <div class="container" id="blur">
      <div v-for="note in list" v-bind:key="note.id" class="notes-container">
        <div class="notes" id="notes">
          <h4>{{ note.title }}</h4>
          <p>{{ note.description }}</p>
        </div>
        <div class="note-icons">
          <Icons />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import service from "../Services/User";
import Icons from "./Icons.vue";

export default {
  components: {
    Icons,
  },
  data() {
    return {
      list: {},
    };
  },
  mounted() {
    service.userNotesInArchive().then((response) => {
      console.log(response);
      this.list = response.data;
    });
  },
  methods: {},
};
</script>

<style lang="sass" scoped>
@import '../Styles/Archive.scss'
</style>
