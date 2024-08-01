import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import "./assets/font/Montserrat-Bold.ttf";
import "./assets/font/Montserrat-Regular.ttf";
import "./assets/font/Montserrat-SemiBold.ttf";
import './App.css'


function App() {
  return (
    <>      
    <Header />
    <Main />  
    <About />
    <Contact/>
    </>
  )
}

export default App
