import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import image from './about.jpg'

export default () => {
    return (
        <div>
            <Container className='mt-5 pb-5'>
                <Row>
                    <Col>
                    <div className='d-flex flex-wrap'>
                    <img src={image} alt='about' className='about-image'/>
                    </div></Col>
                    <Col><div className="infoCard text-center">
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
