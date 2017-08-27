import GRADES_SUBMIT from '../actions'


export default function(state = {}, action) {
  switch(action.type) {
    case GRADES_SUBMIT:
      return state
    default:
      return state
  }
}
