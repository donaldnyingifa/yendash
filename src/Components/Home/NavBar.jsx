import React from 'react'
import { Navbar } from 'react-bootstrap'
import logo from './school.png'

export default () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
            <img src={logo} alt='brand-logo' className="logo ml-2"/>
                <Navbar.Brand href="#home">
                    <h4>SchoolPoint</h4>
                    </Navbar.Brand>
            </Navbar>
        </div>
    )
}
