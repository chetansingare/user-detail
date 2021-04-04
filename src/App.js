import React, { useState } from "react";
import Form from "./component/forms";
import Table from "./component/Table";
function App() {
  const [val,valValue] = useState({
    firstName:'',
    lastName:'',
    added:false
  })
  const [update,setUpdate]=useState(false)
  console.log(val);
  return (
    <>
      <Form value={val} valueUpdate={valValue} edited={update} editing={setUpdate}  />
      <Table value={val} valueUpdate={valValue} edited={update} editing={setUpdate} />
    </>
  );
}

export default App;
