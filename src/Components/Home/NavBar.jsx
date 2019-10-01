import React from 'react'
import { Navbar } from 'react-bootstrap'
import logo from './school.png'

export default () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
            <img src={logo} alt='brand-logo' className="logo"/>
                <Navbar.Brand href="#home">
                    <h4>SchoolPoint</h4></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
