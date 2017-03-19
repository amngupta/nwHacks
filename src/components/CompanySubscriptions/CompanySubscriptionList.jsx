import React from 'react'
import Subscription from './SubscriptionItem'

const styles = {
  subscriptionList: { border: '1px solid #e1e4e8', borderTop: 'none'}
}

const CompanySubscriptionList = (props) => {

  const {subscriptions} = props;
  console.log(subscriptions)

   return (
     <div style={styles.subscriptionList}>
       {
         subscriptions.map(function(item, index) {
          return  <Subscription key={item.tier + index} subscription={item} />
        })
       }
    </div>
   )

}

export default CompanySubscriptionList