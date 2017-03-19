import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route, Redirect,
    Link, browserHistory, withRouter
} from 'react-router-dom';
import {ModalOpen} from './Modal'
import { Row, Modal, Button, Col, FormControl, FormGroup } from 'react-bootstrap';
import {Chart} from 'react-d3-basic'

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
    <li>
      Welcome! <a onClick={() => {
        fakeAuth.signout(() => history.push('/'))
      }}>Sign out</a>
    </li>
  ) : (
     <li><Link to="/login">Login</Link></li>
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

    const footer = (<div>
          <Button onClick={this.login} bsStyle="success">Log in</Button>
          <Button onClick={this.signup} bsStyle="primary">Sign Up</Button>
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


{/*------------------------------------------*/}
export default EnsureLoggedInContainer