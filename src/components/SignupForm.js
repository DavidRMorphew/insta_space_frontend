import { Form, FormLayout, TextField, Button, Page, Card, DisplayText } from '@shopify/polaris'
import { useState, useCallback } from 'react'
const base_url = "http://localhost:3001/users"

const SignupForm = () => {
    
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
        console.log(user)

        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            credentials: 'include',
            body: JSON.stringify(user)
        }

        fetch(base_url, configObj)
        .then(resp => resp.json())
        .then(userData => console.log(userData))

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
                <button type="submit">Submit</button>
            </form>
        </Card>
        </Page>
    )
}

export default SignupForm