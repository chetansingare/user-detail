import React, { useEffect, useState } from "react";
import './Table.css'

var UserIndex;

function Table(props) {

  const [table, tableValue] = useState([])

  useEffect(() => {
    if (props.value.added) {
      console.log(props.value.added);
      props.valueUpdate({
        firstName: '',
        lastName: '',
        added: false
      })

      tableValue([...table, props.value])
    }
    if(props.edited){
      table[UserIndex]={firstName:props.value.firstName,lastName:props.value.lastName}
    }
  })
   const remove = (event) =>{
    table.splice(event.target.value,1);
     tableValue([...table])
  }
  const edit = (event) =>{
    UserIndex=event.target.value
    props.valueUpdate({firstName:table[UserIndex].firstName,lastName:table[UserIndex].lastName})
    props.editing(true)
  }

  const table_list = table.map((element, index) => {
    console.log('element ', element)
    return (
      <tr key={index}>
        <td>{index+1}</td>
        <td>
          <p>{element.firstName}</p>
        </td>
        <td>
          <p>{element.lastName}</p>
        </td>
        <td><button value={index} onClick={edit}>edit</button></td>
        <td><button value={index} onClick={remove} >delete</button></td>
      </tr>
    )
  })

  return (
    <>
      <div className='Table_Head'>
        <h1>Table</h1>
      </div>
      <div className='Table_Conatiner'>
        <table>
          <thead>
            <tr className='Table_Main'>
              <th className='Table_Main'>Sr.</th>
              <th className='Table_Main'>First Name</th>
              <th className='Table_Main'>Last Name</th>
              <th className='Table_Main'> Edit</th>
              <th className='Table_Main'>Delete</th>
            </tr>
          </thead>
          <tbody>
            {table_list}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Table;