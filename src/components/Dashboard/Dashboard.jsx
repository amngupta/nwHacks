import React from 'react'


export default class Dashboard extends React.Component {

  render() {
    const {children} = this.props;
    return (
      <div className="home">
         <h1 className="title">Welcome to Kimchi Subscription Manager</h1>
      </div>
    );
  }
}