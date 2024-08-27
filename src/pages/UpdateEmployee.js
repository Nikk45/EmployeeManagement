import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import employeeService from '../service/employeeService';
import EmployeeForm from '../components/EmployeeForm';

function UpdateEmployee() {

    const { id } = useParams();
    const [employee, setEmployee] = useState(null);

    useEffect(()=>{
        employeeService.getEmployeeById(id).then((res)=>{
            console.log(res.data);
            setEmployee(res.data);
        })
    },[id])
 
    const handleUpdateEmployee = (updateEmployee) => {
        employeeService.updateEmployee(id, updateEmployee).then((res)=>{
            console.log(res.data);
            window.location.href='/';
        })
    }

    return (
        <div className='update'>
            {
                employee && <EmployeeForm intialData={employee} onSubmit={handleUpdateEmployee} isUpdate={true}/>
            }
        </div>
    )
}

export default UpdateEmployee
