import React, { Component } from 'react';
import './App.css';
import { Col, Grid, Row } from 'react-bootstrap';
import { ModalTest } from './components/Modal';

export default class AppContainer extends Component {

  render() {
    return (
      <Grid fluid={true}>
        <Row>
          <div className="App">
            <Col xs={12}>
              <ModalTest />
            </Col>
          </div>
        </Row>
      </Grid>
    );
  }
}

AppContainer.propTypes = {
  children: React.PropTypes.node,
}

AppContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
};