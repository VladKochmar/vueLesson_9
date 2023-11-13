<template>
  <div class="company-item">
    <span>{{ company.title }}</span>
    <span>{{ company.rate }}</span>
    <span>{{ company.year }}</span>
    <span>{{ company.owner }}</span>
    <button @click="onDelete(company.id)">Delete</button>
    <button @click="onEdit(company.id)">Edit</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'CompanyItem',

  props: {
    companyData: {
      type: Object,
      required: true,
    },
  },

  computed: {
    company() {
      return this.companyData
    },
  },

  methods: {
    ...mapActions(['removeCompany']),

    onEdit(id) {
      this.$router.push({
        name: 'company',
        params: { company_id: id },
      })
    },

    onDelete(id) {
      this.removeCompany(id)
    },
  },
}
</script>

<style lang="scss" scoped>
.company-item {
  display: flex;
  gap: 0 0.625rem;
}
</style>
