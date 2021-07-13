<script>
export default {
  data() {
    var sizes = [];

    for (var i = 5; i < 13; i++) {
      sizes.push({ value: i, text: i != 8 ? i : "8 (default)" });
    }

    return {
      size: 8,
      sizes: sizes,
      type: "sm",
      types: [
        {value: "xl", text: "xl"},
        {value: "lg", text: "lg"},
        {value: "md", text: "md"},
        {value: "sm", text: "sm (default)"},
        {value: "xs", text: "xs"},
      ]
    };
  },
};
</script>

<template>
  <div>
    <s-title text="Column" />
    <label for="size">Size: </label>
    <b-form-select id="size" v-model="size" :options="sizes" class="mb-3"></b-form-select>
    <label for="type">Type: </label>
    <b-form-select id="type" v-model="type" :options="types" class="mb-3"></b-form-select>
    <s-column :type="type" :size="size">
      <s-title :text="type" />
    </s-column>
  </div>
</template>
