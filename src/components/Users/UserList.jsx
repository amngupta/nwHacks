import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import UserItem from './UserItem';
import rp from 'request-promise';

export default class UserList extends Component {
  state = {
    users: [],
  }; // Automatically parses the JSON string in the response
  componentWillMount() {
	let self = this;
var options = {
    uri: 'http://kimchifriedrice.mybluemix.net/company/101',
    headers: {
        'User-Agent': 'Request-Promise',
    },
      json: true,
};

rp(options)
    .then(function (response) {
        console.log(response);
		self.setState({users : response});
  })
  .catch(err=>{
	  console.log(err);
      });
  }

  render() {
    const TableInstance = (
      <Table responsive striped bordered condensed hover>
        <thead>
          <tr>
			<th>First Name</th>
			<th>Last Name</th>
			<th>Email</th>
			<th>Tier</th>
			<th>Cost</th>
			<th>Billing Type</th>
			<th>Start Date</th>
			<th>End Date</th>
          </tr>
        </thead>
        <tbody>
          {this.state.users.map(function(user, i) {
            return (
              <UserItem
				key={user.uuid}
				first_name={user.first_name}
				last_name={user.last_name}
				email={user.email}
				name={user.name}
				cost={'$' + user.cost}
				billing_type={user.billing_type}
				start_date={user.start_date}
				end_date={user.end_date}
              />
            );
          })}
        </tbody>
      </Table>
    );

    return TableInstance;
  }
}
