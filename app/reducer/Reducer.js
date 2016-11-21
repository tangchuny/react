import { INCREMENT_COUNTER } from '../constants/ActionTypes'

//reducer其实也是个方法而已,参数是state和action,返回值是新的state
export default function counter(state = {count:0}, action) {
 const count = state.count
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return { count: count + 1 }
    default:
      return state
  }
}