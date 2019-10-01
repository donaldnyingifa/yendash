import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './admin.css'
import PieChart from '../views/charts/pie1';
import PieChart2 from '../views/charts/pie2'


export class Admin extends Component {
    render() {
        return (
            <div>
                <Container className="admin-box">
                    <div className="quote text-center d-flex justify-content-center">
                        <div className="message text-center">
                            <h1>“Investment in Knowledge pays the best interest”</h1>
                            <p> - Benjamin Franklin.</p>
                        </div>
                    </div>

                    <Row style={{ width: 1200, padding: 10 }}>
                        <Col><PieChart2 /></Col>
                        <Col><PieChart /></Col>
                    </Row>
                </Container>
            </div >
        )
    }
}

export default Admin
