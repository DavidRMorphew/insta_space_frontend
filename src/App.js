import './App.css';
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchImages } from './actions/imagesActions'
import { Card } from '@shopify/polaris'

function App({images, loading, fetchImages}) {
  
  useEffect(() => {
    fetchImages()
  }, [])

  const renderImages = () => {
    console.dir(images)
    return images.map(image => <Card key={image.title}><img src={image.image_url}></img></Card>)
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>My-Insta-Space</h1>
      </header>
        <p>{loading ? "Loading" : "Loading Complete"}</p>
      <ul>
        {renderImages()}
      </ul>
    </div>
  );
}

export default connect(({images, loading}) => ({images, loading}), { fetchImages })(App);
