import React from 'react'
import CompanySubscriptionList from './CompanySubscriptionList'
import SubscriptionForm from './SubscriptionForm'
var rp = require('request-promise');

class StatefulCompanySubscriptionList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      subscriptions :[{
        id: 1,
        name: 'Hootsuite Professional Plan',
        tier: 'Professional',
        usersNum: 20,
        features: 'Message scheduling Real-time analytics',
        cost: '9.99'
      },{
        id: 2,
        name: 'Hootsuite Basic Plan',
        tier: 'Basic',
        usersNum: 20,
        features: 'Custom analytics reports',
        cost: '9.99'
      }, {
        id: 3,
        name: 'Hootsuite Ultimate Plan',
        tier: 'Very Professional',
        usersNum: 3,
        features: 'Real-time analytics in your smartwatch',
        cost: '29.99'
      }]
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
        let subs = self.state.subscriptions;
        subs.concat(response);
        console.log(response);
       self.setState({subscriptions : subs});
      return 
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
