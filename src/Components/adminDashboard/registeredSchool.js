import React, { Component } from 'react'
import { Card, Row, Col, Container } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa'

export class registeredSchool extends Component {
    render() {
        return (
            <div>
                <Container className='d-flex justify-content-center'>
                    <Card className='schoolCard'>
                        <Row style={{ height: 110 }} className='text-center'>
                            <Col md={2}><div className="image d-flex justify-content-center"></div></Col>
                            <Col md={4} className='snam'><h3>Biedomo international Academy</h3></Col>
                            <Col md={4} className='address'><p>Berger express way</p></Col>
                            <Col md={2} className="arrow d-flex justify-content-end mt-5"><FaArrowRight /></Col>
                        </Row>
                    </Card>
                </Container>
                <Container className='d-flex justify-content-center'>
                    <Card className='schoolCard'>
                        <Row style={{ height: 110 }} className='text-center'>
                            <Col md={2}><div className="image d-flex justify-content-center"></div></Col>
                            <Col md={4} className='snam'><h3>Biedomo international Academy</h3></Col>
                            <Col md={4} className='address'><p>Berger express way</p></Col>
                            <Col md={2} className="arrow d-flex justify-content-end mt-5"><FaArrowRight /></Col>
                        </Row>
                    </Card>
                </Container>
                <Container className='d-flex justify-content-center'>
                    <Card className='schoolCard'>
                        <Row style={{ height: 110 }} className='text-center'>
                            <Col md={2}><div className="image d-flex justify-content-center"></div></Col>
                            <Col md={4} className='snam'><h3>Biedomo international Academy</h3></Col>
                            <Col md={4} className='address'><p>Berger express way</p></Col>
                            <Col md={2} className="arrow d-flex justify-content-end mt-5"><FaArrowRight /></Col>
                        </Row>
                    </Card>
                </Container>
                <Container className='d-flex justify-content-center'>
                    <Card className='schoolCard'>
                        <Row style={{ height: 110 }} className='text-center'>
                            <Col md={2}><div className="image d-flex justify-content-center"></div></Col>
                            <Col md={4} className='snam'><h3>Biedomo international Academy</h3></Col>
                            <Col md={4} className='address'><p>Berger express way</p></Col>
                            <Col md={2} className="arrow d-flex justify-content-end mt-5"><FaArrowRight /></Col>
                        </Row>
                    </Card>
                </Container>
                <Container className='d-flex justify-content-center'>
                    <Card className='schoolCard'>
                        <Row style={{ height: 110 }} className='text-center'>
                            <Col md={2}><div className="image d-flex justify-content-center"></div></Col>
                            <Col md={4} className='snam'><h3>Biedomo international Academy</h3></Col>
                            <Col md={4} className='address'><p>Berger express way</p></Col>
                            <Col md={2} className="arrow d-flex justify-content-end mt-5"><FaArrowRight /></Col>
                        </Row>
                    </Card>
                </Container>
            </div>

        )
    }
}

export default registeredSchool
