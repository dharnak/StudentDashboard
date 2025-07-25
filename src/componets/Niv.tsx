import React from 'react'
import { Link } from 'react-router-dom'
import './Niv.css'

const Niv = () => {
  return (
    <div>
      <div className='nivP'>
      <div className='nivc1'>Student DashBoard</div>  
      <div className='nivc2'> 
      <Link to="/">Home</Link> 
      <Link to="/StudentEntry">StudentEntry</Link> 
      <Link to="/studentDetails">studentDetails</Link>
      </div> 
      </div>
    </div>
  )
}

export default Niv