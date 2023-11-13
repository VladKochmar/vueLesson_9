<template>
  <div class="container">
    <h1>Filters</h1>
    <div @change="updateFilter(filterData)">
      <label>
        Title
        <input type="text" v-model="filterData.title" />
      </label>
      <label>
        Rate
        <input type="number" v-model="filterData.rate" />
      </label>
      <label>
        Year
        <input type="number" v-model="filterData.year" />
      </label>
      <label>
        Owner
        <input type="text" v-model="filterData.owner" />
      </label>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'CompaniesFilters',

  computed: {
    ...mapGetters(['getFilterObj']),

    filterData() {
      return { ...this.getFilterObj }
    },
  },

  methods: {
    ...mapActions(['updateFilter']),
  },
}
</script>

<style lang="scss" scoped></style>
