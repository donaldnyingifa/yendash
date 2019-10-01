import React, { Component } from 'react'
import { Card, Row, Col, Container, CardGroup, Spinner } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa'
import {Link} from 'react-router-dom'
import { database } from '../../firebase';

export default class RegisterdSchools extends Component {
    constructor (props) {
        super(props);
        this.state = {
            schools:[],
            loading:true
        }
        this.ref =  database.ref().child('schools');
    }

    componentDidMount () {
       this.getSchools();
    }

    getSchools () {
        this.ref.once('value', snapshots => {
            let schools = [];
            if (snapshots.exists) {
                snapshots.forEach((school) => {
                    schools.push({...school.val(), key: school.key});
                    this.setState({ loading:false, schools });
                    console.log(school.val())
                });
                
            }else{
                this.setState({ loading:false, message: 'No schools' });
            }
        });
    }
    render() {
        const { loading, message, schools } = this.state;
        return (
            <div>
                <Container className='d-flex flex-column'>
                    {loading && <div className='text-center'> <Spinner animation="grow" variant="info" /> </div>}
                    {message && <div className='text-center'><h5 className='text-info'>{message}</h5></div>}
                    {schools.map((school) => 
                         <CardGroup className='d-flex flex-column mb-3'>
                         <Card className='schoolCard'>
                             <Card.Body>
                             <Row className='text-center'>
                                 <Col md={2}>
                                     <div className="d-flex justify-content-center">
                                         <img className="image" src={school.url} alt="school display" />
                                      </div>
                                </Col>
                                 <Col  className='snam'><h4>{school.name}</h4></Col>
                                 <Col className='address'><p> {school.state}, {school.lga}, { school.community} </p></Col>
                                 <Col className="arrow d-flex justify-content-end mt-5">
                                     <Link to={'/schools/' + school.key}><FaArrowRight /></Link></Col>
                             </Row>
                             </Card.Body>
                         </Card>
                         </CardGroup>

                    )}
                   
                </Container>
               
            </div>

        )
    }
}
