<script>
import "./assets/bootstrap.scss";
import "./assets/shuttle.css";
import map from "./navigation-map";

export default {
  data() {
    return {
      formOptionsAvailable: false,
      resources: [],
    };
  },
  computed: {
    alerts() {
      return this.$store.state.alerts.messages;
    },
  },
  methods: {
    removeAlert(alert) {
      this.$store.commit("REMOVE_ALERT", alert);
    },
  },
  mounted() {
    const result = [];

    map.forEach((item) => {
      result.push({
        text: item.text,
        to: item.to || "",
        items: item.items || [],
      });
    });

    this.resources = result;
  },
};
</script>

<template>
  <div id="app">
    <div>
      <b-sidebar
        id="sidebar-backdrop"
        backdrop-variant="dark"
        backdrop
        shadow
      ></b-sidebar>
    </div>
    <b-navbar toggleable="lg" fixed="top" type="dark">
      <b-navbar-brand to="dashboard">
        <img src="./assets/logo-small.png" alt="Shuttle-Vue logo" />
        ShuttleVue
      </b-navbar-brand>
      <b-collapse id="nav-text-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item v-b-toggle.sidebar-backdrop>
            <font-awesome-icon icon="angle-double-right" />
          </b-nav-item>
        </b-navbar-nav>
        <s-navbar-dropdown
          v-for="item in resources"
          :key="item.text"
          :text="item.text"
          :to="item.to"
          :items="item.items"
        />
      </b-collapse>
    </b-navbar>
    <div class="container-fluid mt-2">
      <div class="row row-offcanvas row-offcanvas-left">
        <div class="col-md-2 .d-sm-none .d-md-block" />
        <div id="application-content" class="main col-sm-12 col-md-8">
          <s-alerts :alerts="alerts" v-on:removed="removeAlert" />
          <router-view></router-view>
        </div>
        <div class="col-md-2 .d-sm-none .d-md-block" />
      </div>
    </div>
    <footer class="footer p-1">
      <div class="container-fluid text-center">
        <div class="d-none d-xl-block font-weight-bold">X-LARGE (XL)</div>
        <div class="d-none d-lg-block d-xl-none font-weight-bold">
          LARGE (LG)
        </div>
        <div class="d-none d-md-block d-lg-none font-weight-bold">
          MEDIUM (M)
        </div>
        <div class="d-none d-sm-block d-md-none font-weight-bold">
          SMALL (SM)
        </div>
        <div class="d-block d-sm-none alert font-weight-bold">
          X-SMALL (Default)
        </div>
        <p class="m-0">Copyright (c) 2020 Shuttle</p>
      </div>
    </footer>
  </div>
</template>
