import * as types from '../mutation-types'

// initial state
const state = {
    nums: 0
}

// getters
const getters = {
    getNumsSelf: state => state.nums
}

// actions
const actions = {
    addNumsSelf: function({
        commit
    }, num) {
        commit(types.ADD, num)
    }
}


// mutations
const mutations = {
    [types.ADD](state, num) {
        state.nums += num
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}