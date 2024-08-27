import React, { useEffect, useState } from 'react'

function EmployeeForm({intialData, onSubmit, isUpdate}) {

    const [employee, setEmployee] = useState(intialData || {name:'', role:'', company:'', location:''});

    useEffect(()=>{
        console.log("inital data priend ");
    })

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setEmployee({...employee, [name]:value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(employee.name, employee.role, employee.company, employee.location);
        onSubmit(employee);
    }


    return (
    <div className='card'>
        <div className='update-employee'>{isUpdate ? "Update Employee" : "Add Employee"}</div>
        <form onSubmit={handleSubmit} className='employee-form'>
            <div className='fields'>
                <label>Name:</label>
                <input type='text' name='name' value={employee.name} onChange={handleChange} placeholder='Enter Employee Name' required/>
            </div>
            <div className='fields'>
                <label>Role:</label>
                <input type='text' name='role' value={employee.role} onChange={handleChange} placeholder='Enter Role' required/>
            </div>
            <div className='fields'>
                <label>Company:</label>
                <input type='text' name='company' value={employee.company} onChange={handleChange} placeholder='Enter Company Name' required/>
            </div>
            <div className='fields'>
                <label>Location:</label>
                <input type='text' name='location' value={employee.location} onChange={handleChange} placeholder='Enter Location' required/>
            </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
    )
}

export default EmployeeForm
