import React from 'react'
import {compose} from 'recompose'



let StudentItem = ({name, age}) => (
  <div>
    <div>
      Name: {name}
    </div>
    <div>
      Age: {age}
    </div>
  </div>
)


export default compose(

)(StudentItem)
