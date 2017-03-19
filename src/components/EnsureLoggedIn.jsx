import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route, Redirect,
    Link, browserHistory, withRouter
} from 'react-router-dom';
import {ModalOpen} from './Modal'
import { Row, Modal, Button, Col, FormControl, FormGroup } from 'react-bootstrap';


export const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  },
  isAuthenticatedFunc(){
    return this.isAuthenticated;
  }
}

export const EnsureLoggedInContainer = ({ component, ...rest }) =>{
    let renderWithProps = (props)=>{
    if(fakeAuth.isAuthenticated){
        return React.createElement(component, props)
    }
    else{
        return (<Redirect to={{
            pathname: '/login',
            state: { from: props.location }
        }}/>);
    }
    }
    return <Route {...rest} render={props => renderWithProps(props)} />
}


export const AuthButton = withRouter(({ history }) => (
  fakeAuth.isAuthenticated ? (
    <div>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/plans">Plans</Link></li>
    <li><Link to="/subscribers">Subscribers</Link></li>
    <li>
      Welcome! <a onClick={() => {
        fakeAuth.signout(() => history.push('/'))
      }}>Sign out</a>
    
    </li>
    </div>
  ) : (
     <Link className="login" to="/login">Login</Link>
  )
  ))


export class Login extends Component {
  state = {
    redirectToReferrer: false
  }

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true })
    })
  }

  signup = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true })
    })
  }

  register = () => {
    let companyInfo = {
      name: this.name.value,
      loginID: this.loginID.value,
      password: this.password.value
    }
    console.log(companyInfo)
    this.login()
  }

  cancel = () => {
    // close the registration window
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state
    
    const loginForm = (
      <form>
        <FormGroup>
          <FormControl
            type="text"
            placeholder="Login Name"
          />
          <FormControl
            type="password"
            placeholder="password"
          />
        </FormGroup>
      </form>
    )

    const signupForm = (
      <form>
        <FormGroup>
          <FormControl
            type="text"
            placeholder="Company Name"
            inputRef={ref => this.name = ref}
          />
          <FormControl
            type="text"
            placeholder="Login ID"
            inputRef={ref => this.loginID = ref}
          />
          <FormControl
            type="password"
            placeholder="Type a password..."
            inputRef={ref => this.password = ref}
          />
        </FormGroup>
      </form>
    )

    const signUpButton = (
      <Button bsStyle="primary">Sign Up</Button>
    )

    const footer2 = (<div>
        <Button onClick={this.register} bsStyle="success">Register</Button>
        <Button onClick={this.cancel} bsStyle="danger">Cancel</Button></div>)

    const footer = (<div>
          <Button onClick={this.login} bsStyle="success">Log in</Button>
          <ModalOpen eventListener={signUpButton} modalBody={signupForm} modalFooter={footer2}/>
          </div>)
    
    if (redirectToReferrer) {
      return (
        <Redirect to={from}/>
      )
    }

    return (
      <ModalOpen modalBody={loginForm} modalFooter={footer} />
    )
  }
}


export default EnsureLoggedInContainer