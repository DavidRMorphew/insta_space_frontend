import './App.css';
import { connect } from 'react-redux'

function App({demo}) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My-Insta-Space</h1>
      </header>
      <p>{demo}</p>
    </div>
  );
}

export default connect(({demo}) => ({demo}))(App);
