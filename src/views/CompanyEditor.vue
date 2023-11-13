<template>
  <div>
    <div class="editor-container">
      <label>
        Title
        <input type="text" v-model="companyData.title" />
      </label>
      <label>
        Rate
        <input type="number" v-model="companyData.rate" />
      </label>
      <label>
        Year
        <input type="number" v-model="companyData.year" />
      </label>
      <label>
        Owner
        <input type="text" v-model="companyData.owner" />
      </label>
      <button v-if="!companyId" @click="onAdd">Create</button>
      <button v-else @click="onUpdate">Save</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'CompanyEditor',

  data() {
    return {
      companyData: {},
    }
  },

  computed: {
    ...mapGetters(['getCompanyById']),

    companyId() {
      return this.$route.params.company_id
    },
  },
  methods: {
    ...mapActions(['addCompany', 'updateCompany']),

    onAdd() {
      this.companyData.id = this.companyId || new Date().getTime()
      this.addCompany(this.companyData)
      this.$router.push({ name: 'home' })
    },

    onUpdate() {
      this.updateCompany(this.companyData)
      this.$router.push({ name: 'home' })
    },
  },

  created() {
    this.companyData = this.getCompanyById(this.companyId)
  },
}
</script>

<style lang="scss" scoped>
.editor-container {
  display: grid;
  justify-content: center;
  gap: 1.25rem 0;
  & > * {
    max-width: 25rem;
  }
}
</style>
