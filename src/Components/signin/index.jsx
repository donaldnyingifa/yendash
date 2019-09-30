import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom'
import { auth } from '../../firebase'
import './signin.scss'

  export default class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    handleChange = (event) => {
        const { name, value} = event.target
        this.setState({[name] : value }, ()=> {
            console.log(this.state)
        })
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email:'', password: ''});
        } catch (error) {
            console.log(error);
        }
        console.log('hi')
    }

      render () {
        return (
            <div className="row" > 
                <div className="col-sm-6 ">
                    <div className="s1">
                        <h2>Log In</h2>
                        <div className="cd">
                            <TextField
                                label="Email"
                                name="email"
                                type="email"
                                onChange={this.handleChange}
                                className="input"
                                autoComplete="current-email"
                                margin="normal"
                                variant="outlined"
                                />
                        </div>
                        <div className="cd">
                            <TextField
                                name="password"
                                label="Password"
                                onChange={this.handleChange}
                                type="password"
                                className="input"
                                autoComplete="current-password"
                                margin="normal"
                                variant="outlined"
                            />
                        </div>

                        <div>
                        <div className="center">
                            <button onClick={this.handleSubmit} type="button" class="btn btn-primary">  Log In</button>
                        </div>
                        
                        </div>
                        
                        <Link className='option' to="/register">
                             <p>or Register</p>
                        </Link>
                        
                    </div>
                  
                
                </div>
                <div className="col-sm-6 s2">

                </div>
            </div>
        )
      }
        }



