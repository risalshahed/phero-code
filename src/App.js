
import { Button, Spinner } from 'react-bootstrap';
import './App.css';
import CardGroupReactBootStrap from './components/CardGroup-React-BootStrap/CardGroup-React-BootStrap';

// npm install react-bootstrap bootstrap
// See details in index.js file

function App() {
  return (
    <div className="App">
      <h1>React Bootstrap</h1>
      <Button variant='danger'>Danger</Button>
      <br />
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <CardGroupReactBootStrap />
    </div>
  );
}

export default App;
