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
            <Navbar color="dark" dark expand="md">
                <NavbarBrand tag={RRNavLink} to="/">ResInstance</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        {isLoggedIn &&
                            <>
                                <NavItem >
                                    <NavLink tag={RRNavLink} to="/dashboard">Dashboard</NavLink>
                                </NavItem>
                                <NavItem class="navItem">
                                    <NavLink tag={RRNavLink} to="/myresinstances">My ResInstances</NavLink>
                                </NavItem >
                                <NavItem class="navItem">
                                    <NavLink tag={RRNavLink} to="/exercises">Exercises</NavLink>
                                </NavItem>
                                <NavItem class="navItem">
                                    <a aria-current="page" className="nav-link"
                                        style={{ cursor: "pointer" }} onClick={logout}>Logout</a>
                                </NavItem>
                            </>
                        }
                        {!isLoggedIn &&
                            <>
                                <NavItem class="navItem">
                                    <NavLink tag={RRNavLink} to="/login">Login</NavLink>
                                </NavItem>
                                <NavItem class="navItem">
                                    <NavLink tag={RRNavLink} to="/register">Register</NavLink>
                                </NavItem>
                            </>
                        }
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}
