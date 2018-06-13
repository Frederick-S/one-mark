import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
import User from '../models/user'

Vue.use(Vuex)

export default new Vuex.Store({
    actions: {
        getMe(context) {
            return new Promise((resolve, reject) => {
                axios.get('/api/v1/me').then((response) => {
                    if (response.status === 200) {
                        context.commit('setMe', response.data)

                        resolve()
                    } else {
                        reject()
                    }
                }).catch((error) => {
                    reject(error)
                })
            })
        },
    },
    mutations: {
        setMe(state, me: User) {
            state.me = me
        },
    },
    state: {
        me: new User(),
    },
})
