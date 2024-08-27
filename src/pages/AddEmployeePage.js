import React from 'react'
import EmployeeForm from '../components/EmployeeForm'
// import { useNavigate } from 'react-router-dom';
import employeeService from '../service/employeeService';


function AddEmployeePage() {

    // const navigate = useNavigate();
    
    const handleAddEmployee = (employee) => {
        employeeService.addEmployee(employee).then((res)=>{
            console.log(res.data);
            window.location.href="/";
        });
    }

    return (
        <div>
            <EmployeeForm onSubmit={handleAddEmployee}/>
        </div>
    )
}

export default AddEmployeePage
