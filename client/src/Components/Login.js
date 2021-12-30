import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Login extends Component {
    render() {
        return (
            <div>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link to='/' className="navbar-brand  py-2 ml-5"> 
        <img  style={{ borderRadius:'60%' ,width:'60px' , height :'50px'}}
         src="https://cdn.pixabay.com/photo/2018/02/02/11/01/logistics-3125131__340.jpg"/> 
         </Link>
         <p style={{color:'black'}}> SEND<span style={{color:'red'}}>IT</span></p> 
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link to ='/login' className="navbar-brand  py-2  ml-5 mr-5" style={{ marginLeft: '200px', fontSize:'30px' ,fontFamily:'ubuntu'}}>Welcome To SendIT Please Login  </Link>
            
          </div>
        </div>
      </nav>


 <div  style={{ marginTop:'0px'}} className="d-flex ">
    <div style={{marginLeft:'0px', height:'400px'}}>
    <img  style={{marginLeft:'0px',  margin: '10px' ,width:'500px', 
     borderRadius:'10px' ,height:'500px'}} 
    src ="https://cdn.pixabay.com/photo/2018/02/02/11/02/logistics-3125136__340.jpg"/>
</div>



<div>
    <form  style={{width:'600px', fontFamily:'ubuntu' ,height:'500px',padding:'20px' ,marginTop:'100px',margin:'50px'}} >
  <div style={{marginTop:'20px'}} className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
  </div>

  <div className="form-group" style={{marginTop:'20px'}}>
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>

  {/* <div style={{marginTop:'20px'}} className="form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div> */}
<p  style={{marginTop:'20px'}} ><Link to ={"/signup"} > Not a Member?  Signup </Link></p>
  <button type="submit" style={{marginTop:'20px'}} className="btn btn-primary">Login</button>
</form>
</div>
</div>



            </div>
        )
    }
}
