import React from 'react'
import {FormControl, FormGroup, ControlLabel} from 'react-bootstrap'
var rp = require('request-promise');

class SubscriptionForm extends React.Component {

  constructor(props) {
    super()
    this.createSubscription = this.createSubscription.bind(this)
  }

  createSubscription(e) {
    e.preventDefault()
    let self = this;
    // get values from the form
    // let subscription  = {
    //   name : this.name.value,
    //   features : this.features.value,
    //   cost: this.cost.value,
    //   usersNum: 0
    // }

    fetch('http://kimchifriedrice.mybluemix.net/subscriptionType/create',
            {   method: 'POST',
                mode: 'no-cors',
                headers: new Headers(
                   {"Content-Type": "application/json",
                    "Accept":"application/json"}
                ),
                 body: JSON.stringify({
                  name: this.name.value,
                  cost: this.cost.value,
                  businessId: 101,
                  billingType: this.billingType.value
                })
             }
           )
      .then(function (response) {
        console.log(response);
          // if (subscription.name.length > 0) {
          //   self.props.addSubscription(subscription)
          //   self.refs.subscriptionForm.reset()
          // }
      return 
    })
    .catch(err=>{
      console.log(err);
    })
    // if we have a subscription, we will add subscription
  }

  render() {

    return (
      <div>
        <form ref='subscriptionForm' onSubmit={this.createSubscription}>
          <FormGroup>
            <ControlLabel>Tier</ControlLabel>
            <FormControl
              type="text"
              placeholder="basic"
              inputRef={ref => {this.name = ref}}
            />
            <ControlLabel>Billing Type</ControlLabel>
            <FormControl componentClass="select" placeholder="select" inputRef={ref=> {this.billingType = ref}}>
                <option value="weeks">weekly</option>
                <option value="months">monthly</option>
                <option value="years">yearly</option>
            </FormControl>


            {/*<FormControl
            }  type="text"
              placeholder="awesome features"
              inputRef={ref => {this.features = ref}}
            />*/}

            <ControlLabel>Cost</ControlLabel>
            <FormControl
              type="text"
              placeholder="20.00"
              inputRef={ref => {this.cost = ref}}
            />
          </FormGroup>
          <button type="submit" className="btn btn-primary">Add</button>
        </form>
      </div>
    )
  }
}

export default SubscriptionForm