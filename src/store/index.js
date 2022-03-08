import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// import { getDefaultStateClone, defaultState } from "@/helper/helper.js"
import { getDefaultStateClone } from "@/helper/helper.js"
export default new Vuex.Store({
  //todo: придумать экспорт из хелпера
  // state: defaultState, - не работает возвращение
  state: {
    mainScreen: {
      timesInscription: 20,
      rows: 20,
      columns: 20,
      color: {
        saturation: 100,
        lightness : 50,
      },
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
    saturationState(state) {
      return state.mainScreen.color.saturation
    },
    lightnessState(state) {
      return state.mainScreen.color.lightness
    },
    inscription(state) {
      return state.settingInscription.inscription
    },
  },
  mutations: {
    setTimesInscription(state, number) {
      state.mainScreen.timesInscription = number
    },
    setRowsNumber(state, number) {
      state.mainScreen.rows = number
    },
    setColumnsNumber(state, number) {
      state.mainScreen.columns = number
    },
    setSaturation(state, saturation) {
      state.mainScreen.color.saturation = saturation
    },
    setLightness(state, lightness) {
      state.mainScreen.color.lightness = lightness
    },
    setInscriptionName(state, name) {
      state.settingInscription.inscription = name
    },
    setDefaultState(state) {
      Object.assign(state, getDefaultStateClone())
    }
  },
  actions: {
  },
  modules: {
  }
})
