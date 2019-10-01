import React from 'react'
import { Row, Col, Card, CardGroup, Container } from 'react-bootstrap'

export default () => {
    return (
        <div className='contact2 p-2'>
            <div className='services'>
            <h2 className='text-center mt-2'>Problem We Solve</h2>
            <article className='text-center'>We offer credible and viable
school statistics gotten from each individual school</article>
</div>

            <Container className='d-flex justify-content-center pb-5'>
                <Row className='p-4 d-flex align-content-center'>
                    <CardGroup className='p-2'>
                        <Col>
                            <Card border='none' className='card-class mt-2'>
                                <Card.Body>
                                    <h2 className='text-center'>We gather the data</h2>
                                    <article className='text-center'> We gather all available
                                        data made ready by
                            schools</article>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                        <Card className='card-class mt-2' border='none'>
                            <Card.Body>
                            <div className="text">
                                <h2 className='text-center'>Save time and cost</h2>
                                <article className='text-center'>We help you save travel
                                    cost and manage time,
                                    so you will be able
                            to work from anywhere</article>
                            </div>
                            </Card.Body>
                            </Card>
                        </Col>
                    </CardGroup>
                </Row>
            </Container>
        </div >
    )
}
