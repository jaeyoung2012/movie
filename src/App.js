import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Navigation from './components/Navigation';
import Detail from './routes/Detail';

function App() {
  return (
   <BrowserRouter>
    <Navigation></Navigation>
      <Routes>
        <Route path='/' exact  element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/movie-detail' element={<Detail></Detail>}></Route>
      </Routes>
   </BrowserRouter>
  );
}

export default App;