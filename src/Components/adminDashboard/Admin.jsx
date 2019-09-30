import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './admin.css'

export class Admin extends Component {
    render() {
        return (
            <div className={Container}>
                <div className="quote text-center  d-flex justify-content-center">
                    <div className="message text-center">
                        <h1>“Investment in Knowledge pays the best interest”</h1>
                        <p> - Benjamin Franklin.</p>
                    </div>
                </div>

                <Row>
                    <Col></Col>
                    <Col></Col>
                </Row>
            </div>
        )
    }
}

export default Admin
