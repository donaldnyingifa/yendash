import React from 'react'
import { Form, Button } from 'react-bootstrap'

export default () => {
    return (
        <div>
            <div className='contact3'>
                <h1 className='text-center servP'>PARTNER WITH US</h1>
                <h5 className='text-center servP'>Become a partner with us and gain access to thousands
                of school data</h5>


                <Form className='mt-4'>
                    <Form.Group className='form-input'>
                        <Form.Control type="text" placeholder="Company Name" />
                    </Form.Group>

                    <Form.Group className='form-input'>
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                    <Button className='form-input' variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )
}
