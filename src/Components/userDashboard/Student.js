import React, { Component } from 'react'
import { Form, Container, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'

class General extends Component {
    render() {
        return (
            <div className='mt-4'>
                <Container className='user-box'>
                    <div className='user-jumbo d-flex justify-content-center'>
                        <div className='user-text'>
                            <h1 className='text-center'>“Knowledge is power, information is liberating.
Education is the premise of progess in every socitey in every family”</h1>
                        </div>

                    </div>
                    <div className='d-flex flex-column mt-3'>
                        <h2>Hi, Mr. Donald</h2>
                        <h5>What do you want to do today?</h5>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <Link to='/'><Card>
                            <Card.Body>
                                General Information
                        </Card.Body>
                        </Card></Link>

                        <Link to='/student'><Card>
                            <Card.Body>
                                Student details
                        </Card.Body>
                        </Card></Link>
                    </div>
                    <div className='d-flex flex-column'>
                        <div className='mt-4 p-5'>
                            <Form>
                                <Form.Label>Student Name</Form.Label>
                                <Form.Group>
                                    <Form.Control type='text' />
                                </Form.Group>

                                <Form.Label>Parent Name</Form.Label>
                                <Form.Group>
                                    <Form.Control type='text' />
                                </Form.Group>

                                <Form.Label>Current Class</Form.Label>
                                <Form.Group>
                                    <Form.Control type='text' />
                                </Form.Group>
                                <Form.Label>Year Admitted</Form.Label>
                                <Form.Group>
                                    <Form.Control type='text' />
                                </Form.Group>
                                <Form.Label>Performance Review</Form.Label>
                                <Form.Group>
                                    <Form.Control as='textarea' rows='4' />
                                </Form.Group>
                                <Form.Label>Special Skills</Form.Label>
                                <Form.Group>
                                    <Form.Control type='text' />
                                </Form.Group>
                            </Form>
                        </div>
                    </div>
                </Container>

            </div>
        )
    }
}

export default General;