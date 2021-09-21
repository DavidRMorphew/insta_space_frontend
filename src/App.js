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
import Navbar from './components/Navbar'
import Home from './components/Home'

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
      .then(resp => {
        if (!resp.ok){
          throw Error(resp.statusText)
        } else {
          return resp.json();
        }
      })
      .then(returnUserData => {
        setUser(returnUserData)
      })
      .catch(error => console.log(error))
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
            <br></br>
            <br></br>
          { loggedIn ? <Navbar/> : <h1 style={{ fontFamily: "Script MT", fontSize: 30 }}>Welcome!</h1>}
        </header>
        <Switch>
        
          <Route exact path="/signup">
            <SignupForm />
          </Route>
          
          <Route path="/login">
            <LoginForm />
          </Route>

          <Route exact path="/home">
            { loggedIn ? <Home /> : <Redirect to="/login" />}
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
