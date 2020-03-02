//class component
import React from 'react'
import {Link} from 'react-router-dom'

export default class Login extends React.Component {
    
    constructor (props) {
        super(props)
        this.state = {
            name: props.initialMessage,
            fName: "",
            lName: ""

        }
        this.onClickHandler = this.onClickHandler.bind(this)
        this.onChangeHandler = this.onChangeHander.bind(this)
    } // end of constructor function

    onClickHandler () {
        this.setState({name:"Logged In"})
    }

    onChangeHander (event) {
        this.setState({[event.target.name]: event.target.value})
    }
    // render
    render () {
        
        return (
            <div>
                <h1>{this.state.name}</h1>
                
                First Name<input onChange={this.onChangeHandler} name="fName" value ={this.state.fName}></input>
                <br></br>
                Last Name<input onChange={this.onChangeHandler} name="lName" value ={this.state.lName}></input>
                <br></br>
                <button onClick={this.onClickHandler} >Submit</button>
                <br></br>
                <br></br>
                <Link to="/signup">Signup</Link>
             </div>
            
        )
    }

}