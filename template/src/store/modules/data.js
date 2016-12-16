import Api from '../api'
import * as types from '../mutation-types'

// initial state
const state = {
    data: null
}

// getters
const getters = {
    data: state => state.data
}

// actions
const actions = {
    getDetails: ({
        commit
    }, params) => {
        Api.getDetails(params).then(response => {
            console.log(response.data)
            commit(types.SUCCESS, response.data)
        }, err => {
            commit(types.ERROR, response.data)
        })
    }
}


// mutations
const mutations = {
    [types.SUCCESS](state, data) {
        state.data = data
    },
    [types.ERROR](state, data) {
        state.data = null
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}