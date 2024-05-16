// TO DO: 
// Change app heading font using material UI, add react routing for navbar


// imports
import React, { useEffect, useState } from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

// states
//

// functions
//


const Header = () => {

    
    return (
        <>

         <Navbar variant={'dark'} expand="lg" className="nav-bar">
            <Container>
                <Navbar.Brand href="#home" className="nav-heading">
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
                        <Nav.Link href="#home" className="nav-links">Home</Nav.Link>
                        <Nav.Link href="#statistics" className="nav-links">Statistics</Nav.Link>
                        <Nav.Link href="#members" className="nav-links">Members</Nav.Link>
                        <Nav.Link href="#about" className="nav-links">About</Nav.Link>
                        <Nav.Link href="#contact" className="nav-links">Contact</Nav.Link>
                        <NavDropdown title="Support" id="basic-nav-dropdown" className="nav-dropdown-container">
                            <NavDropdown.Item href="#action/3.1">
                                Mental health support links
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.2">
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

export default Header
