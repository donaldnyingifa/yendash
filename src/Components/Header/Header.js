import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'
import { FaUserCircle } from 'react-icons/fa'

class Header extends Component {
    render() {
        return (
            <div>
                <Container className='mt-3'>
                    <div className='d-flex justify-content-around'>
                        <h1>Yendash</h1>
                        <Form className='mt-2 form-input' >
                            <Form.Group>
                                <Form.Control type='text' className='form-input'  placeholder='Search' />
                            </Form.Group>
                        </Form>

                        <Link to='/' className='mt-3'>Schools Registered</Link>
                        <Link to='/' className='mt-3'>Schools in Bayelsa</Link>

                        <FaUserCircle className='mt-5' className='user-icon'/>
                    </div>
                </Container>

            </div>
        )
    }
}

export default Header;