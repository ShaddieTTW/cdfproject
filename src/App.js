import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './containers/NavBar';
import About from './pages/About';
import Login from './pages/Login';
import Contacts from './pages/Contacts';

function App() {
  return (
  <BrowserRouter>
  <header className=''>
    <NavBar />
  </header>
    <main>
      <Routes>
        <Route index element={<Home />}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contacts/>}/>
        <Route path="more" element={<About/>}/>
        <Route path="login" element={<Login/>}/>
      </Routes>
    </main>
  </BrowserRouter>
  );
}

export default App;
