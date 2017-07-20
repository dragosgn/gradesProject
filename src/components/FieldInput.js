import React, {Component} from 'react'
import styled from 'styled-components'
import { Field } from 'redux-form'

const Input = styled.input`
  padding: 5px;
  order: 2;
`

const StyledField = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:flex-start;
  align-items: center;
`

const Subject = styled.div`
  padding: 5px;
  order: 1;
`

class FieldInput extends Component {
  render() {
    const {input} = this.props
    return(
      <StyledField>
        <Subject><p>{this.props.subject}</p></Subject>
        <Input
          {...input}
          type="text"
          label="grade"
        />
      </StyledField>
    )
  }
}

export default (props) => {
  return(
    <Field
      {...props}
      name = {props.subject}
      component={FieldInput}
    />
  )
}
