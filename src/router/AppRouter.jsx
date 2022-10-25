import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../components/header/Header';
import Navbar from '../components/navbar/Navbar';
import About from '../pages/About/About';
import Details from '../pages/details/Details';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';




const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/details' element={<Details/>} />
      </Routes>
    </Router>
  )
}

export default AppRouter