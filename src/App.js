import { Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import About from './screens/About';
import ContactMe from './screens/ContactMe';
import Projects from './screens/Projects';
import LandingPage from './screens/LandingPage';

function App() {
  return (
    <div className="App">
      <Route exact path='/'>
        <LandingPage />
      </Route>
      <Route path='/header'>
        <Header />
      </Route>
      <Route path='/projects'>
        <Projects />
      </Route>
      <Route path='/about'>
        <About />
      </Route>
      <Route path='/contact'>
        <ContactMe />
      </Route>
    </div>
  );
}

export default App;
