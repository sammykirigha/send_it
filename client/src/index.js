import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import Home from './Components/Home'
import Login from './Components/Login'
import Signup from './Components/Signup';
import About from './/Components/About'
import 'bootstrap/dist/css/bootstrap.min.css';
import Userdashboard from ".//Components/Userdashboard"
import './index'


import { BrowserRouter,Routes,Route } from "react-router-dom";
import AdminDashboard from './Components/AdminDashboard';
import Contact from './Components/Contact'
import Orders from './Components/Orders';
import Order from './Components/Order';
ReactDOM.render(

<BrowserRouter>
<Routes>
  <Route path="/" element={<App />}>
    <Route index element={Home}/>
  </Route>
  <Route path='signup' element={<Signup/>}/>
  <Route path='login' element= {<Login/> }/>
  <Route path='admin' element= {<AdminDashboard /> }/>
  <Route path='contact' element= {<Contact /> }/>
  <Route path ='about' element={<About/>}/>
  <Route path ='order' element={<Orders/>}/>
  <Route path='oneorder' element={<Order/>}/>
  <Route path='userdashboard' element= {<Userdashboard /> }/>
</Routes>
</BrowserRouter>
 ,
  document.getElementById('root')
);
