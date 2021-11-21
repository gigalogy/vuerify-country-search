# vuetify-country-search

This package provides a pair of Vuetify components for countries/region select inputs. Components may be used together or standalone.


---

## Installation

```bash
npm i --save vuetify-country-search
# or yarn add vuetify-country-search
```



## Usage

```javascript
import Vue from 'vue'
import VCountrySearch from 'vuetify-country-search'
Vue.use(VCountrySearch)

new Vue({}).$mount('#app')

// then inside your vue components
export default Vue.extend({
  data: () => ({
    country: 'AU',
    region: 'South Australia'
  })
})

<template>
    <v-country-select v-model="country" />
    <v-region-select v-model="region" :country="country" />
</template>
```

### Use standalone

```vue
<script>
import { VCountrySelect } from 'vuetify-country-search'

export default {
  name: 'App',
  components: { VCountrySelect },
  data: () => ({
    country: 'AU',
  })
};
</script>

<template>
    <v-country-select v-model="country" />
</template>
```



## Options

In addition to Vuetify VAutocomplete props, here are the available attributes that can be used with the provided components.

### VCountrySelect

| Parameter        | Required? | Default | Type    | Description                                                  |
| ---------------- | --------- | ------- | ------- | ------------------------------------------------------------ |
| v-model          | yes       | ''      | `string`  | The data binding for your component                          |




### VRegionSelect

| Parameter          | Required? | Default         | Type    | Description                                                  |
| ------------------ | --------- | --------------- | ------- | ------------------------------------------------------------ |
| v-model            | yes       | ''              | `string`  | The data binding for your component                          |

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## Credits

* [vuetify-country-region-input](https://github.com/augustusnaz/vuetify-country-region-input)
* [vue-country-region-select](https://github.com/gehrj/vue-country-region-select)
* https://www.npmjs.com/package/country-region-data

## License

[Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/)