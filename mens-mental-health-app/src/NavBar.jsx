

// imports
import React, { useEffect, useState } from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

// states
//

// functions
//

// This NavBar component is used for all routes
const NavBar = () => {

    
    return (
        <>

        {/* Nav bar from React Bootstrap. */}
        {/* Imported Link from react-router-dom at the top of the file, and linked to the routes. 
        (as={Link} to='/') is used because we're using the react-bootstrap navbar component which is Nar.Link. 
        We have 5 regular routes, and two support routes which are in the support dropdown*/}
         <Navbar variant={'dark'} expand="lg" className="nav-bar">
            <Container>
                <Navbar.Brand as={Link} to="/" className="nav-heading">
                    <img
                        alt=""
                        src="/Mens-mental-health-app-logo.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Men's Mental Health App
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="nav-links-container">
                        <Nav.Link as={Link} to="/" className="nav-links">Home</Nav.Link>
                        <Nav.Link as={Link} to="/statistics" className="nav-links">Statistics</Nav.Link>
                        <Nav.Link as={Link} to="/members" className="nav-links invisible">Members</Nav.Link>
                        <Nav.Link as={Link} to="/about" className="nav-links">About</Nav.Link>
                        <Nav.Link as={Link} to="/contact" className="nav-links invisible">Contact</Nav.Link>
                        <NavDropdown title="Support" id="basic-nav-dropdown" className="nav-dropdown-container">
                            <NavDropdown.Item as={Link} to="/generalsupport" className="nav-dropdown-item">
                                Mental health support links
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/crisissupport">
                                Crisis support
                            </NavDropdown.Item>    
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
                    
        </>
    )

}

export default NavBar
