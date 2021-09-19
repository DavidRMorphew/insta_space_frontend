import './App.css';
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchImages } from './actions/imagesActions'

function App({images , fetchImages}) {
  
  useEffect(() => {
    fetchImages()
  }, [fetchImages])
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>My-Insta-Space</h1>
      </header>
      <ul>
        {/* {images.map((image, i) => <li key={i}>{image}</li>)} */}
      </ul>
    </div>
  );
}

export default connect(({images}) => ({images}), { fetchImages })(App);
