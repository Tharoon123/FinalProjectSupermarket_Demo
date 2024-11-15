import React from 'react'
import "./Navbar.css";
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdKeyboardArrowDown } from 'react-icons/md';



export default function Navbar() {
    return (
        <div>
            <div className='navbar-container'>

                <div className='navbar-sub-container'>

                    <div className='burger-menu'>
                        <GiHamburgerMenu className='burger-menu-icon' />
                        <p>Short by Department</p>
                    </div>

                    <div className='navbar'>
                        <ul className='anim-nav'>
                            <li><a href="#!" style={{
                                color: 'white'
                            }} >Home</a></li>
                            <li><a href="#!" style={{
                                color: 'white'
                            }} ><span className='flex items-center'>Shop </span> </a></li>
                            <li><a href="#!" style={{
                                color: 'white'
                            }} ><span className='flex items-center'>Page </span> </a></li>
                            <li><a href="#!"style={{
                                color: 'white'
                            }} >Blog</a></li>
                            <li><a href="#!"style={{
                                color: 'white'
                            }} >Conatct</a></li>
                        </ul>
                    </div>
                </div>

            </div>

        </div>
    )
}
