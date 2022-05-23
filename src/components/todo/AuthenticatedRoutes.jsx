import React, {Component} from "react";
import AuthService from "./AuthService";
import {Route, Navigate} from 'react-router-dom';

class AuthenticatedRoute extends Component {
    render() {
        if (AuthService.isUserLoggedIn()) {
            return {...this.props.children}
        } else {
            return <Navigate to="/login" />
        }
    }
}

export default AuthenticatedRoute