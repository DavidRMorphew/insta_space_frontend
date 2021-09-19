import './App.css';
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchImages } from './actions/imagesActions'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ExploreImagesContainer from './containers/ExploreImagesContainer';

function App({images, loading, fetchImages}) {
  
  useEffect(() => {
    fetchImages()
  }, [])
  
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>My-Insta-Space</h1>
        </header>
        <Switch>
          <Route exact path="/">
            <h1>Home</h1>
          </Route>
          <Route path="/explore">
            <ExploreImagesContainer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default connect(({images, loading}) => ({images, loading}), { fetchImages })(App);
