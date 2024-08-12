import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import store from './store/counterStore'
Vue.use(Vuex)

// const store = new Vuex.Store({
//   state:{
//     count :0
//   }
// })

new Vue({
  el: '#app',
  store, // Vuex 스토어 등록
  render: h => h(App),
})
