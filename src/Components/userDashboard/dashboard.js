import React, { Component } from 'react'
import { Container, Card } from 'react-bootstrap';
import General from './General';
import { Link } from 'react-router-dom'
import Student from './Student'
class dashboard extends Component {
    render() {
        return (
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
                    <Link to='/dashboard'><Card>
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
                    <General />
                </div>
            </Container>
        )

    }
}

export default dashboard;