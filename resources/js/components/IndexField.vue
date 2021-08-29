<template>
  <!-- <span>{{ field.value }}</span> -->
  <span ref="reactRoot" />
</template>

<script>
import { MountIndexField } from "../App";

export default {
  mounted: function () {
    //Mount the React component to Vue form component
    MountIndexField(this.$refs.reactRoot, {
      initialValue: this.field.value,
    });
  },
  props: ["resourceName", "field"],
};
</script>
