import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase'
import './register.scss'

  export default class Register extends React.Component {
      constructor() {
            super();
            this.state = {
                name: '',
                email: '',
                password: ''
            }
        }

        handleChange = (event) => {
            const { name, value} = event.target
            this.setState({[name] : value });
            
        }

        handleSubmit = async event => {
            event.preventDefault();
    
            const { email, password } = this.state;
    
            try {
                auth.createUserWithEmailAndPassword(email, password).then(() => {
                    window.location.href="/dashboard";
                }).catch((e) => {
                    console.log('error')
                    this.setState({ error: e.message});
                });

                this.setState({
                    name: '',
                    email: '',
                    password: ''
                })
            } catch (error) {
                this.setState({ error: 'Error registering. Please try again'});
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
                                    label="Name"
                                    type="text"
                                    className="input"
                                    autoComplete="current-name"
                                    margin="normal"
                                    variant="outlined"
                                    />
                            </div>
    
                            <div className="cd">
                                <TextField
                                    name="email"
                                    onChange={handleChange}
                                    label="Email"
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
                            <p  className='text-danger'>{this.state.error}</p>
                            <div>
                            <div className="center">
                                <button onClick={this.handleSubmit} type="button" class="btn btn-primary">  Register </button>
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



