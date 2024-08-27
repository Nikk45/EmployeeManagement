import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import employeeService from '../service/employeeService';

function EmployeeList() {

    const [employees, setEmployees] = useState([]);

    useEffect(()=>{
        // axios.get("http://localhost:8080/api/employee").then((res)=>{
        //     console.log(res.data);
        //     setEmployees(res.data);
        // })
        employeeService.getEmployees().then((res)=>{
                console.log(res.data);
                setEmployees(res.data);
            });
    },[])

    const handleDelete = (id) =>{
        employeeService.deleteEmployee(id).then((res)=>{
            console.log(res.status);
            setEmployees(employees.filter(employee => employee.id !== id));
        }).catch(()=>{
            console.log("got error while deleting.");
        })
    }

    return (
        <div className='employee-list'>
            <div className='employees'>List Of Employees</div>
            <table className='employee-data'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Company</th>
                        <th>Location</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map((employee)=>{
                            return <tr key={employee.id} className='data-rows'>
                                    <td>{employee.name}</td>
                                    <td>{employee.role}</td>
                                    <td>{employee.company}</td>
                                    <td>{employee.location}</td>
                                    <td className='actions'>
                                        <button><Link to={`/employee/${employee.id}`}>View</Link></button>
                                        <button><Link to={`/update/${employee.id}`}>Edit</Link></button>
                                        <button onClick={()=>handleDelete(employee.id)}>Delete</button>
                                    </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default EmployeeList
