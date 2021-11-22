<template>
    <v-autocomplete
      :items="countries"
      :item-text="itemText"
      :item-value="itemValue"
      :error-messages="errorMessage"
      :value="value"
      v-model="country"
      :outlined="outlined"
      :filled="filled"
      :flat="flat"
      :label="label"
      :country="country"
      :rules="rules"
      @input="selectCountry()"
      :dense="dense"
      return-object
    ></v-autocomplete>
</template>


<script>
import { VAutocomplete } from "vuetify/lib";
import countries from "@/data.js";
import { EventBus } from "@/event";

export default {
  name: "VCountrySelect",
  extends: VAutocomplete,
  props: {
    filled: {
      type: Boolean,
      default: false,
    },
    flat: {
      type: Boolean,
      default: false,
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    dense: {
      type: Boolean,
      default: false,
    },
    value: {
      type: [String, Object],
      default: "",
    },
    label: {
      type: String,
    },
    rules: {
      type: Array,
      default() {
        return [];
      }
    },
    itemText: {
      type: String,
    },
    itemValue: {
      type: String,
    },
    errorMessage: {
      type: [String, Array]
    },
  },
  data() {
    return {
      countryList: [],
      country: "",
      countries,
    };
  },
  methods: {
    selectCountry() {
      this.$emit("input", this.country);
      EventBus.$emit("countryValue", this.country);
    },
  },
};
</script>