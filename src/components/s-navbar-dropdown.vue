<template>
  <b-navbar-nav>
    <b-nav-item v-if="to" :to="to">{{ text }}</b-nav-item>
    <b-nav-item-dropdown v-else-if="items" :text="text">
      <b-dropdown-item v-for="item in items" :key="item.href" :to="item.to">{{
        item.text
      }}</b-dropdown-item>
    </b-nav-item-dropdown>
  </b-navbar-nav>
</template>

<script>
export default {
  props: {
    to: String,
    text: String,
    items: Array,
  },
};
</script>