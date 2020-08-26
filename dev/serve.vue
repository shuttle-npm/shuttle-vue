<script>
import "./assets/bootstrap.scss";
import "./assets/shuttle.css";
import store from "./store";

export default {
  data() {
    return {
      formOptionsAvailable: false,
      items: [
        {
          href: "s-title",
          text: "s-title",
        },
      ],
    };
  },
  computed: {
    alerts() {
      return this.$store.state.alerts.messages;
    },
  },
  methods: {
    addAlert() {
      store.dispatch("addAlert", {
        message: `This alert was added @ ${new Date()}`,
        type: "info",
      });
    },
    removeAlert(alert) {
      this.$store.commit("REMOVE_ALERT", alert);
    },
  },
  mounted() {
    router.push("dashboard");
  },
};
</script>

<template>
  <div id="app">
    <div>
      <b-sidebar id="sidebar-backdrop" backdrop-variant="dark" backdrop shadow></b-sidebar>
    </div>
    <b-navbar toggleable="lg" fixed="top" type="dark">
      <b-navbar-brand href="dashboard">
        <img src="./assets/logo-small.png" alt="Shuttle-Vue logo" />
        ShuttleVue
      </b-navbar-brand>
      <b-collapse id="nav-text-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item v-b-toggle.sidebar-backdrop>
            <font-awesome-icon icon="angle-double-right" />
          </b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav>
          <s-navbar-dropdown text="Samples" :items="items" />
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <s-alerts :alerts="alerts" v-on:removed="removeAlert" />
    <div class="container-fluid mt-2">
      <div class="row row-offcanvas row-offcanvas-left">
        <div id="application-content" class="main col-sm-12 col-md-12">
          <router-view></router-view>
          <b-button @click="addAlert">Add Alert</b-button>
        </div>
      </div>
    </div>
    <footer class="footer text-muted">
      <div class="container-fluid text-center">
        <div class="d-none d-xl-block font-weight-bold">X-LARGE (XL)</div>
        <div class="d-none d-lg-block d-xl-none font-weight-bold">LARGE (LG)</div>
        <div class="d-none d-md-block d-lg-none font-weight-bold">MEDIUM (M)</div>
        <div class="d-none d-sm-block d-md-none font-weight-bold">SMALL (SM)</div>
        <div class="d-block d-sm-none alert font-weight-bold">X-SMALL (Default)</div>
        <p class="m-0">Copyright (c) 2020 Shuttle</p>
      </div>
    </footer>
  </div>
</template>
