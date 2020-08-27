<script>
import store from "../store";

export default {
  methods: {
    addAlert() {
      store.dispatch("addAlert", {
        message: `This alert was added @ ${new Date()}`,
        type: "info",
      });
    },
  },
};
</script>

<template>
  <div>
    <s-title text="Alerts" />
    <b-button @click="addAlert">Add Alert</b-button>
  </div>
</template>
