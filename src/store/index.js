import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
Vue.use(Vuex)

export default new Vuex.Store({
  // 集合到state.js
  // state: {
  //   city
  // },
  state,
  // 没有异步操作或者批处理，所以直接commit到mutations
  // actions: {
  //   changeCities (ctx, city) {
  //     ctx.commit('changeCities', city)
  //   }
  // },
  mutations
  // 集合到mutations.js
  // mutations: {
  //   changeCities (state, city) {
  //     state.city = city
  //     try {
  //       localStorage.city = city
  //     } catch (e) {
  //       console.log(e)
  //     }
  //   }
  // }
})
