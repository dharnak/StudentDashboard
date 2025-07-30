import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './studentsEnter.css'
import axios from 'axios';



const StudentEntry = () => {

const [formData,setFormData] = useState({firstname:'',lastname:'',id:'',class:'',busnumber:'',fees:'',address:''});

const handleChange = (e:any) =>{
  setFormData({...formData,[e.target.name]:e.target.value});
  
};




const handleSubmit = async (e:any) =>{
   e.preventDefault();
  try{
       const response = await axios.post('http://localhost:5000/postData', formData);
      alert(response.data);
      setFormData({firstname:'', id: '' ,lastname:'',class:'',busnumber:'',fees:'',address:''});
  }catch(error){
     console.error('Error posting data:', error);
      alert('Error saving data.');
  }
};






  return (
    <div>  
      <div className='StudentEntry-h'>
      Student Entry
      </div>
      <form onSubmit={handleSubmit} className='form'>
        <div className='formsub1'>
        <TextField
        id="Firstname"
         label="first name"
        name="firstname"
         type="text"
         variant="filled"
        value={formData.firstname}
         onChange={handleChange}
        />
        <TextField
          id="secondname"
          label="Last Name"
          type="text"
          variant="filled"
          name='lastname'
          value={formData.lastname}
          onChange={handleChange}
        />
        </div><br/><br/>
        <div className='formsub2'>
         <TextField
          id="class"
          label="Class"
          type="text"
          variant="filled"
          name='class'
          value={formData.class}
          onChange={handleChange}
        />
        <TextField
          id="Busnumber"
          label="Bus Number"
          type="number"
          variant="filled"
          name="busnumber"
          value={formData.busnumber}
          onChange={handleChange}
        />
        </div>
        <div className='formsub3'>
        <TextField
          id="Fees"
          label="Fees"
          type="number"
          variant="filled"
          name="fees"
          value={formData.fees}
          onChange={handleChange}
        />
          <TextField
          id="Busnumber"
          label="ID"
          type="number"
          variant="filled"
          name="id"
          value={formData.id}
          onChange={handleChange}
        />
        </div>
         <div className='formsub4'>
        <TextField
          id="Address"
          label="Enter a Address"
          type=""
          variant="filled"
          rows={2}
          name="address"
          value={formData.address}
          onChange={handleChange}
        />

        </div>
        <Button type='submit' id='sebtu1' variant="contained">SUBMIT</Button>
      </form>

    </div>
  )
}


export default StudentEntry