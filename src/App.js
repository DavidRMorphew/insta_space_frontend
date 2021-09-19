import './App.css';
import { connect } from 'react-redux'

function App({images}) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My-Insta-Space</h1>
      </header>
      <ul>
        {images.map((image, i) => <li key={i}>{image}</li>)}
      </ul>
    </div>
  );
}

export default connect(({images}) => ({images}))(App);
