// TO DO: 
// App-heading, app logo, navbar
// Create basic routing for app through react-router-dom


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
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#statistics">Statistics</Nav.Link>
                        <Nav.Link href="#members">Members</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                        <NavDropdown title="Support" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">
                            Mental health support links</NavDropdown.Item>
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
