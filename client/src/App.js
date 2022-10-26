import './App.css';
import Home from './components/Home'
import Activity from './components/Activity'
import CountryDetail from './components/CountryDetail'
import LandingPage from './components/LandingPage'
import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Switch>
      <Route
    exact path='/'
    render={() => <LandingPage />}
    />
    <Route
    path='/home'
    render={() => <Home />}
    />
    <Route
     path='/country/:id'
     component= {CountryDetail} 
    />
    <Route
    path='/activity/create'
    render={() => <Activity />}
    />
    </Switch>  
    </div>
  );
}

export default App;
