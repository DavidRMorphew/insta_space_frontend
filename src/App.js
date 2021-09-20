import './App.css';
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchImages } from './actions/imagesActions'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import SignupForm from './components/SignupForm'
import LoginForm from './components/LoginForm'
import ExploreImagesContainer from './containers/ExploreImagesContainer';
import { setUser } from './actions/userActions'

const url = "http://localhost:3001/api/v1/logged_in"

function App({images, loading, fetchImages, user, setUser}) {
  
  // Check to see if the user is still logged in at app mount
  useEffect(() => {
    setUserIfAlreadyLoggedIn()
  }, [])

  const setUserIfAlreadyLoggedIn = () => {
    const token = localStorage.getItem("token")
    if (token){
      fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(resp => resp.json())
      .then(returnUserData => {
        setUser(returnUserData)
      })
    }
  }

  // useEffect(() => {
  //   fetchImages()
  // }, [])

  let loggedIn = JSON.stringify(user) === "{}" ? false : true

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 style={{ fontFamily: "Brush Script MT", fontSize: 50 }}>Insta-Space</h1>
        </header>
        <Switch>
        
          <Route exact path="/signup">
            <SignupForm />
          </Route>
          
          <Route path="/login">
            <LoginForm />
          </Route>

          <Route exact path="/home">
            { loggedIn ? <h1>Home</h1> : <Redirect to="/login" />}
          </Route>
          
          <Route exact path="/explore">
            {console.log(loggedIn)}
            { loggedIn ? <ExploreImagesContainer /> : <Redirect to="/login" />}
          </Route>
        
        </Switch>
      </div>
    </Router>
  );
}

export default connect(({images, loading, user}) => ({images, loading, user}), { fetchImages, setUser })(App);
