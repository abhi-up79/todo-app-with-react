import React, { Component } from 'react'

class TodoApp extends Component {
    render() {
        return (
            <div className='TodoApp'>
                <LoginComponent/>
            </div>
        )
    }
}

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
            this.setState({showSuccessMessage:true})
            this.setState({hasLoginFailed:false})
        }
        else {
            this.setState({showSuccessMessage:false})
            this.setState({hasLoginFailed:true})
        }
    }

    render() {
        return (
            <>
            <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>
            <ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/>
            User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
            Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
            <button onClick={this.loginClicked}>Login</button>
            </>
            
        )
    }
}

function ShowInvalidCredentials(props) {
    if (props.hasLoginFailed) {
        return <div>Invalid Credentials</div>
    } 
    return null
}

function ShowLoginSuccessMessage(props) {
    if (props.showSuccessMessage) {
        return <div>Login Successful</div> 
    }
    return null
}

export default TodoApp