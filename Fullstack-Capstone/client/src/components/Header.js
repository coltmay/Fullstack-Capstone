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
                <NavbarBrand className="navItem" style={{ color: 'black', fontWeight: 'bold' }} tag={RRNavLink} to="/">ResInstance</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        {isLoggedIn &&
                            <>
                                <NavItem className="navItem">
                                    <NavLink style={{ color: '#999', fontWeight: 'bold' }} tag={RRNavLink} to="/dashboard">Dashboard</NavLink>
                                </NavItem>
                                <NavItem className="navItem" >
                                    <NavLink style={{ color: '#999', fontWeight: 'bold' }} tag={RRNavLink} to="/myresinstances">My ResInstances</NavLink>
                                </NavItem >
                                <NavItem className="navItem">
                                    <NavLink tag={RRNavLink} style={{ color: '#999', fontWeight: 'bold' }} to="/exercises">Exercises</NavLink>
                                </NavItem>
                                <NavItem className="navItem logoutNav">
                                    <a aria-current="page" className="nav-link"
                                        style={{ cursor: "pointer", color: '#999', fontWeight: 'bold' }} onClick={logout}>Logout</a>
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
