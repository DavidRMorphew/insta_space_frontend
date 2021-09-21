import { connect } from 'react-redux'
import { Page, Card, DisplayText, Button } from '@shopify/polaris'
import { logoutUser } from '../actions/userActions'

const Home = ({user: { username, email }, logoutUser }) => {
    return(
        <div>
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

export default connect(({ user }) => ({ user }), { logoutUser })(Home)