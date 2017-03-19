import React from 'react'

var styles = {element: {fontWeight: 'normal'}}

function UserItem(props){
	return(
		<tr>
			<th style={styles.element}>{props.name}</th>
			<th style={styles.element}>{props.email}</th>
			<th style={styles.element}>{props.tier}</th>
			<th style={styles.element}>{props.cost}</th>
			<th style={styles.element}>{props.start}</th>
			<th style={styles.element}>{props.end}</th>
		</tr>
	)

}

export default UserItem