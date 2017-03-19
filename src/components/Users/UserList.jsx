import React , {Component} from 'react';
import { Table } from 'react-bootstrap';
import UserItem from './UserItem';
var rp = require('request-promise');


export default class UserList extends Component{

state = {
	users: []
}
componentWillMount(){
	let self = this;
	var options = {
		uri: 'http://kimchifriedrice.mybluemix.net/company/101',
		headers: {
			'User-Agent': 'Request-Promise'
		},
		json: true // Automatically parses the JSON string in the response
	};

	rp(options)
		.then(function (response) {
		self.setState({users : response});
		return 
	})
	.catch(err=>{
		console.log(err);
	})
}

render()
{	const TableInstance = (
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
				{this.state.users.map (function(user,i) {
					return ( 
						<UserItem key={user.uuid} name={user.first_name} email={user.email} tier={user.billing_type}
						cost={user.cost} start={user.start_date} end={user.end_date} />
					)
				})}
			</tbody>
		</Table>
	);

	return (TableInstance)}

}