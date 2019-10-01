import React, { Component } from 'react'
import NavBar from './NavBar'
import Jumbotron from './Jumbotron'
import InfoCards from './InfoCards'
import Services from './Services'
import ContactUs from './ContactUs'
import './home.scss'
import Partner from './Partner'
import Footer from '../footer/Footer'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <NavBar />
                <Jumbotron />
                <InfoCards />
                <Services />
                <Partner />
                <ContactUs />
                <Footer />
            </div>
        )
    }
}