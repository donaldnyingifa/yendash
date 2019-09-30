import React, {Component} from 'react'
import { Form, Button } from 'react-bootstrap';

class General extends Component{
    render(){
        return(
            <div className='mt-4 p-5'>
                <Form>
                    <Form.Label>Total No. of students</Form.Label>
                    <Form.Group>
                        <Form.Control type='text' />
                    </Form.Group>

                    <Form.Label>Total No. of Staff</Form.Label>
                    <Form.Group>
                        <Form.Control type='text' />
                    </Form.Group>

                    <Form.Label>School fees Generated for the term/Semester</Form.Label>
                    <Form.Group>
                        <Form.Control type='text' />
                    </Form.Group>

                    <Form.Label>Percentage time Estimate of Fees payment time by parent</Form.Label>
                    <Form.Group>
                        <Form.Control type='text' />
                    </Form.Group>

                    <div className='d-flex justify-content-end'>
                        <Button>Submit</Button>
                    </div>
                </Form>
            </div>
        )
    }
}

export default General;