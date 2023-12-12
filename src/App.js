import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';
import Home from './pages/master/Home';
import About from './pages/master/About';
import Login from './pages/account/Login';
import Contacts from './pages/master/Contacts';
import MasterLayout from './containers/MasterLayout';
import DashboardLayout from './containers/DashboardLayout';
import Dashboard from './pages/dashboard/Dashboard';
import Projects from './pages/dashboard/Projects';
import AccountLayout from './containers/AccountLayout';
import Register from './pages/account/Register';

function App() {
  return (
  <BrowserRouter>
      <Routes>
        <Route path="/cdf/" element={<MasterLayout/>}>
          <Route path="/cdf/" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contacts/>}/>
          <Route path="more" element={<About/>}/>
        </Route>
        <Route path="/admin/" element={<DashboardLayout/>}>
          <Route path="/admin/" element={<Dashboard/>}/>
          <Route path="projects" element={<Projects/>}/>
        </Route>
        <Route path="/" element={<AccountLayout/>}>
          <Route path="" element={<Login/>}/>
          <Route path="register" element={<Register/>}/>
        </Route>
        
      </Routes>
  
  </BrowserRouter>
  );
}

export default App;
