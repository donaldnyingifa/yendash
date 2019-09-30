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

    componentDidMount () {
        this.unsubscribe = auth.onAuthStateChanged((user)=> {
            if (!user){
                window.location.href="/signin";
            }else{
                this.setState({ email: user.email });
            }
        });
    }

    componentWillUnmount () {
        this.unsubscribe();
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
                    <h2>Hi {this.state.email}, </h2>
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
                    <General />
                </div>
            </Container>
        )

    }
}