import React, { Component } from 'react'
import {Link} from  'react-router-dom'
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
            <Link to ='home' className="navbar-brand  py-2  ml-5 mr-5" style={{ marginLeft: '200px', fontSize:'30px' ,fontFamily:'Monotype Corsiva'}}>Welcome To SendIT </Link>
            <Link to ='login' className="navbar-brand  py-2 mr-5" style={{ marginLeft: '450px' }}> Login </Link>
            <Link to ='signup' className="navbar-brand  py-2 mr-5" style={{ marginLeft: '20px' }}> Signup </Link>
            <Link to ='userdashboard' className="navbar-brand  py-2 mr-5" style={{ marginLeft: '20px' }}> UserD </Link>
       

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

<p style={{fontStyle:'bold', marginLeft:'200px', marginTop:'100px',color:'black', fontFamily:'ubuntu', fontSize:'40px'}}> 
Top Management </p>


<div style={{ backgroundColor:'#ffffff' ,opacity:1  ,marginTop:'0px'}} className='d-flex'>
<div style={{marginLeft:'0px', height:'400px'}}>
        <img  style={{marginLeft:'0px',  margin: '10px' ,width:'600px',  borderRadius:'10px' ,height:'500px'}} 
        src ="https://cdn.pixabay.com/photo/2019/12/06/16/03/business-4677639__340.png"/>
        </div>


  <div>
    <div style ={{ fontFamily:'ubuntu',  color:'black' ,width:'600px',  marginLeft:'30px', borderRadius:'10px' }} className='d-flex'>
    <div style={{marginLeft:'0px'}}>
        <img  style={{marginLeft:'0px',width:'150px',  borderRadius:'10px' ,height:'150px', marginTop:'10px'}} 
        src ="https://thejitu.com/wp-content/uploads/2021/10/Samuel-Kirigha.jpg"/>
        </div>
        <div  style={{margin:'0px'}}>  
          <h1 style={{marginLeft:'10px'}}>Dorcis Kirigha</h1>
          <p style={{marginLeft:'10px'}}>Founder and Director of SendIT </p>
          <p style={{marginLeft:'10px'}}>Tel :+254707256013</p>
          <p style={{marginLeft:'10px'}}>dkirigha18@gmail.com</p>
         
</div>
 
    </div>


    {/* next */}

    <div style ={{ fontFamily:'ubuntu' , color:'black',width:'600px',  marginLeft:'30px', borderRadius:'10px' }} className='d-flex'>
    <div style={{marginLeft:'0px'}}>
        <img  style={{marginLeft:'0px',width:'150px',  borderRadius:'10px' ,height:'150px', marginTop:'10px'}}  
        src ="https://thejitu.com/wp-content/uploads/2021/10/Jonathan-Ndombuki.jpg"/>
        </div>
        <div>  
          <h1 style={{marginLeft:'10px' ,fontStyle:'bold',}} >Jonathan Ndambuki </h1>
          <p style={{marginLeft:'10px'}} >Co-Founder and CEO of SendIT </p>
          <p style={{marginLeft:'10px'}} >Tel :+254712584549</p>
          <p style={{marginLeft:'10px'}} >joendambuki16@gmail.com</p>
         
</div>
 
    </div>

{/* next */}

<div style ={{ fontFamily:'ubuntu' , color:'black',width:'600px',  marginLeft:'30px', borderRadius:'10px' }} className='d-flex'>
    <div style={{marginLeft:'0px'}}>
        <img  style={{marginLeft:'0px',width:'150px',  borderRadius:'10px' ,height:'150px', marginTop:'10px'}}  
        src ="https://thejitu.com/wp-content/uploads/2021/09/Martin.jpg"/>
        </div>
        <div>  
          <h1 style={{marginLeft:'10px' ,fontStyle:'bold',}} > Martin Mwangi </h1>
          <p style={{marginLeft:'10px'}} >CHief Technical Officer of SendIT </p>
          <p style={{marginLeft:'10px'}} >Tel :+254700207054</p>
          <p style={{marginLeft:'10px'}} >martin.mwangi@gthejitu.com</p>
         
</div>
 
    </div>

  </div>

</div>



{/* Footer */}
<section className="">
  <footer className="text-center text-white" style={{backgroundColor: '#0a4275'}}>

    <div className="container p-4 pb-0">
      
      <section className="">
        <p className="d-flex justify-content-center align-items-center">
          <span className="me-3">SendIT Logistics </span>
          <button type="button" className="btn btn-outline-light btn-rounded">
          Welcome All!
          </button>
        </p>
      </section>
      
    </div>
    

    
    <div className="text-center p-3" style={{backgroundColor:'black', opacity:0.2}}>
      © 2022 Copyright:
      <a className="text-white" href="https://mdbootstrap.com/">SendIT</a>
    </div>
   
  </footer>
 
</section>

</div>
        )
    }
}
