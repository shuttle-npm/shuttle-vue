<script>
export default {
  name: "SWorking",
  props: {
    icon: String
  },
  computed: {
    iconClass() {
      return this.icon ? this.icon : "fa-spin fa-4x";
    },
  },
};
</script>

<template>
  <div class="s-working">
    <font-awesome-icon icon="circle-notch" :class="iconClass" />
  </div>
</template>