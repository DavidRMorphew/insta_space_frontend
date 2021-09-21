import { connect } from 'react-redux'
import { Page, Card, DisplayText } from '@shopify/polaris'

const Home = ({user: { username, email } }) => {
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
                
                </Card>
            </Page>
        </div>
    )
}

export default connect(({ user }) => ({ user }))(Home)