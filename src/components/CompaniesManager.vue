<template>
  <div>
    <companies-filters />
    <companies-list />
  </div>
</template>

<script>
import CompaniesFilters from './CompaniesFilters.vue'
import CompaniesList from './CompaniesList.vue'

export default {
  name: 'CompaniesManager',
  components: { CompaniesList, CompaniesFilters },
}
</script>

<style lang="scss" scoped></style>
