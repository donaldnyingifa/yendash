import React from 'react'
import { Form, Button, Container } from 'react-bootstrap'

export default () => {
    return (
        <div>
            <Container className='p-5'>
                <h1 className='text-center servP'>PARTNER WITH US</h1>
                <h5 className='text-center servP'>Become a partner with us and gain access to thousands
                of school data</h5>


                <Form className='mt-4'>
                    <Form.Group>
                        <Form.Control type="text" placeholder="Company Name" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                    <Button variant="primary" type="submit" block>
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    )
}
