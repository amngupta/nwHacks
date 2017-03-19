import React from 'react'
import {FormControl, FormGroup, ControlLabel} from 'react-bootstrap'

class SubscriptionForm extends React.Component {

  constructor(props) {
    super()
    this.createSubscription = this.createSubscription.bind(this)
  }

  createSubscription(e) {
    e.preventDefault()

    // get values from the form
    let subscription  = {
      tier : this.tier.value,
      features : this.features.value,
      cost: this.cost.value,
      usersNum: 0
    }
    // if we have a subscription, we will add subscription
    if (subscription.tier.length > 0) {
      this.props.addSubscription(subscription)
      this.refs.subscriptionForm.reset()
    }

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
              inputRef={ref => {this.tier = ref}}
            />
            <ControlLabel>Features</ControlLabel>
            <FormControl
              type="text"
              placeholder="awesome features"
              inputRef={ref => {this.features = ref}}
            />
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