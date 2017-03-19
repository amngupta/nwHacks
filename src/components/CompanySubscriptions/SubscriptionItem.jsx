import React from 'react'

const styles = {
  table: { display: 'table', width: '100%', borderTop: '1px solid #e1e4e8', paddingLeft: 20},
  row: { display: 'table-row', cursor: 'pointer'},
  titleRow: { width: '90%', wordWrap: 'break-word', display: 'table-cell', paddingTop: 10},
  title: { display: 'table-cell', fontWeight: 'bold'},
  number: { color: '#a3aab1'},
  user: { display: 'table-cell', textAlign: 'center', verticalAlign: 'middle', paddingTop: 15},
  summary: { wordWrap: 'break-word'}
}

const SubscriptionItem = (props) => {
  const {subscription} = props

  return (
    <div style={styles.table}>
      <div style={styles.row}>
        <div style={styles.titleRow}>
          <div style={styles.title}>
            {subscription.tier}
          </div>
          <div style={styles.summary}>
            {subscription.features}
          </div>
        </div>
        <div style={styles.user}>
          <div>{`${subscription.usersNum} users`}</div>
          <div>${subscription.cost}</div>
        </div>
      </div>
    </div>
  )
}

export default SubscriptionItem