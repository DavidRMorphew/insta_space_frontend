import { Form, FormLayout, TextField, Button, Page, Card, DisplayText } from '@shopify/polaris'
import { useState, useCallback } from 'react'

const SignupForm = () => {
    
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = useCallback((value) => setUsername(value), []);

    const handleEmailChange = useCallback((value) => setEmail(value), []);

    const handlePasswordChange = useCallback((value) => setPassword(value), []);

    const handleSubmit = useCallback((_event) => {
        setUsername("");
        setEmail("");
        setPassword("")
        // add fetch to submit information
        console.log(email)
    }, [])
    return(
        <Page narrowWidth>
            <br></br>
            <Card>
        <Form onSubmit={handleSubmit}>
            <FormLayout>
            <br></br>
            <DisplayText size="Large">Sign up to see photos from Nasa's Rovers and Astronomical Picture of the Day</DisplayText>
            <br></br>
                <TextField
                    required
                    fieldID="username"
                    label="Username" 
                    value={username}
                    onChange={handleUsernameChange}
                />

                <TextField
                    label="Email" 
                    value={email}
                    onChange={handleEmailChange}
                    type="email"
                />

                <TextField
                    label="Password" 
                    value={password}
                    onChange={handlePasswordChange}
                    type="password"
                />
                <Button submit>Submit</Button>
            </FormLayout>
        </Form>
        </Card>
        </Page>
    )
}

export default SignupForm