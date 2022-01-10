import React, { Component } from 'react'
import pattern from '../images/pattern-bg.svg'
import image1 from '../images/image-john.jpg'
import pattern1 from '../images/pattern-quotes.svg'
import './about.css'

export default class About extends Component {
    render() {
        return (
            <div>
               
               <h1 className='headers'> About SENDIT</h1>

                <div className='container_div'>

                    <div className='one'>
                       
                        <img src={pattern1} alt="My Happy SVG" />
                        <p className='one-text'>
                        "Hello Welcome to SendIT , 
                        this is a Logistics Company that deals with sending Parcels 
                        from one Place to another in different parts of this country.
                         A customer will also be able to track the parcels and get instant notifications 
                         about the whereabouts of the parcel." 
                         <br/>  
                         <span className='spans'>  Jonathan Ndambuki ~ Co_ founder</span>
                         
                         </p>

                         <p className='one-text'>
                         <br/>  
                 " For nearly 20 years, SendIT has been a leader in x-ray research and development, turning imaging theories into robust and reliable security systems. With over 30,000 scanners deployed in more than 150 countries, we make it our mission to protect the world’s critical infrastructure, 
                 transportation networks and commerce.We partner with customers to build 
                 integrated solutions tailored to their security needs, designing powerful networks that allow coordinated inspections, the exchange of key decision data, and rapid throughput. Guided by our core values of integrity, loyalty, respect, and teamwork, we deliver solutions for today’s threats 
with advanced technology that anticipates tomorrow’s needs."
<br/>
<span className='spans'>  Dorcis Kirigha ~ CEO</span>  </p>
             </div>
                    
                 
                    <div className='two'>
                        <img className='two-img'  src={pattern}alt="My Happy SVG" />
                        <img className="two-img2"  src ="https://cdn.pixabay.com/photo/2019/12/06/16/03/business-4677639__340.png" alt='None' />
                   

                    </div>


                </div>
                </div>
        )
    }
}
