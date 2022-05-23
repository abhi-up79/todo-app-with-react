import React, {Component} from "react";
import AuthService from "./AuthService";

class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "in28minutes",
            password: "",
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]
                :event.target.value})
    }

    loginClicked(event) {
        if (this.state.username === 'in28minutes' && this.state.password==='dummy') {
            AuthService.registerSuccessfulLogin(this.state.username, this.state.password)
            this.props.navigate(`/welcome/${this.state.username}`)
            // this.setState({showSuccessMessage:true})
            // this.setState({hasLoginFailed:false})
        }
        else {
            this.setState({showSuccessMessage:false})
            this.setState({hasLoginFailed:true})
        }
    }

    render() {
        return (
            <>
            <h1>Login</h1>
            <div className='container'>
                {this.state.hasLoginFailed && <div className='alert alert-warning'>Invalid Credentials</div>}
                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                <button className='btn btn-success' onClick={this.loginClicked}>Login</button>
            </div>
            </>
            
        )
    }
}

export default LoginComponent