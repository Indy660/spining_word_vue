import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //todo: придумать экспорт из хелпера
  state: {
    mainScreen: {
      timesInscription: 20,
      rows: 20,
      columns: 20,
    },
    settingInscription: {
      inscription: 'EXAMPLE',
    }
  },
  getters: {
    timesInscription(state) {
      return state.mainScreen.timesInscription
    },
    rows(state) {
      return state.mainScreen.rows
    },
    columns(state) {
      return state.mainScreen.columns
    },
    inscription(state) {
      return state.settingInscription.inscription
    },
  },
  mutations: {
    updateTimesInscription(state, number) {
      state.mainScreen.timesInscription = number
    },
    updateRowsNumber(state, number) {
      state.mainScreen.rows = number
    },
    updateColumnsNumber(state, number) {
      state.mainScreen.columns = number
    },
    updateInscriptionName(state, name) {
      state.settingInscription.inscription = name
    }
  },
  actions: {
  },
  modules: {
  }
})
