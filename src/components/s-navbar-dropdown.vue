<script>
export default {
  name: "SNavbarDropdown",
  props: {
    text: String,
    href: String,
    to: String,
    items: Array
  }
};
</script>

<template>
  <div>
    <b-nav-item v-if="!!href || !!to" :href="!!href ? href : undefined" :to="!!to ? to : undefined">{{text}}</b-nav-item>
    <b-nav-item-dropdown v-else :text="text" right>
      <b-dropdown-item v-for="item in items" :key="item.name" :href="!!item.href ? item.href : undefined" :to="!!item.to ? item.to : undefined">{{item.text}}</b-dropdown-item>
    </b-nav-item-dropdown>
  </div>
</template>

