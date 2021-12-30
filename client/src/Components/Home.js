import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
<div>


<nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand  py-2 ml-5"> 
        <img  style={{ borderRadius:'60%' ,width:'60px' , height :'50px'}}
         src="https://cdn.pixabay.com/photo/2018/02/02/11/01/logistics-3125131__340.jpg"/> 
         </a>
         <p style={{color:'black'}}> SEND<span style={{color:'red'}}>IT</span></p> 
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a className="navbar-brand  py-2  ml-5 mr-5" style={{ marginLeft: '200px', fontSize:'30px' ,fontFamily:'Monotype Corsiva'}}>Welcome To SendIT </a>
            <a className="navbar-brand  py-2 mr-5" style={{ marginLeft: '450px' }}> Login </a>
            <a className="navbar-brand  py-2 mr-5" style={{ marginLeft: '20px' }}> Signup </a>
            {/* <a className="navbar-brand  py-2 mr-5" style={{ marginLeft: '20px' }}> Add Task</a> */}

          </div>
        </div>
      </nav>



      <div  style={{ marginTop:'0px'}} className="d-flex ">
        <div style={{marginLeft:'0px', height:'400px'}}>
        <img  style={{marginLeft:'0px',  margin: '10px' ,width:'500px',  borderRadius:'10px' ,height:'450px'}} 
        src ="https://cdn.pixabay.com/photo/2018/02/02/11/02/logistics-3125136__340.jpg"/>
        </div>
        <div  style={{ padding:'20px' ,fontFamily:'ubuntu' ,margin: '80px' ,width:'500px',height:'300px'}}  >
          <p style={{textAlign: ' justify' ,fontSize:'25px'}}>Hello Welcome to SendIT , this is a Logistics Company that deals with sending Parcels from one Place to another in different parts of this country.
            A customer will also be able to track the parcels and get instant notifications about the whereabouts of the parcel.

          </p>
        </div>
      </div>

 <footer className='text-center text-white' style={{ marginTop: '20px' ,backgroundColor: '#f1f1f1'}}>

  <div className="container pt-4">
 
    <section className="mb-4">
    
      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-facebook-f"></i
      ></a>

  
      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-twitter"></i
      ></a>

    
      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-google"></i
      ></a>

      
      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-instagram"></i
      ></a>

    
      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-linkedin"></i
      ></a>
     
      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-github"></i
      ></a>
    
</section>
</div>
</footer>
</div>
        )
    }
}
