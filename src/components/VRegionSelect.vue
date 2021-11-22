<template>
    <v-autocomplete
      :items="regionList"
      :item-text="itemText"
      :item-value="itemValue"
      :error-messages="errorMessage"
      :value="value"
      v-model="region"
      :outlined="outlined"
      :filled="filled"
      :flat="flat"
      :label="label"
      :rules="rules"
      :dense="dense"
      return-object
      @input="selectRegion()"
    ></v-autocomplete>
</template>

<script>
import { VAutocomplete } from "vuetify/lib";
import states from "@/data.js";
// import { EventBus } from "../main";
import { EventBus } from "@/event";

export default {
  name: "VRegionSelect",
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
      type: [Object, String],
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
      states,
      countryName: null,
      region: "",
    };
  },
  computed: {
    regionList() {
      return this?.countryName?.regions || [];
    },
  },
  mounted() {
    EventBus.$on("countryValue", (country) => {
      this.countryName = country;
    });
  },
  methods: {
    selectRegion() {
      this.$emit("input", this.region);
    },
  },
};
</script>