import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../components/header/Header';
import Navbar from '../components/navbar/Navbar';
import About from '../pages/About/About';
import Details from '../pages/details/Details';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import React, { useState } from 'react';
import PrivateRouter from './PrivateRouter'


const AppRouter = () => {
  const [isAuth, setIsAuth] = useState(true)
  return (
    <Router>
      <Navbar isAuth={isAuth} setIsAuth={setIsAuth} />
      <Routes>
        {/* Public routes */}
        <Route path='' element={<Home />} />
        <Route path='/login' element={<Login isAuth={isAuth} setIsAuth={setIsAuth} />} />


        {/* Private Routes / protected Routes */}
        <Route path='/' element={<PrivateRouter isAuth={isAuth} />}>
          <Route path='/about' element={<About />} />
        </Route>


        <Route path='/' element={<PrivateRouter isAuth={isAuth} />}>
          <Route path='/details' element={<Details />} />
        </Route>

      </Routes>
    </Router>
  )
}

export default AppRouter