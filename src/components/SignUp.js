//function component - returns jsx
import React from 'react'
import {Link} from 'react-router-dom'

export default function SignUp(props) {

    //message is the one we use, setMessage is the function used to change
    let [message, setMessage] = React.useState(props.initialMessage)
    let [fName, setfName] = React.useState("")
    let [lName, setlName] = React.useState("")
    let [userName, setuserName] = React.useState("")

    const onClickHandler = () => {
        setMessage("New User Created")
    }

    const onChangeHandler = (event) => {

        switch (event.target.name) {
            case 'fName':
                setfName(event.target.value)
                break

            case 'lName':
                setlName(event.target.value)
                break

            case 'userName':
                setuserName(event.target.value)
                break
            default:

        }
    }

    return (
        <div>
            <h1>{message}</h1>
            Enter First Name<input onChange={onChangeHandler} name="fName" value={fName}></input>
            <br></br>
            Enter Last Name<input onChange={onChangeHandler} name="lName" value={lName}></input>
            <br></br>
            Enter New User Name<input onChange={onChangeHandler} name="userName" value={userName}></input>
            <br></br>
            <button onClick={onClickHandler}>Sign Up</button>
            <br></br>
            <br></br>
            <Link to="/">Go to Login Screen</Link>
        </div>
    )
}

