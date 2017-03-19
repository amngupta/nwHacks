import React,  {Component} from 'react'
import Subscription from './SubscriptionItem'

const styles = {
  subscriptionList: { border: '1px solid #e1e4e8', borderTop: 'none'}
}

export default class CompanySubscriptionList extends Component{

  render(){
    return (
      <div style={styles.subscriptionList}>
        {
          this.props.subscriptions.map(function(item, index) {
            return  <Subscription key={item.name + index} subscription={item} />
          })
        }
      </div>
    )
  }
}

