import React, { Component } from 'react';
import './App.css';
import { Col, Grid, Row } from 'react-bootstrap';


var styles = {picture:
               {width:'100%'}
               }

export default class Home extends Component {

  render() {
    const {children} = this.props;
    return (
      <div className="App">
         <h1 className="title">Welcome to Kimchi Subscription Manager</h1>
      </div>
    );
  }
}

Home.propTypes = {
  children: React.PropTypes.node,
}

Home.contextTypes = {
  router: React.PropTypes.object.isRequired
};