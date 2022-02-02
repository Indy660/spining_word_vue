import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mainScreen: {
      timesInscription: 20,
      rows: 20,
      columns: 20,
    },
    settingInscription: {
      inscription: 'CSS'
    }
  },
  getters: {
    timesInscription(state) {
      return state.timesInscription
    },
    rows(state) {
      return state.rows
    },
    columns(state) {
      return state.columns
    },
    inscription(state) {
      return state.inscription
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
