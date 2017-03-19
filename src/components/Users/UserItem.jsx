import React from 'react'
import Moment from 'react-moment';

var styles = {element: {fontWeight: 'normal'}}

function UserItem(props){
	return(
		<tr>
			<th style={styles.element}>{props.first_name}</th>
			<th style={styles.element}>{props.last_name}</th>
			<th style={styles.element}>{props.email}</th>
			<th style={styles.element}>{props.name}</th>
			<th style={styles.element}>{props.cost}</th>
			<th style={styles.element}>{props.billing_type}</th>
			<th style={styles.element}><Moment format="YYYY/MM/DD">{props.start_date}</Moment></th>
			<th style={styles.element}><Moment format="YYYY/MM/DD">{props.end_date}</Moment></th>
		</tr>
	)

}

export default UserItem
