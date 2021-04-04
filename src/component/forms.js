import React from "react";
import './Form.css'

const Forms = (props) => {
  function add(event) {
    event.preventDefault()
    props.valueUpdate({ ...props.value, added: true })
  }
  const Change = (event) => {
    props.editing(false)
    props.valueUpdate({
      firstName: '',
      lastName: '',
    })
  }
  return (
    <>
      <div className='form_head'>
        <h1>Enter Details</h1>
        {/* <p>value = {props.value.LastName}</p> */}
      </div>
      <form onSubmit={add}>
        FirstName: <input value={props.value.firstName} onChange={(event) => { props.valueUpdate({ ...props.value, firstName: event.target.value }) }} required />
        LastName: <input value={props.value.lastName} onChange={(event) => { props.valueUpdate({ ...props.value, lastName: event.target.value }) }} required />
        {props.edited &&
          <button onClick={Change}>edit</button>}
        {!props.edited && <button type="submit">Submit</button>}
      </form>
    </>
  )
}
export default Forms;





// ... spread operator(value )