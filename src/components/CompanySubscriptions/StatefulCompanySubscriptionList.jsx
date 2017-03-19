import React from 'react'
import CompanySubscriptionList from './CompanySubscriptionList'
import SubscriptionForm from './SubscriptionForm'
var rp = require('request-promise');

class StatefulCompanySubscriptionList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      subscriptions :[]
    }
    this.addSubscription = this.addSubscription.bind(this)
  }

  componentWillMount(){
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
        let subs= this.state.subscriptions.concat(response)
       this.setState({subscriptions : subs});
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
        <CompanySubscriptionList subscriptions={this.state.subscriptions} />
        <hr />
        <SubscriptionForm addSubscription={this.addSubscription}/>
      </div>
    )
  }
}

export default StatefulCompanySubscriptionList
