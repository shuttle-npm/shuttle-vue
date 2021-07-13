<script>
export default {
  name: "SColumn",
  props: {
    type: String,
    size: Number,
  },
  
  computed: {
    classes: function () {
      const renderType = (this.type || "sm").toLowerCase();
      var renderSize = this.size || 8;

      if (renderSize > 12) {
        renderSize = 12;
      } else if (renderSize < 5) {
        renderSize = 5;
      }

      switch (renderType) {
        case "lg": {
          renderSize = renderSize - 1;
          break;
        }
        case "md": {
          renderSize = renderSize - 2;
          break;
        }
        case "sm": {
          renderSize = renderSize - 3;
          break;
        }
        case "xs": {
          renderSize = renderSize - 4;
          break;
        }
      }

      return `col-xl-${renderSize} col-lg-${renderSize + 1} col-md-${
        renderSize + 2
      } mx-auto`;
    },
  },
};
</script>

<template>
  <div class="container-fluid">
    <div class="s-column row">
      <div class="col d-sm-none d-md-block"></div>
      <div v-bind:class="[classes]" class="p-0">
        <slot></slot>
      </div>
      <div class="col d-sm-none d-md-block"></div>
    </div>
  </div>
</template>

