import React, { useState } from 'react';
import { NavLink as RRNavLink } from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import { logout } from "../modules/authManager";
import './Header.css'

export default function Header({ isLoggedIn }) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar className="navbarMain" style={{ backgroundColor: 'white', boxShadow: '5px .25px 5px #3F3F3F' }} dark expand="md">
                <NavbarBrand className="navItem" style={{ color: 'black', fontWeight: 'bold' }} tag={RRNavLink} to="/dashboard">ResInstance</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        {isLoggedIn &&
                            <>
                                <NavItem className="navItem">
                                    <NavLink className="navigationLink" activeStyle={{ color: '#fd5401', border: 'solid #fd5401' }} style={{ color: '#999', fontWeight: 'bold', border: 'solid white' }} tag={RRNavLink} to="/dashboard">Dashboard</NavLink>
                                </NavItem>
                                <NavItem className="navItem" >
                                    <NavLink className="navigationLink" activeStyle={{ color: '#fd5401', border: 'solid #fd5401' }} style={{ color: '#999', fontWeight: 'bold', border: 'solid white' }} tag={RRNavLink} to="/myresinstances">My ResInstances</NavLink>
                                </NavItem >
                                <NavItem className="navItem">
                                    <NavLink className="navigationLink" tag={RRNavLink} activeStyle={{ color: '#fd5401', border: 'solid #fd5401' }} style={{ color: '#999', fontWeight: 'bold', border: 'solid white' }} to="/exercises">Exercises</NavLink>
                                </NavItem>
                                <NavItem className="navItem logoutNav">
                                    <a aria-current="page" className="nav-link"
                                        activeStyle={{ color: '#fd5401' }} style={{ cursor: "pointer", color: '#999', fontWeight: 'bold' }} onClick={logout}>Logout</a>
                                </NavItem>
                            </>
                        }
                        {!isLoggedIn &&
                            <>
                                <NavItem class="navItem">
                                    <NavLink style={{ color: '#999', fontWeight: 'bold' }} tag={RRNavLink} to="/login">Login</NavLink>
                                </NavItem>
                                <NavItem class="navItem">
                                    <NavLink style={{ color: '#999', fontWeight: 'bold' }} tag={RRNavLink} to="/register">Register</NavLink>
                                </NavItem>
                            </>
                        }
                    </Nav>
                </Collapse>
            </Navbar>
        </div >
    );
}
