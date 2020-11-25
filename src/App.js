import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Store } from './store';
import Profile from './components/Profile/index';
import ProfileSettings from './components/ProfileSettings/index';

function App() {
  return (
    <Switch>
      <Route exact path="/" render={props => <Store><Profile {...props} /></Store> } />
      <Route exact path="/settings" render={props => <Store><ProfileSettings {...props} /></Store> } />
    </Switch>
  );
}

export default App;
