import React from 'react'
import { Button, Jumbotron, Card, Container } from 'react-bootstrap'


export default () => {
    return (
        <div>
            <Jumbotron className='mem' fluid>
                <Container>
                <Card className="info">
                    <Card.Body>
                    <div className="text">
                        <h1 className='title'>SchoolPoint</h1>
                        <p>We are a data mining Partners for Schools </p>
                    </div>
                    </Card.Body>
                </Card>
                </Container>
            </Jumbotron>
        </div >
    )
}
