import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state:{
      count :0
    },
    getters:{
      getCount(){
        return count;
      }
    },
    actions:{
      setCount(payload){
        count = payload
      }
    }
  })


  export default store