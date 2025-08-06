import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TextField, Button, Paper, Typography, Box } from '@mui/material';
import axios from 'axios';

interface Student {
  firstname: string;
  lastname: string;
  id: string;
  class: string;
  busnumber: string;
  fees: string;
  address: string;
  gender: string;
  department: string;
}

function EditStudent() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [student, setStudent] = useState<Student | null>(null);

  // Fetch student data on load
  useEffect(() => {
    axios
      .get(`http://localhost:5000/student/${id}`)
      .then((res) => setStudent(res.data))
      .catch((err) => console.error('Error fetching student:', err));
  }, [id]);

  // Handle field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!student) return;
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  // Submit updated data
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/student/${id}`, student)
      .then(() => {
        alert('Student updated successfully!');
        navigate('/');
      })
      .catch((err) => console.error('Update failed:', err));
  };

  if (!student) return <p>Loading...</p>;

  return (
    <Paper sx={{ padding: 4, maxWidth: 600, margin: '40px auto' }}>
      <Typography variant="h5" gutterBottom>
        Edit Student: {student.firstname}
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box display="flex" flexDirection="column" gap={2}>
          <TextField name="firstname" label="First Name" value={student.firstname} onChange={handleChange} fullWidth />
          <TextField name="lastname" label="Last Name" value={student.lastname} onChange={handleChange} fullWidth />
          <TextField name="class" label="Class" value={student.class} onChange={handleChange} fullWidth />
          <TextField name="busnumber" label="Bus Number" value={student.busnumber} onChange={handleChange} fullWidth />
          <TextField name="fees" label="Fees" value={student.fees} onChange={handleChange} fullWidth />
          <TextField name="address" label="Address" value={student.address} onChange={handleChange} fullWidth />
          <TextField name="gender" label="Gender" value={student.gender} onChange={handleChange} fullWidth />
          <TextField name="department" label="Department" value={student.department} onChange={handleChange} fullWidth />
          <Button type="submit" variant="contained" color="primary">
            Update Student
          </Button>
        </Box>
      </form>
    </Paper>
  );
}

export default EditStudent;
