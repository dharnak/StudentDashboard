import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Typography,
  Box
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

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

function StudentsDetails() {
  const [students, setStudents] = useState<Student[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = () => {
    axios.get('http://localhost:5000/GETdata')
      .then(res => setStudents(res.data))
      .catch(err => console.error('Error fetching students:', err));
  };

  const handleEdit = (id: string) => {
    navigate(`/edit/${id}`);
  };

  const handleDelete = (id: string) => {
    axios.delete(`http://localhost:5000/DELETE/${id}`)
      .then(() => {
        alert('Deleted successfully');
        fetchStudents(); // refresh the list
      })
      .catch(err => console.error('Error deleting student:', err));
  };

  return (
    <Box p={2}>
      <Typography variant="h4" gutterBottom>
        Students List
      </Typography>

      {/* Responsive Scrollable Box */}
      <Box sx={{ overflowX: 'auto' }}>
        <TableContainer component={Paper}>
          <Table size="small" sx={{ minWidth: 800 }}>
            <TableHead sx={{ backgroundColor: '#022e1f' }}>
              <TableRow>
                <TableCell sx={headStyle}>First Name</TableCell>
                <TableCell sx={headStyle}>Last Name</TableCell>
                <TableCell sx={headStyle}>ID</TableCell>
                <TableCell sx={headStyle}>Class</TableCell>
                <TableCell sx={headStyle}>Bus Number</TableCell>
                <TableCell sx={headStyle}>Fees</TableCell>
                <TableCell sx={headStyle}>Address</TableCell>
                <TableCell sx={headStyle}>Gender</TableCell>
                <TableCell sx={headStyle}>Department</TableCell>
                <TableCell sx={headStyle}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {students.map((student, index) => (
                <TableRow key={index} hover>
                  <TableCell
                    sx={{ ...cellStyle, color: 'blue', cursor: 'pointer', textDecoration: 'underline' }}
                    onClick={() => handleEdit(student.id)}
                  >
                    {student.firstname}
                  </TableCell>
                  <TableCell sx={cellStyle}>{student.lastname}</TableCell>
                  <TableCell sx={cellStyle}>{student.id}</TableCell>
                  <TableCell sx={cellStyle}>{student.class}</TableCell>
                  <TableCell sx={cellStyle}>{student.busnumber}</TableCell>
                  <TableCell sx={cellStyle}>₹{student.fees}</TableCell>
                  <TableCell sx={cellStyle}>{student.address}</TableCell>
                  <TableCell sx={cellStyle}>{student.gender}</TableCell>
                  <TableCell sx={cellStyle}>{student.department}</TableCell>
                  <TableCell sx={cellStyle}>
                    <Button
                      variant="contained"
                      color="error"
                      size="small"
                      onClick={() => handleDelete(student.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}

const headStyle = {
  color: 'white',
  fontWeight: 'bold',
  fontSize: '14px'
};

const cellStyle = {
  padding: '8px',
  fontSize: '13px'
};

export default StudentsDetails;
