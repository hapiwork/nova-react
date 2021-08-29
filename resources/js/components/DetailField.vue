<template>
  <panel-item :field="field">
    <div slot="value" ref="reactRoot"></div>
  </panel-item>
</template>

<script>
import { MountDetailField } from '../App';
export default {
  mounted: function () {
    //Mount the React component to Vue form component
    MountDetailField(this.$refs.reactRoot, {
      initialValue: this.field.value,
    });
  },
  props: ["resource", "resourceName", "resourceId", "field"],
};
</script>
