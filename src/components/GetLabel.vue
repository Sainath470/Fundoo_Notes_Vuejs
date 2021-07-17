<template>
  <div class="container">
    <div v-for="label in list" v-bind:key="label.id" class="label-display">
      <div class="labelcontainer">
        {{ label.name }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import service from "../Services/User";
export default {
  data() {
    return {
      list: {},
    };
  },
  mounted() {
    service.userGetLabels().then((response) => {
      console.log(response);
      this.list = response.data;
    });
  },
  methods: {},
};
</script>

<style lang="sass" scoped></style>
