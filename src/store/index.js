import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

Vue.use(Vuex)


console.log('inside the index store file');

const state = {
  count: 0,
  savedString: ``,
  history: [],
  color1: [Math.floor(Math.random()*40)+50, Math.floor(Math.random()*40)+50, Math.floor(Math.random()*40)+50],
  color2: [Math.floor(Math.random()*40)+90, Math.floor(Math.random()*40)+90, Math.floor(Math.random()*40)+90],
  color3: [Math.floor(Math.random()*40)+130, Math.floor(Math.random()*40)+130, Math.floor(Math.random()*40)+130],
  color4: [Math.floor(Math.random()*40)+170, Math.floor(Math.random()*40)+170, Math.floor(Math.random()*40)+170],
  color5: [Math.floor(Math.random()*40)+210, Math.floor(Math.random()*40)+210, Math.floor(Math.random()*40)+210],
  shapearray: [],
  notearray: [[], [], [], [],
             [], [], [], [],
             [], [], [], []],
  playinbackground: false,
  currentpage: 'home'
}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

if (module.hot) {
  module.hot.accept([
    './getters',
    './actions',
    './mutations'
  ], () => {
    store.hotUpdate({
      getters: require('./getters'),
      actions: require('./actions'),
      mutations: require('./mutations')
    })
  })
}

export default store
