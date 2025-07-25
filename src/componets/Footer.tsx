import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div>
        <h1 className='foot'>© {new Date().getFullYear()} StudentDashboard. All rights reserved.</h1>
    </div>
  )
}

export default Footer