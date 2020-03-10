import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import DiceClass from './DiceClass'

export default function MainRouter() {

    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/">
                        <DiceClass></DiceClass>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}