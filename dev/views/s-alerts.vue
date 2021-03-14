<script>
import store from "../store";

export default {
  methods: {
    addAlert() {
      store.dispatch("addAlert", {
        message: `This alert was added @ ${new Date()} (expires)`,
        type: "info",
      });
    },
    addAlertKeep() {
      store.dispatch("addAlert", {
        message: `This alert was added @ ${new Date()} (does not expire)`,
        type: "info",
        expire: false,
      });
    },
  },
};
</script>

<template>
  <div>
    <s-title text="Alerts" />
    <b-button @click="addAlert" class="mr-2">Add Alert (expires)</b-button>
    <b-button @click="addAlertKeep">Add Alert (does not expire)</b-button>
  </div>
</template>
