import React from 'react'
import Subscription from './SubscriptionItem'

const subscriptions = [{
  id: 1,
  name: 'Hootsuite',
  tier: 'Professional',
  usersNum: 20,
  features: 'Message scheduling Real-time analytics',
  cost: '$9.99'
},{
  id: 2,
  name: 'Hootsuite',
  tier: 'Basic',
  usersNum: 20,
  features: 'Custom analytics reports',
  cost: '$9.99'
}];

const styles = {
  subscriptionList: { border: '1px solid #e1e4e8', borderTop: 'none'}
}

class CompanySubscriptionList extends React.Component {

  render(){
   return (
     <div style={styles.subscriptionList}>
       {
         subscriptions.map(function(item) {
          return  <Subscription key={item.id} subscription={item} />
        })
       }
    </div>
   )
  }
}

export default CompanySubscriptionList;