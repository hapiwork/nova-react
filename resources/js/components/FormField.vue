<template>
  <default-field :field="field" :errors="errors" :show-help-text="showHelpText">
    <template slot="field">
      <!-- Default field -->
      <!-- <input
            :id="field.name"
            type="text"
            class="w-full form-control form-input form-input-bordered"
            :class="errorClasses"
            :placeholder="field.name"
            v-model="value"
        /> -->
      <div ref="reactRoot"></div>
    </template>
  </default-field>
</template>

<script>
import { FormField, HandlesValidationErrors } from "laravel-nova";
import { MountFormField } from "../App";

export default {
  mounted: function () {
    //Mount the React component to Vue form component
    MountFormField(this.$refs.reactRoot, {
      initialValue: this.value,
      updateFieldValue: (value) => this.updateFieldValue(value),
    });
  },
  mixins: [FormField, HandlesValidationErrors],

  props: ["resourceName", "resourceId", "field"],

  methods: {
    /*
     * Set the initial, internal value for the field.
     */
    setInitialValue() {
      this.value = this.field.value || 0;
    },

    /**
     * Fill the given FormData object with the field's internal value.
     */
    fill(formData) {
      formData.append(this.field.attribute, this.value);
    },

    updateFieldValue(value) {
      this.value = value;
    },
  },
  computed: {},
};
</script>
