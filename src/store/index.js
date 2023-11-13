import { createStore } from 'vuex'

export default createStore({
  state: {
    companiesList: [],
    filterObj: {},
  },
  getters: {
    getCompaniesList: (state) => state.companiesList,

    getFilterObj: ({ filterObj }) => filterObj,

    getCompanyById: (state) => (companyId) => ({ ...state.companiesList.find((company) => company.id == companyId) }),

    filteredCompaniesList: (state) =>
      !state.filterObj
        ? state.companiesList
        : state.companiesList.filter((company) => {
            const title = !state.filterObj.title || company.title.includes(state.filterObj.title)
            const rate = !state.filterObj.rate || state.filterObj.rate === company.rate
            const year = !state.filterObj.year || state.filterObj.year === company.year
            const owner = !state.filterObj.owner || company.owner.includes(state.filterObj.owner)

            return title && rate && year && owner
          }),
  },
  mutations: {
    removeCompany(state, companyId) {
      state.companiesList = state.companiesList.filter((company) => company.id !== companyId)
    },

    addCompany(state, company) {
      state.companiesList.push(company)
    },

    updateCompany(state, companyData) {
      const companyIndex = state.companiesList.findIndex((company) => company.id === companyData.id)
      state.companiesList[companyIndex] = { ...companyData }
    },

    updateFilter(state, filterData) {
      state.filterObj = filterData
    },
  },
  actions: {
    removeCompany({ commit }, companyId) {
      commit('removeCompany', companyId)
    },

    addCompany({ commit }, company) {
      commit('addCompany', company)
    },

    updateCompany({ commit }, companyData) {
      commit('updateCompany', companyData)
    },

    updateFilter({ commit }, filterData) {
      commit('updateFilter', filterData)
    },
  },
  modules: {},
})
