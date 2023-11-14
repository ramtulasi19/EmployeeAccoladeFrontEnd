
import './App.css'
import EmployeeData from "./components/EmployeeData.jsx";
import EmployeeForm from "./components/EmployeeForm";
import React from "react";
import Button from 'react-bootstrap/Button';
function App() {

    const [newEmployee, setNewEmployee] = React.useState(false);

  return (
    <div className="prime">
        {!newEmployee && <EmployeeData/>}
        {!newEmployee && <Button className="btn" onClick={() => setNewEmployee(!newEmployee)}> New Accolade</Button>}
        {newEmployee && <EmployeeForm ></EmployeeForm>}
        {newEmployee && <Button className="back" onClick={() => setNewEmployee(!newEmployee)}>back</Button>}
    </div>
  )
}

export default App
