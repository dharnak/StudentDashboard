import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './studentsEnter.css'


const StudentEntry = () => {
  return (
    <div>  
      <div className='StudentEntry-h'>
      Student Entry
      </div>
      <div className='form'>
        <TextField
          id="Firstname"
          label="First name"
          type="text"
          variant="filled"
        /><br/><br/>
        <TextField
          id="secondname"
          label="second name"
          type="text"
          variant="filled"
        /><br/><br/>
         <TextField
          id="class"
          label="class"
          type="text"
          variant="filled"
        /><br/><br/>
        <TextField
          id="Busnumber"
          label="Bus number"
          type="number"
          variant="filled"
        /><br/><br/>
        <TextField
          id="Fees"
          label="Fees"
          type="number"
          variant="filled"
        /><br/><br/>
        <Button>sum</Button>
      </div>

    </div>
  )
}

export default StudentEntry