import React from 'react'

var styles = {element: {fontWeight: 'normal'}}

function UserItem(props){
	return(
		<tr>
			<th style={styles.element}>{props.first_name}</th>
			<th style={styles.element}>{props.email}</th>
			<th style={styles.element}>{props.billing_type}</th>
			<th style={styles.element}>{props.cost}</th>
			<th style={styles.element}>{props.start_date}</th>
			<th style={styles.element}>{props.end_date}</th>
		</tr>
	)

}

export default UserItem