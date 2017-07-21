export const GRADES_SUBMIT = 'GRADES_SUBMIT'
export const GRADES_FETCH_SUCCESS = 'GRADES_FETCH_SUCCESS'

export function gradesSubmit(){
  return{
    type: GRADES_SUBMIT,
    payload: ""
  }
}

export function itemsIsLoading(){
  return{
    type: 'ITEMS_IS_LOADING',
    isLoading: bool
  }
}

export function itemsFetchDataSucces(){
  cosnole.log("data fetched and passing to reducer")
  return{
    type: GRADES_FETCH_SUCCESS,
    payload: items
  }
}

export function gradesFetch() {
  console.log("action dispatched")
  let url = '/api/grades'
  return(dispatch) => {
    fetch(url, {
      method: 'GET'
    })
    .then((response) => {
      if(!response.ok) {
        console.log(response)
        throw Error(response.statusText)
      }
      dispatch(itemsIsLoading(false))
      return(response)
      })
    .then((response) => response.json())
    .then((items) => dispatch(itemsFetchDataSucces(items)))
    .catch(() => dispatch(itemsHasErrored(true)))
  }
}
