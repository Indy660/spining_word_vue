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
      speedUpdateColor: 200,
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
    hueState(state) {
      return state.settingInscription.color.hue
    },
    saturationState(state) {
      return state.settingInscription.color.saturation
    },
    lightnessState(state) {
      return state.settingInscription.color.lightness
    },
    speedUpdateColorState(state) {
      return state.settingInscription.speedUpdateColor
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
    setDefaultState(state) {
      Object.assign(state, getDefaultStateClone())
    }
  },
  actions: {
  },
  modules: {
  }
})
