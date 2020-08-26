<script>
export default {
  name: "SNavbarDropdown",
  props: {
    text: String,
    href: String,
    items: Array
  },
};
</script>

<template>
  <div>
    <b-nav-item v-if="!!href" :href="href">{{text}}</b-nav-item>
    <b-nav-item-dropdown v-else :text="text" right>
      <b-dropdown-item v-for="item in items" :key="item.name" :href="item.href">{{item.text}}</b-dropdown-item>
    </b-nav-item-dropdown>
  </div>
</template>

