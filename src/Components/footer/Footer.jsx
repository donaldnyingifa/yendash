import React, { Component } from 'react'
import { Navbar, Container } from 'react-bootstrap'

export class Footer extends Component {
    render() {
        return (
            <div>
                <Navbar expand='lg' variant='dark' bg='dark'>
                    <Container className='d-flex justify-content-center'>
                        <Navbar.Brand>&copy; {new Date().getFullYear()} All Rights Reserved</Navbar.Brand>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default Footer
