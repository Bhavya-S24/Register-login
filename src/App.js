import React from 'react';
import InitialPage from './InitialPage.jsx';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from './WelcomePage.jsx';


function App() {
  return (
    <div className='form'>
      <BrowserRouter>
        <Routes>
          <Route element={<WelcomePage/>} path='/welcome' />
          <Route element={<InitialPage />} path='/' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
