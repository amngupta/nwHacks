import React, {Component} from 'react'
import {ModalOpen} from '../Modal'

const styles = {
  table: { display: 'table', width: '100%', borderTop: '1px solid #e1e4e8', paddingLeft: 20},
  row: { display: 'table-row', cursor: 'pointer'},
  titleRow: { width: '90%', wordWrap: 'break-word', display: 'table-cell', paddingTop: 10},
  title: { display: 'table-cell', fontWeight: 'bold'},
  number: { color: '#a3aab1'},
  user: { display: 'table-cell', textAlign: 'center', verticalAlign: 'middle', paddingTop: 15},
  summary: { wordWrap: 'break-word'}
}

export default class SubscriptionItem extends Component {
  constructor(props){
    super(props);
    this.commandString = this.commandString.bind(this);
  }

  commandString(buttonName, domElement, business_id, id) {
    let result = `<script type="text/javascript"> 
                  runKimchi(${buttonName}, ${domElement}, ${business_id}, ${id});
                  </script>`;
    return result;
  }
render(){
      const {subscription} = this.props;
      const handler = (    
      <div style={styles.table}>
      <div style={styles.row}>
        <div style={styles.titleRow}>
          <div style={styles.title}>
            {subscription.name}
          </div>
          <div style={styles.summary}>
            { (subscription.features) != null ? subscription.features : null}
          </div>
        </div>
        <div style={styles.user}>
          <div>{`${subscription.usersNum ? subscription.usersNum : 0} users`}</div>
          <div>${subscription.cost}</div>
        </div>
      </div>
    </div>)
    const embeddedSubscription = this.commandString('"Subscribe"', `<div id="placeholder"></div>` , subscription.business_id, subscription.id)

  return (
    <ModalOpen eventListener={handler} modalBody={embeddedSubscription} />
  )
}

      
// 
/*<script src="...."> </script>
<button>Subscribe</button>
- needs to carry information about the business ID, the subscription ID
- and if the user copy and paste the code into their webpage then they can use
- our scripts with the button*/}

// Uglify our react -> make into a .js file for company to include
// HTML button
