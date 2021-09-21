import { Form, FormLayout, TextField, Button, Page, Card, DisplayText } from '@shopify/polaris'
import { useState } from 'react'
import { connect } from 'react-redux'
import { setUser, loginUser } from '../actions/userActions'
import { useHistory } from 'react-router-dom'

const base_url = "http://localhost:3001/api/v1/login"

const LoginForm = ({ setUser, loginUser }) => {
    let history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = e => setEmail(e.target.value);

    const handlePasswordChange = e => setPassword(e.target.value);

    const handleSubmit = e => {
        e.preventDefault();
        const user = {
            email,
            password
        }
        loginUser(user, history);
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
                <Button submit={true}>Log In</Button>
                <h1>Or</h1>
                <Button outline={true} primary={true} removeUnderline={true} onClick={() => history.push('/signup')}>Sign Up</Button>
            </form>
        </Card>
        </Page>
    )
}

export default connect(null, { setUser, loginUser })(LoginForm)