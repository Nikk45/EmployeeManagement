import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import employeeService from '../service/employeeService';

function Employee() {

    const { id } = useParams();
    const [employee, setEmployee] = useState({});

    useEffect(()=>{
        employeeService.getEmployeeById(id).then((res)=>{
            console.log("Employee details fetched.");
            setEmployee(res.data);
        })
    },[id])

    return (
        <div className='card'>
            <div className='employee-detail'>Employee Details</div>
            {
                employee && (
                    <div className='details'>
                        <p><strong>Name : </strong> <span>{employee.name}</span></p>
                        <p><strong>Role : </strong><span>{employee.role}</span></p>
                        <p><strong>Company : </strong><span>{employee.company}</span></p>
                        <p><strong>Location : </strong><span>{employee.location}</span></p>
                    </div>
                )
            }
        </div>
    )
}

export default Employee
