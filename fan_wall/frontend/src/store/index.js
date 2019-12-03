import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
    SET_EVENTS(state, events) {
      state.events = events
    },
    SET_WALLS(state, walls) {
      state.walls = walls
    },
    SET_FANS(state, fans) {
      state.fans = fans
    },
  },
  actions: {
    async fetchEvents({commit}){
      const result = await axios.get('http://localhost:3000/event/all/json')
      commit('SET_EVENTS', result.data)
      console.log(result)
    },
    async fetchWalls({commit}){
      const result = await axios.get('http://localhost:3000/wall/all/json')
      commit('SET_WALLS', result.data)
      console.log(result)
    },
    async fetchFans({commit}){
      const result = await axios.get('http://localhost:3000/fan/all/json')
      commit('SET_FANS', result.data)
      console.log(result)
    },
  },
  modules: {
  }
})
