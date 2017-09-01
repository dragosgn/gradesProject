import GRADES_FETCH_SUCCESS from '../actions'


export default function(state={}, action){
  switch(action.type) {
    case GRADES_FETCH_SUCCESS:
      return state
    default:
      return state
  }
}
