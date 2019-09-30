import React, {Component} from 'react'
import { Form, Button } from 'react-bootstrap';
import { database } from '../../firebase';

class General extends Component{
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const { name, state, lga, community } = this.state;
        const data = {
            name,
            state,
            lga,
            community
        }
        database.ref().child('schools').push(data, (error) => {
            if(!error) {
                alert('Done');
                //Reset form
            }
        })
    }
    render(){
        return(
            <div className='mt-4 p-5'>
                <Form onSubmit={this.handleSubmit}>
                    <h3>General Info</h3>
                    <Form.Label>Name</Form.Label>
                    <Form.Group>
                        <Form.Control onChange={this.handleChange} name="name" type='text' />
                    </Form.Group>

                    <Form.Label>State</Form.Label>
                    <Form.Group>
                        <Form.Control onChange={this.handleChange} name="state" type='text' />
                    </Form.Group>

                    <Form.Label>Local Government</Form.Label>
                    <Form.Group>
                        <Form.Control onChange={this.handleChange} name="lga" type='text' />
                    </Form.Group>

                    <Form.Label>Community</Form.Label>
                    <Form.Group>
                        <Form.Control onChange={this.handleChange} name="community" type='text' />
                    </Form.Group>

                    <h3>Statistical Data</h3>
                    <Form.Label>Total No. of students</Form.Label>
                    <Form.Group>
                        <Form.Control onChange={this.handleChange} name="students" type='text' />
                    </Form.Group>

                    <Form.Label>Total No. of Teachers</Form.Label>
                    <Form.Group>
                        <Form.Control onChange={this.handleChange} name="teachers" type='text' />
                    </Form.Group>

                    <Form.Label>School Fees</Form.Label>
                    <Form.Group>
                        <Form.Control onChange={this.handleChange} name="fees" type='text' />
                    </Form.Group>

                    <Form.Label>No of. Male</Form.Label>
                    <Form.Group>
                        <Form.Control name="male" onChange={this.handleChange} type='text' />
                    </Form.Group>

                    <Form.Label>No of. Female</Form.Label>
                    <Form.Group>
                        <Form.Control name="female" onChange={this.handleChange} type='text' />
                    </Form.Group>

                    <Form.Label>Computer Lab</Form.Label>
                    <Form.Group>
                        <Form.Control name="cs_lab" onChange={this.handleChange} type='text' />
                    </Form.Group>

                    <Form.Label>Science Lab</Form.Label>
                    <Form.Group>
                        <Form.Control name="sc_lab" onChange={this.handleChange} type='text' />
                    </Form.Group>
                    
                    <div className='d-flex justify-content-end'>
                        <Button type="submit">Submit</Button>
                    </div>
                </Form>
            </div>
        )
    }
}

export default General;