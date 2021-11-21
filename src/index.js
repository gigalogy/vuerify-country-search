import VCountrySelect from '@/components/VCountrySelect.vue'
import VRegionSelect from '@/components/VRegionSelect.vue'
import AllCountry from '@/data'

const install = function (Vue) {
    const components = { VCountrySelect, VRegionSelect }
    Object.keys(components).forEach(name => {
        Vue.component(name, components[name])
    })
}

const VueCountrySearch = { VCountrySelect, VRegionSelect, install }

export default VueCountrySearch
export { VCountrySelect, VRegionSelect, AllCountry }