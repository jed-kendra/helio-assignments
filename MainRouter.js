import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './Login'
import Signup from './SignUp'
import AppBar from './AppBar'
import UsersC from './UsersC' 
import UsersF from "./UsersF"

export default function MainRouter() {

    return (
        <div>
            <Router>
                <AppBar></AppBar>
                <Switch>
                    <Route path="/signup">
                        <Signup initialMessage="Startup Message Function"></Signup>
                    </Route>
                    <Route path="/users">
                        <UsersF></UsersF>
                    </Route>
                    <Route path="/users">
                        <UsersC></UsersC>
                    </Route>
                    <Route path="/">
                        <Login initialMessage="Startup Message Class"></Login>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}