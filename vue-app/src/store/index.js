import { createStore } from 'vuex'

export default createStore({
  state: {
    number: 0
  },
  mutations: {
    addGol(state, payload){
      state.number += payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
