import './App.css';
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchImages } from './actions/imagesActions'
// import { Card } from '@shopify/polaris'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App({images, loading, fetchImages}) {
  
  // useEffect(() => {
  //   fetchImages()
  // }, [])

  // const renderImages = () => {
  //   console.dir(images)
  //   return images.map(image => <Card key={image.title}><img src={image.image_url}></img></Card>)
  // }
  
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
            <h1>Explore</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default connect(({images, loading}) => ({images, loading}), { fetchImages })(App);
