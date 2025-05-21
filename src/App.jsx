import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SearchResulPage from './Pages/SearchResulPage'
import CheckOutPage from './Pages/CheckOutPage'
import Navbar from './Component/Navbar'

const App = () => {
  return (
    <>
      <Navbar/>
       <Routes>
        <Route path='/' element={<SearchResulPage/>}/>
        <Route path='/checkout' element={<CheckOutPage/>}/>
        </Routes>
    </>
     
    
  )
}

export default App