import { Route } from 'react-router-dom';
import './App.css';

import LandingPage from './screens/LandingPage';

function App() {
  return (
    <div className="App">
      <Route exact path='/'>
        <LandingPage />
      </Route>
      
    </div>
  );
}

export default App;
