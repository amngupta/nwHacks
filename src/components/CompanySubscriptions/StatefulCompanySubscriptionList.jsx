import React from 'react'
import CompanySubscriptionList from './CompanySubscriptionList'
import SubscriptionForm from './SubscriptionForm'
var rp = require('request-promise');
import { Col } from 'react-bootstrap';

class StatefulCompanySubscriptionList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      subscriptions :[]
    }
    this.addSubscription = this.addSubscription.bind(this)
  }

  componentWillMount(){
    this.fetchSubscriptionList();
  }

  fetchSubscriptionList(){
    let self = this;
    var options = {
      uri: 'http://kimchifriedrice.mybluemix.net/subscriptions/101',
      headers: {
        'User-Agent': 'Request-Promise'
      },
      json: true // Automatically parses the JSON string in the response
    };
    rp(options)
      .then(function (response) {
        //subs.concat(response);
        console.log(response);
        let subs= self.state.subscriptions.concat(response)
        self.setState({subscriptions : subs});
      return subs
    })
    .catch(err=>{
      console.log(err);
    })
  }

  addSubscription(subscription) {
    this.state.subscriptions.push(subscription)
    this.setState({subscriptions:this.state.subscriptions})
  }

  render() {
    return (
      <div>
      <Col md={6}>
          <CompanySubscriptionList subscriptions={this.state.subscriptions} />
        </Col>
        <Col md={6}>
        <SubscriptionForm addSubscription={this.addSubscription} fetchSubscriptionList={()=>this.fetchSubscriptionList()}/>
      </Col>
      </div>
    )
  }
}

export default StatefulCompanySubscriptionList
