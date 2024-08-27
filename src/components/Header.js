import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className='header'>
        <nav>
            <div className='Title'>Employee Management System</div>
            <ul id='tagslist'>
                <li className='tags'><Link to="/">Home</Link></li>
                <li className='tags'><Link to="/add">Add Employee</Link></li>
            </ul>
        </nav>
    </div>
  )
}
