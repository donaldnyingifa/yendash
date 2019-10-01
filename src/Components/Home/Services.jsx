import React from 'react'
import { Row, Col, Card, CardGroup, Container } from 'react-bootstrap'

export default () => {
    return (
        <div className='contact2 p-4'>
            <div className='services d-flex flex-column'>
                <h2 className='text-center mt-2'>Problem We Solve</h2>
                <article className='text-center'>We offer credible and viable
school statistics gotten from each individual school</article>
            </div>

            <Container className='mt-5'>
                <Row className='text-white'>
                    <Col sm={4}>
                        <h2 className='text-center'>We gather the data</h2>
                        <article className='text-center'> We gather all available
                            data made ready by
                            schools</article>

                    </Col>
                    <Col>

                        <div className="text">
                            <h2 className='text-center'>Save time and cost</h2>
                            <article className='text-center'>We help you save travel
                                cost and manage time,<br/>
                                so you will be able
                            to work from anywhere</article>
                        </div>

                    </Col>

                </Row>
            </Container>
        </div >
    )
}
