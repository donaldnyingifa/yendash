import React, {Component} from 'react'
import { Container } from 'react-bootstrap';

class schoolData extends Component{
    render(){
        return(
            <div>
                <Container>
                    <div className='d-flex justify-content-between'>
                    <h1>School Name</h1>
                    <h4>School Address</h4>
                    </div>
                    <div className='d-flex justify-content-center'>
                        pieChart
                    </div>
                </Container>

            </div>
        )
    }
}

export default schoolData;