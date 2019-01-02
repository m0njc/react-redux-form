import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Col, Row } from 'react-bootstrap';


const Form = props => {
  const { handleSubmit, pristine, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <Row>
        <label>Your Name : </label>
        <div>
          <Field
            name="yourName"
            component="input"
            type="text"
            placeholder="Enter your name"
          />
        </div>
      </Row>
      <Row>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
      </Row>
    </form>
  )
}

export default reduxForm({
  form: 'main' // a unique identifier for this form
})(Form)
