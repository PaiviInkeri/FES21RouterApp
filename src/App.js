import React from 'react';
import './App.css';
import{ BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Contact from './Contact';
import Home from './Home';
import About from './About';


function App() {
  return (
    <div className="App">
      <h1>Welcome to Router App</h1>
      <br />

    <BrowserRouter>
      <div>
      <Link to="/">Home</Link >{' '}
      <Link to="/about">About</Link>{' '}
      <Link to="/contact">Contact</Link   >{' '}
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route render={() => <h1>Page not found</h1>}/>
      </Routes>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
