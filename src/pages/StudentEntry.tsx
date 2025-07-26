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
        <div className='formsub1'>
        <TextField
          id="Firstname"
          label="First Name"
          type="text"
          variant="filled"
        />
        <TextField
          id="secondname"
          label="Last Name"
          type="text"
          variant="filled"
        />
        </div><br/><br/>
        <div className='formsub2'>
         <TextField
          id="class"
          label="Class"
          type="text"
          variant="filled"
        />
        <TextField
          id="Busnumber"
          label="Bus Number"
          type="number"
          variant="filled"
        />
        </div>
        <div className='formsub3'>
        <TextField
          id="Fees"
          label="Fees"
          type="number"
          variant="filled"
        />
        </div>
         <div className='formsub4'>
        <TextField
          id="Address"
          label="Enter a Address"
          type=""
          variant="filled"
          rows={2}
        />
        </div>
        <Button id='sebtu1' variant="contained">SUBMIT</Button>
      </div>

    </div>
  )
}

export default StudentEntry