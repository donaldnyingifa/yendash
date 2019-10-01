import React from 'react'
import { Row, Col } from 'react-bootstrap'

export default () => {
    return (
        <div className='contact2'>
            <h2 className='text-center servT'>Problem We Solve</h2>
            <h5 className='text-center servT'>We offer credible and viable
school statistics gotten from each individual school</h5>
            <Row>
                <Col>
                    <div className="box2 text-center">
                        <div className="text">
                            <h2>We gather the data</h2>
                            <h6> We gather all available
                                data made ready by
                            schools</h6>
                        </div>

                    </div>
                </Col>
                <Col>
                    <div className="box2 text-center">
                        <div className="text">
                            <h2>Save time and cost</h2>
                            <h6>We help you save travel
                                cost and manage time,
                                so you will be able
                            to work from anywhere</h6>
                        </div>

                    </div>
                </Col>
            </Row>
        </div>
    )
}
