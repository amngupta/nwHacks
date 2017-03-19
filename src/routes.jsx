 import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import Home from './Home';
import Dashboard from "./components/Dashboard"
import UserList from './components/Users'
import CompanySubscriptionList from './components/CompanySubscriptions'
import {EnsureLoggedInContainer, AuthButton, Login} from './components/EnsureLoggedIn'
const styles = {
    menu: { width: '20%', float: 'center'},
    menuUl: { listStyle: 'none'},
    content: { width: '100%'}
}
const Routes = (
    <Router>
    <div>
    <AuthButton/>      
        <div style={styles.content}>
            <Route exact path="/" component={Home} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/login" component={Login}/>
            <EnsureLoggedInContainer path="/plans" component={CompanySubscriptionList} />
            <EnsureLoggedInContainer path="/subscribers" component={UserList} />
        </div>
    </div>
    </Router>
);

export default Routes;