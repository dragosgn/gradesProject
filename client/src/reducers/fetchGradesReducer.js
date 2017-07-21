import GRADES_FETCH_SUCCESS from '../actions'


export default function(state, action){
  switch(action.type) {
    case GRADES_FETCH_SUCCESS:
      console.log(action.payload)
      return state
  }
}
