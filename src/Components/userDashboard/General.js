import React, {Component} from 'react'
import { Form } from 'react-bootstrap';

class General extends Component{
    render(){
        return(
            <div className='mt-4'>
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
                </Form>
            </div>
        )
    }
}

export default General;