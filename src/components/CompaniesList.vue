<template>
  <div class="container">
    <h1>Companies List</h1>
    <div v-if="filteredCompaniesList.length" class="companies-list">
      <company-item v-for="company in filteredCompaniesList" :key="company.id" :company-data="company" />
    </div>
    <div v-else>It's empty</div>
    <button @click="onAdd">Create a company</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CompanyItem from './CompanyItem.vue'

export default {
  name: 'CompaniesList',
  components: { CompanyItem },

  computed: {
    ...mapGetters(['getCompaniesList', 'filteredCompaniesList']),
  },

  methods: {
    onAdd() {
      this.$router.push({
        name: 'company',
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  justify-content: center;
  gap: 2.5rem 0;
}
.companies-list {
  display: grid;
  gap: 1.25rem 0;
}
</style>
