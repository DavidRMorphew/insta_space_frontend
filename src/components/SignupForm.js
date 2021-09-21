import { Form, FormLayout, TextField, Button, Page, Card, DisplayText } from '@shopify/polaris'
import { useState } from 'react'
import { connect } from 'react-redux'
import { setUser } from '../actions/userActions'
import { useHistory } from 'react-router-dom'

const base_url = "http://localhost:3001/api/v1/users"

const SignupForm = ({ setUser }) => {
    let history = useHistory()
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = e => setUsername(e.target.value);

    const handleEmailChange = e => setEmail(e.target.value);

    const handlePasswordChange = e => setPassword(e.target.value);

    const handleSubmit = e => {
        e.preventDefault()

        const user = {
            username,
            email,
            password
        }

        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify(user)
        }

        fetch(base_url, configObj)
        .then(resp => resp.json())
        .then(returnedUserData => {
            localStorage.setItem("token", returnedUserData.jwt);
            setUser(returnedUserData);
            history.push('/explore')
        })

        setUsername("");
        setEmail("");
        setPassword("");
    }

    return(
        <Page narrowWidth>
            <br></br>
            <Card>
        <form onSubmit={handleSubmit}>
            <DisplayText size="Large">Sign up to see photos from Nasa's Rovers and Astronomical Picture of the Day</DisplayText>
            <br></br>
                <input
                    name="username"
                    type="text" 
                    value={username}
                    onChange={handleUsernameChange}
                    placeholder="username"
                    required
                />
            <br></br>
                <input
                    name="email" 
                    value={email}
                    onChange={handleEmailChange}
                    type="email"
                    placeholder="email"
                    required
                />
            <br></br>
                <input
                    name="password" 
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="password"
                    required
                />
                <br></br>
                <Button submit={true}>Sign Up</Button>
            </form>
        </Card>
        </Page>
    )
}

export default connect(null, { setUser })(SignupForm)