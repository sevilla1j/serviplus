import Vue from 'vue'
import Vuex from 'vuex'

import login from './modules/sesion/login'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    login
  },
})
