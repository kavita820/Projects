import {BrowserRouter as Router,Route} from 'react-router-dom';
import Hodlinfo from './hodlinfo';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
       <Route path='/' exact component={Hodlinfo} />
        </Router>
    </div>
  );
}

export default App;
