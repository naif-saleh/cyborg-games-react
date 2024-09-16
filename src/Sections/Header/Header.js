import React, { Component } from "react";
import './Header.css'
import logo from '../../assets/images/logo.png'
import NavItem , {NavItemDropdown } from "./NavItem/NavItem";

class Header extends Component{
    render() {
        return (
            
            <div className="navbar navbar-expand-md bg-dark text-white fixed-top cyporg-navbar">
                <div className="container">
                    <a href="#" className="navbar-brand">
                        <img src={logo} alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="mainmenu">
                        <ul className="navbar-nav ms-auto">
                            <NavItem><a href="#hero" className="nav-link">Home</a></NavItem>
                            <NavItem><a href="#features" className="nav-link">Bowser</a></NavItem>
                            <NavItemDropdown>
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Detailes</a>
                                <ul className="dropdown-menu">
                                    <li><a href="#learn" className="dropdown-item">Learn Bootstrap</a></li>
                                    <li><a href="#next" className="dropdown-item">Where to go next</a></li>
                                </ul>
                            </NavItemDropdown>
                            <NavItem><a href="#faq" className="nav-link">Streams</a></NavItem>
                            <NavItem><a href="./index-ar.html" className="nav-link">Profile</a></NavItem>
                        </ul>
                    </div>
                </div>
                
           </div>

        
    
        );
    }
}
export default Header