import React, { useEffect, useState } from 'react';
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
  department:string;
}

function StudentsDetails() {
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    axios.get('http://localhost:5000/GETdata')
      .then(res => setStudents(res.data))
      .catch(err => console.error('Error fetching students:', err));
  }, []);

  return (
    <div style={{ padding: '20px'}}>
      <h2>Students List</h2>
      <table style={{ width: '80%', borderCollapse: 'collapse', marginBottom:'140px' }}>
        <thead>
          <tr style={{ backgroundColor: '#022e1f' , color:'white'}}>
            <th style={thStyle}>First Name</th>
            <th style={thStyle}>Last Name</th>
            <th style={thStyle}>ID</th>
            <th style={thStyle}>Class</th>
            <th style={thStyle}>Bus Number</th>
            <th style={thStyle}>Fees</th>
            <th style={thStyle}>Address</th>
            <th style={thStyle}>gender</th>
             <th style={thStyle}>department</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index} style={{ borderBottom: '1px solid #ccc' }}>
              <td style={tdStyle}>{student.firstname}</td>
              <td style={tdStyle}>{student.lastname}</td>
              <td style={tdStyle}>{student.id}</td>
              <td style={tdStyle}>{student.class}</td>
              <td style={tdStyle}>{student.busnumber}</td>
              <td style={tdStyle}>₹{student.fees}</td>
              <td style={tdStyle}>{student.address}</td>
              <td style={tdStyle}>{student.gender}</td>
              <td style={tdStyle}>{student.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const thStyle: React.CSSProperties = {
  border: '1px solid #ddd',
  padding: '8px',
  textAlign: 'left',
  fontWeight: 'bold',
};

const tdStyle: React.CSSProperties = {
  border: '1px solid #ddd',
  padding: '8px',
};

export default StudentsDetails;
