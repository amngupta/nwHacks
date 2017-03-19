import React from 'react'
import {FormControl, FormGroup, ControlLabel} from 'react-bootstrap'
var rp = require('request-promise');

class SubscriptionForm extends React.Component {

  createSubscription(e) {
    e.preventDefault();
    let self = this;
    // get values from the form
    let subscription ={
      name: this.name.value,
      cost: this.cost.value,
      businessId: 101,
      billingType: this.billingType.value
    }
    fetch('http://kimchifriedrice.mybluemix.net/subscriptionType/create',
      {   method: 'POST',
      body: JSON.stringify(subscription)
      }
    )
    .then(res=>res.json())
    .then(obj=>{
        console.log(obj);
        this.props.fetchSubscriptionList();
    })
    .catch(err=>{
      console.log(err);
    })
    // if we have a subscription, we will add subscription
  }

  render() {

    return (
      <div>
        <form ref='subscriptionForm' onSubmit={(e)=>this.createSubscription(e)}>
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
