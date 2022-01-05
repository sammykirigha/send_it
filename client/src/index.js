import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import Home from './Components/Home'
import Login from './Components/Login'
import Signup from './Components/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index'


import { BrowserRouter,Routes,Route } from "react-router-dom";
import AdminDashboard from './Components/AdminDashboard';
ReactDOM.render(

<BrowserRouter>
<Routes>
  <Route path="/" element={<App />}>
    <Route index element={Home}/>
  </Route>
  <Route path='signup' element={<Signup/>}/>
  <Route path='login' element= {<Login/> }/>
  <Route path='admin' element= {<AdminDashboard /> }/>
</Routes>
</BrowserRouter>
 ,
  document.getElementById('root')
);
