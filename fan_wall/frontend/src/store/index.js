import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
    SET_EVENTS(state, data) {
      state.events = data
    },
    SET_EVENT(state, data) {
      state.event = data
    },
    SET_WALLS(state, data) {
      state.walls = data
    },
    SET_WALL(state, data) {
      state.wall = data
    },
    SET_FANS(state, data) {
      state.fans = data
    },
    SET_FAN(state, data) {
      state.fan = data
    },
  },
  actions: {
    async fetchEvents({commit}){
      const result = await axios.get(`${process.env.VUE_APP_API_URL}/event/all/json`)
      commit('SET_EVENTS', result.data)
      console.log(result)
    },
    async fetchEvent({commit}, id){
      const result = await axios.get(`${process.env.VUE_APP_API_URL}/event/${id}/json`)
      commit('SET_EVENT', result.data)
      console.log(result)
    },
    async fetchWalls({commit}){
      const result = await axios.get(`${process.env.VUE_APP_API_URL}/wall/all/json`)
      commit('SET_WALLS', result.data)
      console.log(result)
    },
    async fetchWall({commit}, id){
      const result = await axios.get(`${process.env.VUE_APP_API_URL}/wall/${id}/json`)
      commit('SET_WALL', result.data)
      console.log(result)
    },
    async fetchFans({commit}){
      const result = await axios.get(`${process.env.VUE_APP_API_URL}/fan/all/json`)
      commit('SET_FANS', result.data)
      console.log(result)
    },
    async fetchFan({commit}, id){
      const result = await axios.get(`${process.env.VUE_APP_API_URL}/fan/${id}/json`)
      commit('SET_FAN', result.data)
      console.log(result)
    },
  },
  modules: {
  }
})
