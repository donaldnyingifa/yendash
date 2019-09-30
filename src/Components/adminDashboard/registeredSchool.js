import React, { Component } from 'react'
import { Card, Row, Col, Container, CardColumns, CardGroup } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa'
import {Link} from 'react-router-dom'

export class registeredSchool extends Component {
    render() {
        return (
            <div>
                <Container className='d-flex flex-column'>
                    <CardGroup className='d-flex flex-column mb-3'>
                    <Card className='schoolCard'>
                        <Card.Body>
                        <Row className='text-center'>
                            <Col md={2}><div className="image d-flex justify-content-center"></div></Col>
                            <Col  className='snam'><h4>Biedomo international Academy</h4></Col>
                            <Col className='address'><p>Berger express way</p></Col>
                            <Col className="arrow d-flex justify-content-end mt-5">
                                <Link to='/schools/data'><FaArrowRight /></Link></Col>
                        </Row>
                        </Card.Body>
                    </Card>

                   
                    </CardGroup>
                </Container>
               
            </div>

        )
    }
}

export default registeredSchool
