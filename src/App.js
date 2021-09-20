import './App.css';
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchImages } from './actions/imagesActions'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SignupForm from './components/SignupForm'
import LoginForm from './components/LoginForm'
import ExploreImagesContainer from './containers/ExploreImagesContainer';

function App({images, loading, fetchImages}) {
  
  // useEffect(() => {
  //   fetchImages()
  // }, [])
  
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 style={{ fontFamily: "Brush Script MT", fontSize: 50 }}>Insta-Space</h1>
        </header>
        <Switch>
          <Route exact path="/">
            <h1>Home</h1>
          </Route>
          <Route exact path="/explore">
            <ExploreImagesContainer />
          </Route>
          <Route exact path="/signup">
            <SignupForm />
          </Route>
          <Route exact path="/login">
            <LoginForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default connect(({images, loading}) => ({images, loading}), { fetchImages })(App);
