import React, {Component} from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { database } from '../../firebase';
import PieChart from '../views/charts/pie1'

export default class SchoolData extends Component{
    constructor(props){
        super(props);
            this.state ={
                school:{},
                loading:true
        }
        this.ref = database.ref().child('schools');
    }

    componentDidMount () {
        this.getSchoolInfo();
    }

    getSchoolInfo () {
        const id = this.props.match.params.id;
        this.ref.child(id).once('value', snapshot => {
            if (snapshot.exists) {
                this.setState({ school:snapshot.val(), loading:false });
            }
        });
    }
    render(){
        const { school, loading } = this.state;
        return(
            <div>
                <Container>
                    <div className='text-center justify-content-center'>
                    <h1>{school.name}</h1>
                    <h5> {school.state}, {school.lga}, { school.community} </h5>
                    </div>
                    {!loading && <div className='d-flex justify-content-center'>
                   
                     <Col><PieChart xValue={school.male} yValue={school.female} xLabel={'Male'} yLabel={'Female'} title="Gender Distribution" /></Col>
                     <Col style={{ width: 1200, padding: 10 }}><PieChart xValue={school.students} yValue={school.teachers} xLabel={'Students'} yLabel={'Teachers'} title="Teacher/Student Ratio" /></Col>
            
                 </div>}
                    
                </Container>

            </div>
        )
    }
}
