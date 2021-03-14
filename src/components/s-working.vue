<script>
export default {
  name: "SWorking",
  props: {
    icon: String,
    text: String,
    textClass: String,
  },
  computed: {
    computeIconClass() {
      return this.icon ? this.icon : "fa-spin fa-4x";
    },
  },
};
</script>

<template>
  <div class="s-working">
    <div :class="textClass" v-if="text">{{ text }}</div>
    <font-awesome-icon icon="circle-notch" :class="computeIconClass" />
  </div>
</template>