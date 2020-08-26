import Vue from 'vue';
import Vuex from 'vuex';
import { Alerts } from '@/entry';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        working: false,
        alerts: new Alerts(),
        authenticated: false
    },
    getters: {
    },
    mutations: {
        START_WORKING: state => state.working = true,
        STOP_WORKING: state => state.working = false,
        ADD_ALERT: (state, alert) => {
            state.alerts.add(alert);
        },
        REMOVE_ALERT: (state, alert) => {
            state.alerts.remove(alert);
        }
    },
    actions: {
        addAlert({ commit }, alert) {
            commit('ADD_ALERT', alert)
        }
    }
})
