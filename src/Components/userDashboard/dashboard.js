import React, { Component } from 'react'
import { Container, Card } from 'react-bootstrap';
import General from './General';
import { Link } from 'react-router-dom';
import Student from './Student';
import { auth } from '../../firebase';

export default class dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }
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
                </div>
                <div className='d-flex flex-column'>
                    <General />
                </div>
            </Container>
        )

    }
}