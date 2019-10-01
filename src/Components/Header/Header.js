import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'
import logo from './school.png'
import { auth } from '../../firebase'

class Header extends Component {
    logout = () => {
        auth.signOut().then(() => {
            window.location.href="/signin";
        });
    }
    componentDidMount () {
        this.unsubscribe = auth.onAuthStateChanged((user)=> {
            if (!user){
                window.location.href="/signin";
            }else{
                this.setState({ email: user.email });
            }
        });
    }

    componentWillUnmount () {
        this.unsubscribe();
    }
    render() {
        return (
            <div>
                <Container className="mt-3">
                    <div className='d-flex justify-content-around'>
                        <div className='d-flex flex-row'>
                            <img src={logo} alt='logo' className='logo'/>
                        <Link to="/dashboard" className='link'>
                             <h1>SchoolPoint</h1>
                        </Link>
                        </div>
                        <Form className='mt-2 form-input' >
                            <Form.Group>
                                <Form.Control type='text' className='form-input' placeholder='Search' />
                            </Form.Group>
                        </Form>

                        <Link to='/schools' className='mt-3 link'>Schools Registered</Link>
                        <Link to='/new/schools' className='mt-3 link'>New Schools</Link>

                        <a href="#" className='mt-3 link' onClick={this.logout}>
                            Log Out
                        </a>
                    </div>
                </Container>
            {this.props.children}
            </div>
        )
    }
}

export default Header;