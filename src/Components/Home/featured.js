import React, {Component} from 'react'
 import { Col, Row, Container, Button } from "react-bootstrap"
 import image from './kdu.jpg'

class Feature extends Component{
    render(){
        return(
            <div>
                <div className=''>
                    <h2 className='text-center'>Featured School</h2>
                </div>
                <Container className='pb-5'>
                <Row>
                    <Col>
                    <img src={image} className='featured-image' alt='featured'/>
                    </Col>
                    <Col>
                    <h2>
                    KOLADAISI UNIVERSITY, IBADAN
                    </h2>
                    <article className='pb-3'>
                    KolaDaisi University (KDU) after approval by the Federal Executive Council was licensed by the National Universities Commission to operate as a Private University in November, 2016. The University, founded by Chief Kola Daisi, CON, Bashorun of Ibadan has as its Proprietor, the Kola Daisi Foundation (KDF).
                    </article>

                    <Button>Click for more</Button>

                    </Col>
                </Row>
                </Container>
            </div>
        )
    }
}

export default Feature;