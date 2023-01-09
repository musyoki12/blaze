import React from 'react';
import './Components/Main.css';
import Navbar from './Components/Navbar';
import {  BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Donations from "./pages/Donations";
import ContactUs from "./pages/ContactUs";
import Signup from "./pages/Signup";
import Gallery from "./pages/Gallery"
import  Aboutus from "./pages/Aboutus"
import Events from './pages/Events';
import Blog from './pages/Blog'
import Achievements from './pages/Achievements'

function App() {
  return (
    <div className="App">
      <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home/>}></Route>
          <Route path="/contactus" element={<ContactUs/>}></Route>
          <Route path="/gallery" element={<Gallery/>}></Route>
          <Route path="/blog" element={<Blog/>}></Route>
          <Route path="/events" element={<Events/>}></Route>
          <Route path="/donations" element={<Donations/>}></Route>
          <Route path="/aboutus" element={<Aboutus/>}></Route>
          <Route path="/achievements" element={<Achievements/>}></Route>
          <Route path="/signup" element={Signup}></Route>
        </Routes>
      </BrowserRouter>
     
    </>
    </div>
  );
}

export default App;
