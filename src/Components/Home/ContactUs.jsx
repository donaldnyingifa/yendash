import React from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'

export default () => {
    return (
        <div className='contact p-5'>
            <div className='ml-4'>
            <h2 className='text-white'>Contact Us</h2>
            </div>
            <Row>
                <Col>
                    <Form className='formi'>
                        <Form.Group>
                            <Form.Control type="text" placeholder="Full Name" />
                        </Form.Group>

                        <Form.Group>
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control as="textarea" rows="4" label="Check me out" placeholder='Message' />
                        </Form.Group>
                        <Button variant="primary">
                            Send Message
                        </Button>
                    </Form>
                </Col>
                <Col>
                    <div className="box text-center">
                        <h5>The problems are solved,
                        not by giving new information,
                        but by arranging what we have known
                        since long.</h5>
                        <h6> Ludwig Wittgenstein,
                            Philosophical Investigations.</h6>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
