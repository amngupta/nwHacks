import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link, NavLink
} from 'react-router-dom'
import AppContainer from './App';
import BoardContainer from './Dashboard'
// import Courses from './components/Courses';
// import Rooms from './components/Rooms';
// import createBrowserHistory from 'history/createBrowserHistory'
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const Routes = (
    <Router>
        <div>
            <Navbar collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/dashboard">
                            Hot Pot Samuri 
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1}><NavLink to=""></NavLink></NavItem>
                        <NavDropdown eventKey={3} title="" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}></MenuItem>
                            <MenuItem eventKey={3.2}></MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1}>Kimchi Fried Rice</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Route exact path="/" component={AppContainer} />
            <Route exact path="/dashboard" component={BoardContainer} />
        </div>
    </Router>
);

export default Routes;