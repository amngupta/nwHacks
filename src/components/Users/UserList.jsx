import React from 'react'
import { Col, Grid, Row } from 'react-bootstrap';
import UserItem from './UserItem'

var users = [{name:"seleena", email:"kdsfs", tier:"teir", cost:33, start:2017, end:2019},
			{name:"sam", email:"kdsfs", tier:"teir", cost:33, start:2017, end:2019} ]

var styles = {header: 
				{fontWeight: 'bold'}
			 }

function UserList() {
	return (

	<Grid>
	    <Row className="show-grid" style={styles.header}>
	      <Col xs={2} md={2}>Name</Col>
	      <Col xs={2} md={2}>Email</Col>
	      <Col xs={2} md={2}>Tier</Col>
	      <Col xs={2} md={2}>Cost</Col>
	      <Col xs={2} md={2}>Start Date</Col>
	      <Col xs={2} md={2}>End Date</Col>
	    </Row>

		{users.map( function(user,i){
		  return( 
		  	<UserItem name={user.name} email={user.email} tier={user.tier} cost={user.cost} start={user.start} end={user.end} /> 
		  )
		})}

	 </Grid>

	)
}

export default UserList