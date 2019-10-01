import React, {Component} from 'react'
import { Form, Button } from 'react-bootstrap';
import { database } from '../../firebase';
import FileReaderInput from 'react-file-reader-input';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

class General extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            state: '',
            lga: '',
            community: '',
            students: '',
            teachers: '',
            fees: '',
            male: '',
            female: '',
            cs_lab: '',
            sc_lab: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleCheck = (e) => {
        this.setState({
            [e.target.name]: e.target.checked
        }, ()=> console.log(this.state));
        
    }

    handleUpload = (e, results) => {
        results.forEach(result => {
          const [e] = result;
          this.setState({
            image: e.target.result
        });
          console.log(this.state);
        });
      }

    handleSubmit = (e) => {
        e.preventDefault();
        const { name, state, lga, community, students, teachers, fees, male,
        female, cs_lab, sc_lab } = this.state;
        const data = {
            name,
            state,
            lga,
            community,students, teachers, fees, male,
            female, cs_lab, sc_lab
        }
        database.ref().child('schools').push(data, (error) => {
            if(!error) {
                alert('Done');
                //Reset form
            }
        })
    }
    render(){
        return(
            <div className='mt-4 p-5'>
                <Form onSubmit={this.handleSubmit}>
                    <h3>General Info</h3>
                    <Form.Label>School Name</Form.Label>
                    <Form.Group>
                        <Form.Control onChange={this.handleChange} name="name" type='text' />
                    </Form.Group>

                    <Form.Label>Image</Form.Label>
                    <Form.Group>
                    <FileReaderInput name="image" as="url" id="my-file-input"
                                    onChange={this.handleUpload}>
                                    
                    <div style={{ cursor: 'pointer', backgroundColor:'#eaeaea', padding:'5px' }}> Select a Image!</div>
                    </FileReaderInput>
                    {
                        this.state.image ?
                        <img src={this.state.image} style={{padding:'10px'}} width="300px" alt="schlimage" /> 
                        : null
                    }
                    </Form.Group>

                    <Form.Label>State</Form.Label>
                    <Form.Group>
                        <FormControl variant="outlined" style={{width:"100%"}}>
                            
                            <Select
                            native
                            onChange={this.handleChange}
                            name="state"
                            >
                            <option value="" />
                            <option value={'Bayelsa'}>Bayelsa</option>
                            <option value={'Port Harcourt'}>Port Harcourt</option>
                            <option value={'Abuja'}>Abuja</option>
                            <option value={'Lagos'}>Lagos</option>
                            </Select>
                        </FormControl>
                    </Form.Group>

                   <Form.Label>Local Government</Form.Label>
                    <Form.Group>
                        <FormControl variant="outlined" style={{width:"100%"}}>
                            
                            <Select
                            native
                            onChange={this.handleChange}
                            name="lga"
                            >
                            <option value="" />
                            <option value={'Brass'}>Brass</option>
                            <option value={'Yenagoa'}>Yenagoa</option>
                            <option value={'Sagbama'}>Sagbama</option>
                            </Select>
                        </FormControl>
                    </Form.Group>

                    <Form.Label>Community</Form.Label>
                    <Form.Group>
                        <Form.Control onChange={this.handleChange} name="community" type='text' />
                    </Form.Group>

                    <h3>Statistical Data</h3>
                    <Form.Label>Total No. of students</Form.Label>
                    <Form.Group>
                        <Form.Control onChange={this.handleChange} name="students" type='text' />
                    </Form.Group>

                    <Form.Label>Total No. of Teachers</Form.Label>
                    <Form.Group>
                        <Form.Control onChange={this.handleChange} name="teachers" type='text' />
                    </Form.Group>

                    <Form.Label>School Fees</Form.Label>
                    <Form.Group>
                        <Form.Control onChange={this.handleChange} name="fees" type='text' />
                    </Form.Group>

                    <Form.Label>No of. Male</Form.Label>
                    <Form.Group>
                        <Form.Control name="male" onChange={this.handleChange} type='text' />
                    </Form.Group>

                    <Form.Label>No of. Female</Form.Label>
                    <Form.Group>
                        <Form.Control name="female" onChange={this.handleChange} type='text' />
                    </Form.Group>

                    <FormControlLabel
                        control={
                        <Checkbox name="sc_lab" onChange={this.handleCheck} />
                        }
                        label="Science Lab"
                    />

                    <FormControlLabel
                        control={
                        <Checkbox name="cs_lab" onChange={this.handleCheck}  />
                        }
                        label="Computer Lab"
                    />
                    
                    <div className='d-flex justify-content-end'>
                        <Button type="submit">Submit</Button>
                    </div>
                </Form>
            </div>
        )
    }
}

export default General;