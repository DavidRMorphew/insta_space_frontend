import { Form, FormLayout, TextField, Button, Page, Card, DisplayText } from '@shopify/polaris'
import { useState } from 'react'
import { connect } from 'react-redux'
import { setUser } from '../actions/userActions'
import { useHistory } from 'react-router-dom'

const base_url = "http://localhost:3001/api/v1/login"

const LoginForm = ({ setUser }) => {
    let history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = e => setEmail(e.target.value);

    const handlePasswordChange = e => setPassword(e.target.value);

    const handleSubmit = e => {
        e.preventDefault()

        const user = {
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
            body: JSON.stringify(user)
        }

        fetch(base_url, configObj)
        .then(resp => resp.json())
        .then(returnedUserData => {
            localStorage.setItem("token", returnedUserData.jwt)
            setUser(returnedUserData)
            history.push('/explore')
        })

        setEmail("");
        setPassword("");
    }

    return(
        <Page narrowWidth>
            <br></br>
            <Card>
        <form onSubmit={handleSubmit}>
            <DisplayText size="Large">Please Log In</DisplayText>
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

export default connect(null, { setUser })(LoginForm)