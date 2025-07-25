import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import StudentsDetails from './pages/StudentsDetails'
import StudentEntry from './pages/StudentEntry'
import Niv from './componets/Niv'
import Footer from './componets/Footer'



function App() {
  return (
    <div>
      <Niv/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/studentDetails" element={<StudentsDetails/>} />
        <Route path="/StudentEntry" element={<StudentEntry/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App