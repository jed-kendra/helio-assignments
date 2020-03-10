//function component - returns jsx
import React from 'react'
import { Link } from 'react-router-dom'
import {uriBase, api} from '../const'

export default function SignUp(props) {

    //message is the one we use, setMessage is the function use to change
    let [message, setMessage] = React.useState(props.initialMessage)
    let [fName, setfName] = React.useState("")
    let [lName, setlName] = React.useState("")
    let [userName, setUserName] = React.useState("")
    let [password, setPassword] = React.useState("")


    const onClickHandler = (event) => {
        event.preventDefault()
        
        let formData = new FormData()
        formData.append("fName", fName)
        formData.append("lName", lName)
        formData.append("userName", userName)
        formData.append("password", password)

        fetch (`${uriBase}${api}/users/signup`, {
            method: "POST",
            body: formData

        })
        .then (HttpRequest => {
            if(!HttpRequest.ok) {
                throw new Error("Couldn't Add User")
            }
            return HttpRequest.json()
        })
        .then (user => {
            //ToDo handle user
            setMessage("Welcome")
        })
        .catch (error => {
            console.log(error)
        })
       
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
                setUserName(event.target.value)
                break
            case 'password':
                setPassword(event.target.value)
                break

            default:

        }
    }

    return (
            <div>
                <h1>{message}</h1>
                <form>
                <div>
                    First Name<input onChange={onChangeHandler} name="fName" value={fName}></input>
                    Last Name<input onChange={onChangeHandler} name="lName" value={lName}></input>
                    User Name<input onChange={onChangeHandler} name="userName" value={userName}></input>
                    Password<input onChange={onChangeHandler} name="password" value={password}></input>
                </div>
                <div>
                    <input type="submit" onClick={onClickHandler}></input>
                </div>
                <div>
                    <Link to="/">Go to Login Screen</Link>
                </div>
                </form>
            </div>
            )
}