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
    },
    settingInscription: {
      inscription: 'EXAMPLE',
      color: {
        hue: {
          start: 1,
          end: 360,
        },
        saturation: 100,
        lightness: 50,
      },
      initialFontSize: 100,
      speedUpdateColor: 200,
    }
  },
  getters: {
    getTimesInscription(state) {
      return state.mainScreen.timesInscription
    },
    getRows(state) {
      return state.mainScreen.rows
    },
    getColumns(state) {
      return state.mainScreen.columns
    },
    getInscription(state) {
      return state.settingInscription.inscription
    },
    getHue(state) {
      return state.settingInscription.color.hue
    },
    getSaturation(state) {
      return state.settingInscription.color.saturation
    },
    getLightness(state) {
      return state.settingInscription.color.lightness
    },
    getSpeedUpdateColor(state) {
      return state.settingInscription.speedUpdateColor
    },
    getInitialFontSize(state) {
      return state.settingInscription.initialFontSize
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
    setInscriptionName(state, name) {
      state.settingInscription.inscription = name
    },
    setSaturation(state, saturation) {
      state.settingInscription.color.saturation = saturation
    },
    setHue(state, hue) {
      state.settingInscription.color.hue = hue
    },
    setLightness(state, lightness) {
      state.settingInscription.color.lightness = lightness
    },
    setSpeedUpdateColor(state, speed) {
      state.settingInscription.speedUpdateColor = speed
    },
    setInitialFontSize(state, fontSize) {
      state.settingInscription.initialFontSize = fontSize
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
