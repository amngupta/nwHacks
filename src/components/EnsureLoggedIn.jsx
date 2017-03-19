import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route, Redirect,
    Link, browserHistory, withRouter
} from 'react-router-dom';
import {ModalOpen} from './Modal'
import { Row, Modal, Button, Col, FormControl, FormGroup, Nav, NavItem } from 'react-bootstrap';
var rp = require('request-promise');


export const fakeAuth = {
  isAuthenticated: false,

  setSignIn(t){
    console.log(t, "here");
    this.isAuthenticated = t ;
  },
  setSignOut(cb){
    this.isAuthenticated = false;
    cb();
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
      <Nav bsStyle="pills">
      <NavItem><Link to="/">Home</Link></NavItem>
      <NavItem><Link to="/dashboard">Dashboard</Link></NavItem>
      <NavItem><Link to="/plans">Plans</Link></NavItem>
      <NavItem><Link to="/subscribers">Subscribers</Link></NavItem>
      <NavItem>
        <a onClick={() => {
          fakeAuth.setSignOut(() => history.push('/'))
        }}>Sign out</a>
      </NavItem>
      </Nav>
    </div>
  ) : (
     <Link className="login" to="/login">Login</Link>
  )
  ))


export class Login extends Component {
  state = {
    redirectToReferrer: false
  }

  constructor(props){
    super(props);
    this.authenticate = this.authenticate.bind(this);
    this.state = {
    redirectToReferrer: false
  }
  }

authenticate() {
    let self = this;
    let username =  encodeURIComponent(this.username.value);
    let password =  this.password.value;
    console.log(username, password)
    fetch('http://kimchifriedrice.mybluemix.net/login/'+username+'/'+password, 
            {   method: 'GET',
             })
      .then(re => re.json())
      .then(obj => {
        if(obj.length > 0){
          fakeAuth.setSignIn(true);
          self.setState({ redirectToReferrer: true })
        }
      })
      .catch(err => console.log(err))
  }

  signout(cb) {
    console.log("here");
    fakeAuth.setSignIn(false);
  }

  register = () => {
    let companyInfo = {
      name: this.name.value,
      email: this.loginID.value,
      password: this.password.value
    }
    var data = new FormData();
    data.append( "json", JSON.stringify( companyInfo ) );
    let self = this;
    fetch('http://kimchifriedrice.mybluemix.net/company/create',
            {   method: 'POST',
                mode: 'no-cors',
                 body: data
             }
           )
      .then( (response) => {
          self.username.value = self.loginID.value;
          self.authenticate()
          console.log(response);
          fakeAuth.authenticate(() => {
            self.setState({ redirectToReferrer: true })
          })
        })
      .catch(err=>{
        console.error(err);
      })
    
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/dashboard' } }
    const { redirectToReferrer } = this.state
    
    const loginForm = (
      <form>
        <FormGroup>
          <FormControl
            type="text"
            placeholder="Login Name"
            inputRef={ref => {this.username = ref}}
          />
          <FormControl
            type="password"
            placeholder="password"
            inputRef={ref => {this.password = ref}}
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
            inputRef={ref => this.t = ref}
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
          <Button onClick={this.authenticate} bsStyle="success">Log in</Button>
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