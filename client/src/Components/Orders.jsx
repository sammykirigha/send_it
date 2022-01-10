import React, { Component } from 'react'
import './order.css'
import {Link} from  'react-router-dom'
import{ GoPrimitiveDot} from 'react-icons/go'
export default class Orders extends Component {
    render() {
        return (
            <div>
                <h1 className='headers'> Order History  </h1> 
            <div className='container-div'>
               
            <div className='order'>
            <div>
            <span className='span1'><GoPrimitiveDot/></span>  Dispatched
            <div  className='order1'>

            <div className='order11'>
            <img  className='order-image' src="https://cdn.pixabay.com/photo/2021/09/11/10/27/medal-6615190__340.png" alt="" />

            </div>
            <div className='order12'>
            <p>Order id :00Cdss</p>
            <p>Item: A broom to sweep the city</p>
            </div>
            </div>
            </div>
            </div>


            <div className='order-options'>
                 
                <Link to ={"/oneorder"} className='btn'>View Order</Link>
                <br/> <br/> 
                <button className='btn'>Track Order</button>
            </div>

            </div>





            <h1 className='headers'> Completed Orders </h1> 
            <div className='container-div1'>
               
            <div className='order'>
            <div>
            <span className='span1'><GoPrimitiveDot/></span>  Dispatched
            <div  className='order1'>

            <div className='order11'>
            <img  className='order-image' src="https://cdn.pixabay.com/photo/2021/09/11/10/27/medal-6615190__340.png" alt="" />

            </div>
            <div className='order13'>
            <p>Order id :00Cdss</p>
            <p>Item: A broom to sweep the city</p>
            </div>
            </div>
            </div>
            </div>


            <div className='order-options'>
            <br/> <br/> 
            
            
                <Link to ={"/oneorder"} className='btn'>Check Order</Link>
                <br/> <br/> 
            
            </div>

            </div>



            </div>
        )
    }
}
