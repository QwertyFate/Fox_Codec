import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import LandingPage from './pages/landingpage';
import NavBar from './components/navbar';
import ChatPage from './pages/ChatPage';

const App = () => {
  return (
    <BrowserRouter>
  <Routes>
    <Route path='/' element={<NavBar />}>
    <Route index element={<LandingPage />} />
    </Route>
    <Route path='/:slug' element={<ChatPage />}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
