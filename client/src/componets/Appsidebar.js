import React, { Component, Fragment } from 'react';
import "../componets/Nav.css";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

import { Link } from "react-router-dom";
import RegesiterModel from "./auth/regesiterModel";
import Login from "./auth/Login";
import { connect } from 'react-redux'
import Proptypes from "prop-types";
import Logout from './auth/Logout';

class AppSidebar extends Component {

    state = {
        isOpen: false
    }

    static propTypes = {
        auth: Proptypes.object.isRequired
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        const { isAuthenticated, user } = this.props.auth;
    
        const authlinks = (
  
            <Fragment>
                <NavItem>
                    <span
                        className="navbar-text ">
                        <strong>
                            {user ? `welcome ${user.name}`:" "}
                        </strong>
                    </span>
                </NavItem>
                <NavItem>
                    <Logout/>
                </NavItem>
                </Fragment>
        )

        
        const guestlinks = (
  
            <Fragment>
                <NavItem>
                    <RegesiterModel />
                </NavItem>
                <NavItem>
                    <Login />
                </NavItem>
                </Fragment>
        )

        return (
            <div>
                <Navbar color="dark" dark expand="sm" className="nav">
                    <Container>
                        <NavbarBrand href="/">TheWellbeingFoundation</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar >
                            <Nav className="ml-auto" navbar>
                               {isAuthenticated ? authlinks : guestlinks}
                            </Nav>
                        </Collapse>
                    </Container>

                </Navbar>
            </div>

        );
    }



}

const mapStateToProps = state => ({
    auth: state.auth
})



export default connect(mapStateToProps, null)( AppSidebar);