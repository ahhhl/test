import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import { getToken, removeToken } from '@/utils/auth'

Vue.use(Vuex)

const state = {
  token: getToken()
}
const mutations = {

}
const actions = {
  logout({ commit }) {
    return new Promise((resolve) => {
      commit('set_token', '')
      removeToken()
      resolve()
    })
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})