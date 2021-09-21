import { connect } from 'react-redux'
import { Page, Card, DisplayText, Button } from '@shopify/polaris'
import { logoutUser } from '../actions/userActions'
import { useState, useEffect } from 'react'

const url = 'http://localhost:3001/api/v1/users/show'

const Home = ({ user: { email, username }, loading, logoutUser }) => {
    const [likesCount, setLikesCount] = useState(0)
    const [commentsCount, setCommentsCount] = useState(0)

    useEffect(() => {
        const token = localStorage.getItem("token")
        fetch(url, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
        .then(resp => resp.json())
        .then(data => console.log(data))         
        return () => {
        setLikesCount(0)
        setCommentsCount(0)
        }
    }
    )

    return(
        <div>
            { loading ? "loading" : ""}
            <Page narrowWidth>
                <br></br>
                <Card>
                    <br></br>
                    <DisplayText size="Medium">Username</DisplayText>
                    <DisplayText size="Small">{username}</DisplayText>
                        <br></br>
                    <DisplayText size="Medium">Email</DisplayText>
                    <DisplayText size="Small">{email}</DisplayText>
                        <br></br>
                    <Button size="large" outline={true} primary={true} onClick={logoutUser}>Logout</Button>
                        <br></br>
                        <br></br>
                </Card>
            </Page>
        </div>
    )
}

export default connect(({ user, loading }) => ({ user, loading }), { logoutUser })(Home)