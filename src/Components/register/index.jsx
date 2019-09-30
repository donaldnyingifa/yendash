import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './register.scss'

  export default class Register extends React.Component {
      constructor() {
            super();
            this.state = {
                name: '',
                address: '',
                type: '',
                email: '',
                password: ''
            }
        }

        handleChange = (event) => {
            const { name, value} = event.target
            this.setState({[name] : value }, ()=> {
            // console.log(this.state)
            })
            
        }

        handleSubmit = async event => {
            event.preventDefault();
    
            const { email, password } = this.state;
    
    
            try {
                const { user } = await auth.createUserWithEmailAndPassword(
                    email,
                    password
                );
    
                console.log(user)
    
                this.setState({
                    name: '',
                    type: '',
                    email: '',
                    password: '',
                    address: ''
                })
            } catch (error) {
                console.error(error)
            }
        }

        render() {
            const {handleChange} = this;
            return (
                <div className="row" > 
                    <div className="col-sm-6 s2">
    
                    </div>
                    <div className="col-sm-6 ">
                        <div className="s11">
                            <h2>Register</h2>
                            <div className="cd">
                                <TextField
                                    name="name"
                                    onChange={handleChange}
                                    label="School Name"
                                    type="text"
                                    className="input"
                                    autoComplete="current-name"
                                    margin="normal"
                                    variant="outlined"
                                    />
                            </div>
                            <div className="cd">
                                <TextField
                                    name="address"
                                    onChange={handleChange}
                                    label="School Address"
                                    type="text"
                                    className="input"
                                    autoComplete="current-address"
                                    margin="normal"
                                    variant="outlined"
                                    />
                            </div>
    
                            <FormControl variant="outlined" style={{width: '430px', marginLeft: '22%'}} className="">
                                <InputLabel  htmlFor="outlined-age-simple">
                                School Type
                                </InputLabel>
                                <Select
                                value={this.state.type}
                                onChange={handleChange}
                                inputProps={{
                                    name: 'type',
                                    id: 'outlined-age-simple',
                                }}
                                >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={"Public"}>Public</MenuItem>
                                <MenuItem value={"Private"}>Private</MenuItem>
                                </Select>
                            </FormControl>
                           
    
                            <div className="cd">
                                <TextField
                                    name="email"
                                    onChange={handleChange}
                                    label="School Email"
                                    type="email"
                                    className="input"
                                    autoComplete="current-email"
                                    margin="normal"
                                    variant="outlined"
                                    />
                            </div>
                            <div className="cd">
                                <TextField
                                    name="password"
                                    onChange={handleChange}
                                    label="Password"
                                    type="password"
                                    className="input"
                                    autoComplete="current-password"
                                    margin="normal"
                                    variant="outlined"
                                />
                            </div>
    
                            <div>
                            <div className="center">
                                <button onClick={()=> console.log(this.state)} type="button" class="btn btn-primary">  Register </button>
                            </div>
                            
                            </div>
                            
                            <Link className='option' to="/signin">
                                <p>or Signin</p>
                            </Link>
                            
                        </div>
                      
                    
                    </div>
                    
                </div>
            )
        }
        }



