import Vue from 'vue'
import Vuex from 'vuex'
import tokens from './modules/tokens'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    tokens
  },
  strict: debug
})
