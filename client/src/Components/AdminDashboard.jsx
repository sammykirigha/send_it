import React from 'react'
import './admin.css'
import {BsFillPersonFill} from 'react-icons/bs'
import { Dropdown } from 'react-bootstrap';

const AdminDashboard = () => {
    return (
        <div className='container'>
            <div className='child'>
                <div className='image-container'>
                    <img className='image' src='https://cdn-icons.flaticon.com/png/512/3251/premium/3251952.png?token=exp=1641214129~hmac=aa5aa88fe7bcb5287998153a3d7abec3' alt='logo image' />
                    <span className='logo'>dashboard</span>
                </div>
                <div className='menu-list'>
                    <ul className='items'>
                        <li className='item'>dashboard</li>
                        <li className='item2'>
                            <span>reports</span>
                            <Dropdown className='dropdown'>
                                <Dropdown.Toggle variant="" id="dropdown-basic">
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                        <li className='item'>orders</li>
                        <li className='item'>settings</li>
                        <li className='item2'>
                            accounts
                            <Dropdown className='dropdown'>
                                <Dropdown.Toggle variant="" id="dropdown-basic">
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                    </ul>
                </div>
                <div className='logout'>
                    <BsFillPersonFill style={{width: '30px', height: '30px'}} />
                    <span>Logout</span>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard
