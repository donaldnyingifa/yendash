import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';


class Profile extends Component{
    render(){
        return(
            <div>
                <Container className='mt-3'>
                    <Row>
                        <Col md={2}>
                            <div className='user-profile'>
                                <FaUser className='user-profile'/>
                            </div>
                        
                        </Col>
                        <Col>
                        <div className='d-flex flex-column'>
                            <h3>Donald</h3>
                            <Link to=''>Edit Profile</Link>
                        </div>
                        
                        </Col>
                    </Row>
                </Container>

            </div>
        )
    }
}

export default Profile;