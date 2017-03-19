import React from 'react'
import { Col, Row } from 'react-bootstrap';



function UserItem(props){
	return(
		<Row className="show-grid">
		   <Col xs={2} md={2}>{props.name}</Col>
		   <Col xs={2} md={2}>{props.email}</Col>
		   <Col xs={2} md={2}>{props.tier}</Col>
		   <Col xs={2} md={2}>{props.cost}</Col>
		   <Col xs={2} md={2}>{props.start}</Col>
		   <Col xs={2} md={2}>{props.end}</Col>

		</Row>
	)

}

export default UserItem