import React from 'react'
import { Table } from 'react-bootstrap';
import UserItem from './UserItem'

var users = [{uuid:1, name:"seleena", email:"kdsfs", tier:"teir", cost:33, start:2017, end:2019},
			{uuid:2, name:"sam", email:"kdsfs", tier:"teir", cost:33, start:2017, end:2019} ]


function UserList() {
	const TableInstance = (
		<Table responsive striped bordered condensed hover>
			<thead>
				<tr>
					<th>Name</th>
					<th>Email</th>
					<th>Tier</th>
					<th>Cost</th>
					<th>Start Date</th>
					<th>End Date</th>
				</tr>
			</thead>
			<tbody>
				{users.map (function(user,i) {
					return ( 
						<UserItem key={user.uuid} name={user.name} email={user.email} tier={user.tier}
						cost={user.cost} start={user.start} end={user.end} />
					)
				})}
			</tbody>
		</Table>
	);

	return (
	TableInstance
		

	/*<Grid>
	    <Row className="show-grid" style={styles.header}>
	      <Col xs={2} md={2} style={styles.center}>Name</Col>
	      <Col xs={2} md={2} style={styles.center}>Email</Col>
	      <Col xs={2} md={2} style={styles.center}>Tier</Col>
	      <Col xs={2} md={2} style={styles.center}>Cost</Col>
	      <Col xs={2} md={2} style={styles.center}>Start Date</Col>
	      <Col xs={2} md={2} style={styles.center}>End Date</Col>
	    </Row>
		{users.map( function(user,i){
		  return( 
		  	<UserItem key={user.uuid} name={user.name} email={user.email} tier={user.tier} cost={user.cost} start={user.start} end={user.end} />
		  )
		})}
	 </Grid> */
	

	)
}

export default UserList