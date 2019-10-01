import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './admin.css'
import PieChart from '../views/charts/pie1';
import ColumnChart from '../views/charts/ColumnChart'
import { database } from '../../firebase';


export default class Admin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            students: 0,
            teachers: 0,
            males: 0,
            females: 0,
            cs_labs: 0,
            sc_labs: 0,
            schools: 0
        }
        this.ref = database.ref().child('schools');
    }
    componentDidMount() {
        this.getStats();
    }

    getStats() {
        let males = 0;
        let females = 0;
        let teachers = 0;
        let students = 0;
        let cs_labs = 0;
        let sc_labs = 0;
        let schools = 0;

        this.ref.once('value', snapshots => {
            snapshots.forEach((school) => {
                males += parseInt(school.val().male);
                females += parseInt(school.val().female);
                teachers += parseInt(school.val().teachers);
                students += parseInt(school.val().students);
                cs_labs += school.val().cs_lab ? 1 : 0;
                sc_labs += school.val().sc_lab ? 1 : 0;
                schools++;
            });
            this.setState({
                males,
                females,
                teachers,
                cs_labs,
                sc_labs,
                schools,
                students
            })
        });
    }
    render() {
        const { females, males, students, teachers, schools, sc_labs, cs_labs } = this.state;
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
                        <Col>
                            <PieChart
                                title="Gender Distribution"
                                xValue={males}
                                xLabel={"Males"}
                                yValue={females}
                                yLabel={"Females"} />
                        </Col>

                        <Col>
                            <PieChart
                                title="Teachers/Students Distribution"
                                xValue={teachers}
                                xLabel={"Teachers"}
                                yValue={students}
                                yLabel={"Students"} />
                        </Col>

                    </Row>
                    <div className='text-center'> <h3>Facilities</h3></div>
                    <Row style={{ width: 1200, padding: 10 }}>
                        <Col>
                            <PieChart
                                title="Computer Labs vs Schools"
                                xValue={cs_labs}
                                xLabel={"Computer Labs"}
                                yValue={schools}
                                yLabel={"Schools"} />
                        </Col>

                        <Col>
                            <PieChart
                                title="Science Labs vs Schools"
                                xValue={sc_labs}
                                xLabel={"Science Labs"}
                                yValue={schools}
                                yLabel={"Schools"} />
                        </Col>

                    </Row>
                    <ColumnChart />
                </Container>
            </div >
        )
    }
}
