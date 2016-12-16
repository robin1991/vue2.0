// public actions
import * as types from './mutation-types'

export const addNum = ({
	commit
}, num) => {
	commit(types.ADD, num)
}