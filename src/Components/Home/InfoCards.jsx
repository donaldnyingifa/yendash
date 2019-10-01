import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default () => {
    return (
        <div className='detail'>
            <Container className='text-center mt-5'>
                <Row>
                    <Col md={4}><div className="aboutpic text-center">
                    </div></Col>
                    <Col md={8}><div className="infoCard text-center">
                        <h2 className='tilt'>About</h2>
                        <div className="text-center">
                            <p>We are a data mining company,
                            we deal in collecting and storing
                            data from schools in Nigeria, we collect and manage data from various schools
                    </p>
                        </div>
                    </div></Col>
                </Row>
            </Container>
        </div>
    )
}
