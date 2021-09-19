import './App.css';
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchImages } from './actions/imagesActions'

function App({images, loading, fetchImages}) {
  
  useEffect(() => {
    fetchImages()
  }, [fetchImages])
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>My-Insta-Space</h1>
      </header>
      <ul>
        <p>{loading ? "Loading" : "Loading Complete"}</p>
      </ul>
    </div>
  );
}

export default connect(({images, loading}) => ({images, loading}), { fetchImages })(App);
