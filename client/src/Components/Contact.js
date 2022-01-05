import React, { Component } from 'react'
import {BsPhone} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'

export default class Contact extends Component {
    render() {
        return (
            <div>
            <div style={
                {
                    backgroundImage:"url(https://cdn.pixabay.com/photo/2020/07/23/17/54/mountain-5431950_960_720.png)",
                    height: "96vh",
                    width:"96vw",
                    marginLeft:'25px',
                    marginTop:'10px',
                    backgroundRepeat:"no-repeat",
                    backgroundSize:"cover",
                    display:"flex",
                    flexDirection:"column",
                    alignItems:'center',
                
                    color:'black',
                }}>
                    <h1
                     style={{ fontWeight:'bold', fontSize:'35px'}}> Contact us</h1>
                    <div style={{backgroundColor:'#000000', height: "2px", width: "200px"}}></div>
                <div>
                <h3 style={{marginTop:'150px'}}>Contact Info</h3>  
                <div className='d-flex'>
                    <div style={{width:'400px'}}>
                        <p> This is my contact age and i will use it to contact anybody in the organization in order to get feedback </p>
                    <div style={{ marginTop:'50px'}} className='d-flex'>
                        <div>
                        <div className='d-flex'>
                            <BsPhone/>
                            <p style={{marginLeft:"5px"}}> PHONE </p>
                        </div>
                        +254712584549
                        </div>
                        <div style={{marginLeft:'30px'}}>
                        <div className='d-flex'>
                            <MdEmail/>
                            <p style={{marginLeft:"5px"}}> Email</p>
                        </div>
                        Hello@gmail.com
                        </div>
                    </div>
                    </div>
                    <div style={{marginLeft:'20px'}}>
                    <form>
             <div className='d-flex'> 
                        
                <div className="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name"/>
                </div>

                <div  style={{ marginLeft:'10px'}} className="form-group">
                    <label for="exampleInputEmail1">Email</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email"/>
                </div>

                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Enter Your Feedback</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                </div>
                <button type="button"  style={{  marginTop:'10px',width:'150px',fontFamily:'ubuntu' ,padding: '10px',fontSize:'20px' ,backgroundColor:'blue'}} className="btn btn-outline-light btn-rounded">
                  Send
                </button>
                </form>

                       
                    </div>

                </div>
                </div>
            </div>
            </div>
        )
    }
}
