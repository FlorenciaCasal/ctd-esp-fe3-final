import React from 'react'
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Contact from './Routes/Contact'
import Detail from './Routes/Detail'
import Favs from './Routes/Detail'
import Home from './Routes/Home'
// import Layout from './Components/Layout';


function App() {
  return (

    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/home' element={<Home />} /> */}
        <Route path='/contact' element={<Contact />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/favs' element={<Favs />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
