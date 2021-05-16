import { createStore } from 'vuex'

export default createStore({
  state: {
    message: '',
    error: false,
    finished : false,
    tasks: JSON.parse(localStorage.getItem('taskList'))
  },
  mutations: {
    setMessage(state, value){
      state.message = value;
    },
    setTasks(state, value){
      state.tasks = JSON.parse(value);
    },
    setFinished(state, value){
      state.finished = value;
    }
  },
  actions: {
  },
  modules: {
  }
})
