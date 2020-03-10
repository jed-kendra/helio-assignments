import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './Login'
import Signup from './SignUp'

export default function MainRouter() {

    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/signup">
                        <Signup initialMessage="Signup"></Signup>
                    </Route>
                    <Route path="/">
                        <Login initialMessage="Enter your Login Information"></Login>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}