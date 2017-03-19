import React from 'react'
import { Col, Row } from 'react-bootstrap';

var styles = {element: {fontWeight: 'normal'}
			 			 }

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
		/*<Row className="show-grid">
		   <Col xs={2} md={2}>{props.name}</Col>
		   <Col xs={2} md={2}>{props.email}</Col>
		   <Col xs={2} md={2}>{props.tier}</Col>
		   <Col xs={2} md={2}>{props.cost}</Col>
		   <Col xs={2} md={2}>{props.start}</Col>
		   <Col xs={2} md={2}>{props.end}</Col>

		</Row> */
	)

}

export default UserItem