import Vue from "vue";
import Vuex from "vuex";
import * as data from "../assets/csvjson.json";
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex);
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: {
    data63: null,
    dataFr: null,
    dataCentre: null
  },
  mutations: {
    SET_DATA_63(state, data) {
      state.data63 = data;
    },
    SET_DATA_FR(state, data) {
      state.dataFr = data;
    },
    SET_DATA_CENTRE(state, data) {
      state.dataCentre = data;
    }
  },
  actions: {
    loadData63({commit}) {
      axios.get('https://coronavirusapi-france.now.sh/LiveDataByDepartement?Departement=Puy-de-Dôme')
      .then(response => response.data)
      .then(data => commit('SET_DATA_63', data.LiveDataByDepartement[0]));
    },
    loadDataFr({commit}) {
      axios.get('https://coronavirusapi-france.now.sh/FranceLiveGlobalData')
      .then(response => response.data)
      .then(data => commit('SET_DATA_FR', data.FranceGlobalLiveData[0]));
    },
    loadDataCentre({commit}, centre) {
      
      const centreData = data.filter((data) => data.gid === parseInt(centre.centre));
      commit('SET_DATA_CENTRE', centreData[0]);
    }
  },
  modules: {},
  getters: {
    puyDeDomeCenter: () => {
      const puyDeDomeCenter = data.filter((center) => Math.floor(center.com_cp/1000) === 63);
      return puyDeDomeCenter;
    }
  }
});
