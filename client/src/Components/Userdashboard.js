import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {FaUserCircle} from 'react-icons/fa'


export default class Userdashboard extends Component {
    render() {
        return (
            <div>

                {/* Navbar start */}
                

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand  py-2 ml-5"> 
        <img  style={{ borderRadius:'60%',marginLeft:'10px' ,width:'70px' , height :'60px'}}
         src="https://cdn.pixabay.com/photo/2019/04/18/10/00/truck-4136515__340.png"/> 
         </a>
         <p style={{ align:'center' ,color:'white'}}> SEND<span style={{color:'red'}}>IT</span></p> 
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
           
            <Link to ={"/about"} className="navbar-brand  py-2 mr-5" style={{ marginLeft: '50px' }}> About Us </Link>
            <Link to ={"/contact"} className="navbar-brand  py-2 mr-5" style={{ marginLeft: '20px' }}> Contact Us </Link>
            <Link to ='home' className="navbar-brand  py-2  ml-5 mr-5" 
            style={{ marginLeft: '650px', fontSize:'20px' ,fontFamily:'Monotype Corsiva'}}>
              <FaUserCircle/>   John Doe </Link>

          </div>
        </div>
      </nav>

       <div className='d-flex'>
       <div style={{marginLeft:'0px', height:'500px'}}>
            <img  style={{marginLeft:'0px',  margin: '10px' ,width:'500px', 
            borderRadius:'10px' ,height:'500px'}} 
            src ="https://cdn.pixabay.com/photo/2020/04/12/13/00/discussion-5034153_960_720.png"/>
        </div>
       
          
        <div style={{ marginTop:'150px',marginLeft:'50px', width:'600px'}}>
        <p style={{fontSize:'20px'}}>
            Hello Welcome to SendIT , this is a Logistics Company that deals with sending Parcels from one Place to another in different parts of this country.
            A customer will also be able to track the parcels and get instant notifications about the whereabouts of the parcel.
         </p>

         <button type="button"  style={{  fontFamily:'ubuntu' ,padding: '10px',fontSize:'20px' ,backgroundColor:'blue'}} className="btn btn-outline-light btn-rounded">
        View Orders
        </button>
        
        </div>

       </div>
       

            </div>
        )
    }
}
