import React, { Component } from 'react';
import { Popover, Modal, Tooltip, Button, OverlayTrigger } from 'react-bootstrap';

export class Button extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		
	}

	// The button when clicked should 



  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
	render() {
		return (
			<button>
		)
	}
}