<template>
  <v-app>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <div class="text-center my-5 text-h5 font-weight-bold text-dark">vuetify-country-search</div>
          <v-card>
            <v-card-text>
              country: {{ country.countryCode }}
              <v-country-select dense itemText="countryName" v-model="country"/>
              region/state: {{ region.name }}
              <v-region-select itemText="name" v-model="region" />
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
// import VCountrySelect from '@/components/VCountrySelect'
// import VRegionSelect from '@/components/VRegionSelect'

export default {
  name: 'App',
  // components: {
  //   VCountrySelect,
  //   VRegionSelect
  // },
  data: () => ({
    country: 'BD',
    region: ''
  }),
  watch: {
    country() {
      console.log(this.country)
    },
    region() {
      console.log(this.region)
    }
  }
};
</script>

<style>
#app {
  background-color: #17A2B8;
}
</style>
